from django.conf.urls import include, url
from rest_framework import routers

from .api import LeaveViewSet, RegistrationAPI, LoginAPI, UserAPI

router = routers.DefaultRouter()
router.register('leave_api', LeaveViewSet, 'leave_api')

urlpatterns = [
    url("^", include(router.urls)),
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
]
