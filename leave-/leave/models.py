import datetime
from django.db import mnpodels
from django.utils import timezone

STATE_CHOICES = (
	('ST', 'State'), ('AL', 'Alabama'), ('AK', 'Alaska'), ('AZ', 'Arizona'), ('AR', 'Arkansas'), ('CA', 'California'), ('CO', 'Colorado'), ('CT', 'Connecticut'), ('DE', 'Delaware'), ('DC', 'District of Columbia'), ('FL', 'Florida'), ('GA', 'Georgia'), ('HI', 'Hawaii'), ('ID', 'Idaho'), ('IL', 'Illinois'), ('IN', 'Indiana'), ('IA', 'Iowa'), ('KS', 'Kansas'), ('KY', 'Kentucky'), ('LA', 'Louisiana'), ('ME', 'Maine'), ('MD', 'Maryland'), ('MA', 'Massachusetts'), ('MI', 'Michigan'), ('MN', 'Minnesota'), ('MS', 'Mississippi'), ('MO', 'Missouri'), ('MT', 'Montana'), ('NE', 'Nebraska'), ('NV', 'Nevada'), ('NH', 'New Hampshire'), ('NJ', 'New Jersey'), ('NM', 'New Mexico'), ('NY', 'New York'), ('NC', 'North Carolina'), ('ND', 'North Dakota'), ('OH', 'Ohio'), ('OK', 'Oklahoma'), ('OR', 'Oregon'), ('PA', 'Pennsylvania'), ('RI', 'Rhode Island'), ('SC', 'South Carolina'), ('SD', 'South Dakota'), ('TN', 'Tennessee'), ('TX', 'Texas'), ('UT', 'Utah'), ('VT', 'Vermont'), ('VA', 'Virginia'), ('WA', 'Washington'), ('WV', 'West Virginia'), ('WI', 'Wisconsin'), ('WY', 'Wyoming')
)

class Dest(models.Model):
	dest_title = models.CharField(max_length=20)
	dest_add = models.CharField(max_length=20)
	dest_city = models.CharField(max_length=20)
	dest_state = models.CharField(max_length=20, choices=STATE_CHOICES, default='state')
	dest_zipcode = models.IntegerField()
	dest_time = models.TimeField(auto_now=False, auto_now_add=False)

class User(models.Model):
	username = models.CharField(max_length=50)
	email = models.CharField(max_length=50)
	password = models.CharField(max_length=20)
	phone = models.IntegerField()
	dest = models.ForeignKey(Dest, on_delete=models.CASCADE)

	def __str__(self):
		return self.dest_title



from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    text = models.CharField(max_length=255)
    owner = models.ForeignKey(User, related_name="notes", on_delete=models.CASCADE,
                              null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text
