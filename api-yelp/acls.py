import requests
import os


def categories_request(location="", quantity=1):
    url = "https://api.yelp.com/v3/businesses/search"
    headers = {"Authorization": "Bearer {}".format(os.environ["API_YELP_KEY"])}
    data = []
    for offset in range(0, quantity * 50, 50):
        params = {
            "location": location,
            "limit": 50,
            "offset": offset,
            "sort_by": "rating",
            "categories": "shopping,nightlife,hotelstravel,arts,active",
        }
        res = requests.get(url, headers=headers, params=params)
        if res.status_code == 200:
            data += res.json().get("businesses")
    return data


def businesses_request(categories="", location="", quantity=1):
    url = "https://api.yelp.com/v3/businesses/search"
    headers = {"Authorization": "Bearer {}".format(os.environ["API_YELP_KEY"])}
    data = []
    for offset in range(0, quantity * 50, 50):
        params = {
            "location": location,
            "limit": 50,
            "offset": offset,
            "sort_by": "rating",
            "categories": categories,
        }
        res = requests.get(url, headers=headers, params=params)
        data += res.json().get("businesses", {})
    return data


def category_request(categories=[], quantity=1, cities=[]):
    url = "https://api.yelp.com/v3/businesses/search"
    headers = {"Authorization": "Bearer {}".format(os.environ["API_YELP_KEY"])}
    data = []
    for city in cities:
        for offset in range(0, quantity * 50, 50):
            params = {
                "location": city,
                "limit": 50,
                "offset": offset,
                "sort_by": "rating",
                "categories": ",".join(categories),
            }
            res = requests.get(url, headers=headers, params=params)
            if res.status_code == 200:
                raw_data = res.json()["businesses"]
                for business in raw_data:
                    business["city_info"] = city
                data += raw_data
    return data


def get_business(id=""):
    url = "https://api.yelp.com/v3/businesses/{}".format(id)
    headers = {"Authorization": "Bearer {}".format(os.environ["API_YELP_KEY"])}
    res = requests.get(url, headers=headers)
    data = res.json()
    return data, res.status_code
