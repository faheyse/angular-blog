import { Component, OnInit} from '@angular/core';
import stock_data from "./stock_data.json" ;


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  options!: any;
  ticker:string = 'GOOG'; 



  black_scholes = "$ \\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + rS\\frac{\\partial V}{\\partial S} -rV = 0 $"; 
  call = "$ C(S_t, t) = N(d_1)S_t - N(d_2)Ke^{-r(T-t)} $" ; 
  put = "$ P(S_t, t) = N(-d_2)Ke^{-r(T-t)} - N(-d_1)S_t $" ;
  d1 = "$ d_1 = \\frac{1}{\\sigma\\sqrt{T-t}}[ln(\\frac{S_t}{K}) + (r + \\frac{\\sigma^{2}}{2})(T-t)] $" ; 
  d2 = "$ d_2 = d_1 - \\sigma\\sqrt{T-t} $"; 

constructor() {}

  ngOnInit(): void {
    const xAxisData = [];
    const L = stock_data.GOOG["share_price"].length ; 

    for (let i = 0; i < L; i++) {
      xAxisData.push(i);
    }

    this.options = {
      legend: {
        data: [this.ticker, "call", "put"],
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
          name: this.ticker,
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
  }

}