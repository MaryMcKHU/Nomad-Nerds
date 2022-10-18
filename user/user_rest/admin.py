from django.contrib import admin

# Register your models here.
from .models import Favorite


@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    pass
