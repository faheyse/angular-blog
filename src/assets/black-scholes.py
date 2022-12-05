import yfinance as yf
from scipy.stats import norm
import numpy as np
import urllib.request
from math import sqrt, exp
from math import log as ln
import matplotlib.pyplot as plt

ticker = "GOOGL"
stock = yf.Ticker(ticker)

returns = np.zeros(5)
for i in range(5):
    t0 = stock.history(start=str(2017+i)+"-01-01",end=str(2017+i)+"-01-05")
    t1 = stock.history(start=str(2018+i)+"-01-01",end=str(2018+i)+"-01-05")
    returns[i] = ( t1.at[str(t1.index[0]).split()[0],"Close"] - t0.at[str(t0.index[0]).split()[0],"Close"] ) / t0.at[str(t0.index[0]).split()[0],"Close"]

    

var = np.var(returns)


fp = urllib.request.urlopen("https://www.cnbc.com/quotes/US10Y")
mystr = fp.read().decode("utf8")
fp.close()
quote = "QuoteStrip-lastPrice\""
pos = mystr.find(quote) + len(quote)
r = float(mystr[pos+1:pos+10].split('%')[0])/100
print('r = ', r)

T = 1


a = stock.history(period='ytd')
asset = np.array(a["Close"])
n = asset.size

k = asset[0]            # strike price at the money
call = np.zeros(n)
put = np.zeros(n)

for i in range(n):
    d1 = ( ln(asset[i]/k) + (r + var/2)*(T - i/n) )/( sqrt(var)*sqrt(T- i/n) )
    d2 = d1 - sqrt(var)*sqrt(T - i/n)
    call[i] = norm.cdf(d1)*asset[i] -norm.cdf(d2)*k*exp(-r*(T - i/n))
    put[i] = norm.cdf(-d2)*k*exp(-r*(T - i/n)) - norm.cdf(-d1)*asset[i]


time = np.arange(n)

walk_file = open('./prices.csv', 'w')
for t in length(time):
    walkfile.write(string(asset[t])+',' + string(put[t]) + ',' + string(call[i]) +'\n')
walk_file.close()


plt.plot(time, asset, linewidth=0.5, label="asset")
plt.plot(time, put, linewidth=0.5, label='put', linestyle=':')
plt.plot(time, call, linewidth=0.5, label="call", linestyle='-.')

plt.plot()
plt.ylabel('')
plt.xlabel('')
plt.legend()
plt.title("Strike Price:  $" + str(k) + "        Ticker: \'" + ticker + "\'")
plt.show()