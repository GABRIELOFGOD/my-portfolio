from main import Data
print('welcome on bored.')
print('you\'re about to take a test.')

def test(Data):
    return Data

pm = input('What project are you here for?')
if pm == Data.project:
    print('You\'re welcome ' + Data.name)
else:
    print('invalid')