from django.contrib import admin
from .models import board

# Register your models here.

@admin.register(board)
class BoardAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'title', 'description')