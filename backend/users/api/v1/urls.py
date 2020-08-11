from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HfkhfjfhkViewSet

router = DefaultRouter()
router.register("hfkhfjfhk", HfkhfjfhkViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
