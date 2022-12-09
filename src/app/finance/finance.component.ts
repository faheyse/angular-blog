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