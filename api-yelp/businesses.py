from fastapi import APIRouter
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from acls import (
    businesses_request,
    category_request,
    get_business,
    categories_request
)

yelp_router = APIRouter()


class BusinessOut(BaseModel):
    business_id: int
    city: str
    state: str
    country: str
    categories: list
    rating: float


class BusinessesOut(BaseModel):
    businesses: list[BusinessOut]


# Input a location: Return List of ranked Categories (Right side of Main Page)
@yelp_router.get("/api-yelp/businesses/categories/")
def get_categories(location: str, quantity: int = 1):
    raw_data = categories_request(location=location, quantity=quantity)
    categories = {}
    titles = {}
    cat_list = []
    for business in raw_data:
        for cat in business["categories"]:
            if cat["alias"] not in categories:
                categories[cat["alias"]] = 0
            categories[cat["alias"]] += 1
            if cat["alias"] not in titles:
                titles[cat["alias"]] = cat["title"]
    for key, value in categories.items():
        cat_list.append((key, titles[key], value))
    sorted_cat_list = sorted(cat_list, key=lambda x: x[2], reverse=True)
    return {"categories": sorted_cat_list}


# Input a string of categories and a string of cities:
# Returns a ranked list of cities (Left side of Main Page)
@yelp_router.get("/api-yelp/businesses/categories/search/")
def get_locations(categories: str, quantity: int = 1, cities: str = "nyc"):
    cities.replace("%20", " ")
    cities = cities.split(";")
    raw_data = category_request(
        categories=[
            categories,
        ],
        quantity=quantity,
        cities=cities,
    )
    locations = {}
    local_list = []
    for business in raw_data:
        location = business["city_info"]
        if location not in locations:
            locations[location] = 0
        locations[location] += 1
    for key, value in locations.items():
        local_list.append((key, value))
    sorted_local_list = sorted(local_list, key=lambda x: x[1], reverse=True)
    return {"cities": [x[0] for x in sorted_local_list]}


# Input a category and Location: Return a list of ranked Businesses
@yelp_router.get("/api-yelp/businesses/list")
def get_business_list(category: str, location: str, quantity: int = 1):
    raw_data = businesses_request(
        categories=category, location=location, quantity=quantity
    )
    return raw_data


# Input a business ID: Return business Info + Pic
@yelp_router.get("/api-yelp/businesses/details")
def get_business_info(id: str):
    raw_data = get_business(id)
    data = {}
    data["name"] = raw_data.get("name", "")
    data["id"] = raw_data.get("id", "")
    data["image_url"] = raw_data.get("image_url", "")
    data["rating"] = raw_data.get("rating", "")
    data["price"] = raw_data.get("price", "")
    try:
        data["display_address"] = raw_data.get("location").get(
            "display_address", ["", "", ""]
        )
        data["state"] = raw_data.get("location").get("state", "")
        data["city"] = raw_data.get("location").get("city", "")
        data["country"] = raw_data.get("location").get("country", "")
    except Exception:
        data["display_address"] = ["", "", ""]
        data["state"] = ""
        data["city"] = ""
        data["country"] = ""
    return JSONResponse(content=data)
