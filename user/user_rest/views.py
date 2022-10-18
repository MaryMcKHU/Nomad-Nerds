from common.json import ModelEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Favorite
import json
from django.contrib.auth.models import User
from django.db import IntegrityError
import djwto.authentication as auth


class UserEncoder(ModelEncoder):
    model = User
    properties = [
        "username",
    ]


class FavoriteEncoder(ModelEncoder):
    model = Favorite
    properties = [
        "id",
        "username",
        "business_id",
        "business_name",
        "business_image",
        "business_rating",
        "business_price",
        "business_display_address",
        "business_city",
        "business_state"
    ]


@auth.jwt_login_required
@require_http_methods(["GET", "POST", "DELETE"])
def user_favorites(request, business_id=None):
    payload_dict = json.dumps(request.payload)
    user_information = json.loads(payload_dict)
    user_id = user_information["user"]["id"]

    if request.method == "POST":
        content = json.loads(request.body)
        try:
            favorite = Favorite.objects.create(
                business_id=content["business_id"],
                business_name=content["business_name"],
                business_image=content.get("business_image"),
                business_rating=content.get("business_rating"),
                business_price=content.get("business_price", ""),
                business_display_address=content.get(
                    "business_display_address",
                    ["", "", ""]
                ),
                business_city=content.get("business_city", ""),
                business_state=content.get("business_state", ""),
                user=User.objects.get(id=user_id)
            )
            return JsonResponse({"message": "Done"})
        except Exception:
            response = JsonResponse({"message": "Could not create a favorite"})
            response.status_code = 400
            return response

    elif request.method == "GET":
        try:
            favorite = list(
                map(
                    (lambda item: vars(item)),
                    Favorite.objects.filter(user=user_id))
            )
            for item in favorite:
                item.pop("_state")
                if item["business_display_address"] is None:
                    item["business_display_address"] == ["", "", ""]
            return JsonResponse(favorite, safe=False)
        except Favorite.DoesNotExist:
            response = JsonResponse({"message": "No favorited businesses"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        favorite = Favorite.objects.get(
            user=User.objects.get(id=user_id), business_id=business_id
        )
        favorite.delete()
        return JsonResponse({"message": "Done"})


@require_http_methods(["GET", "POST"])
def users(request):
    if request.method == "POST":
        try:
            content = json.loads(request.body)
            user = User.objects.create_user(
                username=content["username"],
                password=content["password"],
                email=content["email"],
                first_name=content["first_name"],
                last_name=content["last_name"],
            )
            return JsonResponse(
                {"username": user},
                safe=False,
                encoder=UserEncoder,
            )
        except IntegrityError:
            response = JsonResponse(
                {"detail": "Please enter a different username and email"}
            )
            response.status_code = 409
            return response
    else:
        users = User.objects.all()
        return JsonResponse({"users": users}, encoder=UserEncoder, safe=False)


@require_http_methods(["GET"])
def user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response


@require_http_methods(["GET"])
@auth.jwt_login_required
def get_current_user(request):

    return JsonResponse(
        {
            "id": request.payload["user"]["id"],
            "username": request.payload["user"]["username"],
        }
    )
