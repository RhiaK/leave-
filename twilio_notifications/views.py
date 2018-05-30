from django_twilio.decorators import twilio_view
from twilio.twiml.messaging_response import MessagingResponse
 
@twilio_view
def sms(request):
    r = Response()
    r.message('Hello from your Django app!')
    return r