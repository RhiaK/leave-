from twilio.rest import Client;
from .env import *


client = Client(TWILIO_ACCOUNT_SID, TWILIO_ACCOUNT_AUTH_TOKEN)

message = client.messages.create(
    to="+17193298921", 
    from_="+17193236514",
    body="Hello :)")

print(message.sid)