import urllib2
import json

def getJson(symbol):
    results = urllib2.urlopen("https://api.robinhood.com/quotes/?symbols="+symbol)
    return json.loads(results.read())

def getAskPrice(data):
    return data["ask_price"]

def getSymbol(data):
    return data["symbol"]

def getAfterHoursPrice(data):
    return data["last_extended_hours_trade_price"]

goog = getJson("GOOG")["results"][0]

print(getSymbol(goog) + " " +getAskPrice(goog) + " After Hours: " + getAfterHoursPrice(goog) )
