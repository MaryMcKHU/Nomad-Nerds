# from django.test import TestCase
# from user_rest.models import models


# class TestModels(TestCase):
#     def test_project_favorite_has_char_name_field(self):
#         try:
#             from user_rest.models import Favorite

#             business_id = Favorite.business_id
#             self.assertIsInstance(
#                 business_id.field,
#                 models.CharField,
#                 msg="Favorite.business_id should be a character field",
#             )
#         except ModuleNotFoundError:
#             self.fail("Could not find 'user_rest.models'")
#         except ImportError:
#             self.fail("Could not find 'user_rest.models.Favorite'")
#         except AttributeError:
#             self.fail("Could not find 'Favorite.business_id'")

#     def test_favorite_model_has_users_related_to_auth_user(self):
#         try:
#             from django.contrib.auth.models import User
#             from user_rest.models import Favorite

#             user = Favorite.user
#             self.assertEqual(
#                 user.field.related_model,
#                 User,
#                 msg=
#               "Favorite.user should be related to the 'auth.User' model"
#             )
#         except ModuleNotFoundError:
#             self.fail("Could not find 'user_rest.models'")
#         except ImportError:
#             self.fail("Could not find 'user_rest.models.Favorite'")
#         except AttributeError:
#             self.fail("Could not find 'Favorite.users'")
