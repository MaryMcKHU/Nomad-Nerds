from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField

USER_MODEL = settings.AUTH_USER_MODEL


class Favorite(models.Model):
    user = models.ForeignKey(
        USER_MODEL,
        related_name="favorite",
        on_delete=models.CASCADE,
        null=True,
    )
    business_id = models.CharField(max_length=30, null=True)
    business_name = models.CharField(max_length=100, null=True)
    business_image = models.URLField(null=True)
    business_rating = models.FloatField(null=True)
    business_price = models.CharField(max_length=5, null=True)
    business_display_address = ArrayField(
        models.CharField(
            max_length=50,
            blank=True),
        size=3,
        default=list
    )
    business_city = models.CharField(max_length=30)
    business_state = models.CharField(max_length=25)

    class Meta:
        unique_together = ("business_id", "user")
