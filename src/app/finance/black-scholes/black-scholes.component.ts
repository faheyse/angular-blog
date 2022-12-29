import { Component, OnInit} from '@angular/core';
import stock_data from "../stock_data.json" ;

@Component({
  selector: 'app-black-scholes',
  templateUrl: './black-scholes.component.html',
  styleUrls: ['./black-scholes.component.scss']
})


export class BlackScholesComponent implements OnInit{
  options!: any;
  sel:number = 0; 
  button_bg!:string [] ; 



  black_scholes = "$ \\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + rS\\frac{\\partial V}{\\partial S} -rV = 0 $"; 
  call = "$ C(S_t, t) = N(d_1)S_t - N(d_2)Ke^{-r(T-t)} $" ; 
  put = "$ P(S_t, t) = N(-d_2)Ke^{-r(T-t)} - N(-d_1)S_t $" ;
  d1 = "$ d_1 = \\frac{1}{\\sigma\\sqrt{T-t}}[ln(\\frac{S_t}{K}) + (r + \\frac{\\sigma^{2}}{2})(T-t)] $" ; 
  d2 = "$ d_2 = d_1 - \\sigma\\sqrt{T-t} $"; 

constructor() {}

  ngOnInit(): void {
    this.graph(this.sel) ; 
}


  select(s:number) {
      this.sel = s ; 
      this.graph(this.sel) ; 
  }

  graph(sel:number){
    const xAxisData = [];
    var stock:any ; 
    let ticker:string = "" ; 
    switch(sel){
      case 0:
        ticker = "GOOG" ; 
        stock = stock_data.GOOG["share_price"] ; 
        this.button_bg =  ["#939393", "#ededed", "#ededed"] ; 
        break;
      case 1:
        ticker = "AAPL" ;
        stock = stock_data.AAPL["share_price"] ; 
        this.button_bg =  ["#ededed", "#939393", "#ededed"] ; 
        break;
      case 2:
        ticker = "MSFT" ; 
        stock = stock_data.MSFT["share_price"] ; 
        this.button_bg =  ["#ededed", "#ededed", "#939393"] ; 
        break;
    }

    for (let i = 0; i < stock.length; i++) {
      xAxisData.push(i);
    }

    this.options = {
      legend: {
        data: [ticker, "call", "put"],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: ticker,
          type: 'line',
          data: stock_data.GOOG["share_price"],
          animationDelay: (idx:any) => idx * 3,
        },
        {
          name: "call",
          type: 'line',
          data: stock_data.GOOG["call"],
          animationDelay: (idx:any) => idx * 3,
        },
        {
          name: "put",
          type: 'line',
          data: stock_data.GOOG["put"],
          animationDelay: (idx:any) => idx * 3,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx:any) => idx * 5,
    };

    switch (sel) {
      case 0:
        this.options.series[0].data = stock_data.GOOG["share_price"] ; 
        this.options.series[1].data = stock_data.GOOG["call"] ; 
        this.options.series[2].data = stock_data.GOOG["put"] ; 
        break;
      case 1:
        this.options.series[0].data = stock_data.AAPL["share_price"] ; 
        this.options.series[1].data = stock_data.AAPL["call"] ; 
        this.options.series[2].data = stock_data.AAPL["put"] ; 
        break;
      case 2:
        this.options.series[0].data = stock_data.MSFT["share_price"] ; 
        this.options.series[1].data = stock_data.MSFT["call"] ; 
        this.options.series[2].data = stock_data.MSFT["put"] ; 
        break;
    }
  }
}