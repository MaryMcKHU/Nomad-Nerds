# from django.urls import reverse, resolve
# from django.test import SimpleTestCase
# from user_rest.views import (
# user_favorites,
# users,
# user_token,
# get_current_user )


# class TestUrls(SimpleTestCase):
#     def test_user_favorites_is_resolved(self):
#         url = reverse("user_favorites")
#         print(resolve(url))
#         self.assertEquals(resolve(url).func, user_favorites)

#     def test_users_is_resolved(self):
#         url = reverse("user_signup")
#         print(resolve(url))
#         self.assertEquals(resolve(url).func, users)

#     def test_user_token_is_resolved(self):
#         url = reverse("user_token")
#         print(resolve(url))
#         self.assertEquals(resolve(url).func, user_token)

#     def test_get_current_user_is_resolved(self):
#         url = reverse("get_current_user")
#         print(resolve(url))
#         self.assertEquals(resolve(url).func, get_current_user)
