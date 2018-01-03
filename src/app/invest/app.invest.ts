import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

declare interface InvestItem {
	symbol: string;
	currency: string;
	amount: number;
	paid: number;
	currValue?: number;
	profit?: number;
	price?: number;
}

@Component({
  selector: 'app-invest',
  templateUrl: './app.invest.html',
  styleUrls: ['./app.invest.css']
})

export class InvestComponent implements OnInit {
	public investItems: InvestItem[] = [
		{
			symbol: 'BTC',
			currency: 'bitcoin',
			amount: 0.0449813,
			paid: 431.72,
		},
		{
			symbol: 'ETH',
			currency: 'ethereum',
			amount: 0.62931066,
			paid: 243.64,
		},
		{
			symbol: 'XRP',
			currency: 'ripple',
			amount: 524.97244,
			paid: 140,
		},
		{
			symbol: 'LTC',
			currency: 'litecoin',
			amount: 2.01901875,
			paid: 140,
		},
	];
	public totalProfit: number = 0;
	private realizedProfit: number = 174.64;
	private baseUrl: string = 'https://api.coinmarketcap.com/v1/ticker/';

	constructor(private http: Http) {}

	ngOnInit() {
		Promise.all(
			this.investItems.map((item) => {
				return this.http.get(`${this.baseUrl}${item.currency}/?convert=CAD`).map((res: Response) => { return JSON.parse(res.text()); }).toPromise();
			})
		).then((responses: any[]) => {
			responses.forEach((res, index) => {
				const price = res[0].price_cad;
				const value = this.investItems[index].amount * price;
				const profit = value - this.investItems[index].paid;
				this.investItems[index].price = price;
				this.investItems[index].currValue = value;
				this.investItems[index].profit = profit;
				this.totalProfit += profit;
			});
		});
	}
}
