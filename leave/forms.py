from django import forms
from .models import Dest

class DestForm(forms.ModelForm):
	class Meta:
		model = Destination
		fields = ['dest_title', 'dest_add', 'dest_city', 'dest_state', 'dest_zipcode', 'dest_time']

class SignupForm(forms.Form):
	username = forms.CharField(max_length=50)
	email = forms.CharField(max_length=50)
	password = forms.CharField(max_length=20)
	phone = forms.IntegerField()

