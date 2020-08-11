from rest_framework import authentication
from users.models import Hfkhfjfhk
from .serializers import HfkhfjfhkSerializer
from rest_framework import viewsets


class HfkhfjfhkViewSet(viewsets.ModelViewSet):
    serializer_class = HfkhfjfhkSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Hfkhfjfhk.objects.all()
