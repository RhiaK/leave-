from twilio.rest import Client
import os

account_sid = os.environ.get('TWILIO_ACCOUNT_SID')
auth_token  = os.environ.get('TWILIO_AUTH_TOKEN')
twilio_phone = "+17193236514"
user_phone = ""

client = Client(account_sid, auth_token)

message = client.messages.create(
    to=user_phone, 
    from_=twilio_phone,
    body="You should leave within the next 15 minutes to reach your destination by the selected arrival time")

print(message.sid)