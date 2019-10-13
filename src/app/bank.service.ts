import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { }

  message = '';

  account: any = {
    fname: 'Alex',
    lname: 'Parker',
    age: 23,
    address: {
      street: '101 West Broadway',
      city: 'San Diego',
      state: 'Ca',
      zip: 92101,
      country: 'USA'
    },
    balance: 0.01,
    currency: 'usd',
    transactions: [
      {
        date: '03-03-2019',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
  };

makeWithdrawal(value) {
  this.account.balance -= parseFloat(value);
  const date = new Date();
  this.account.transactions.push(
    {
      date: `${date.getMonth()+1}-${date.getDate()}-${date.getUTCFullYear()}`,
      type: 'withdrawal',
      amount: value,
      currency: 'usd'
    }
  );
  this.deliverMessage(value);
  console.log(this.account.transactions);
}

makeDeposit(value) {
    this.account.balance += parseFloat(value);
    const date = new Date();
    this.account.transactions.push(
      {
        date: `${date.getMonth()+1}-${date.getDate()}-${date.getUTCFullYear()}`,
        type: 'deposit',
        amount: value,
        currency: 'usd'
      }
    );
    this.deliverMessage(value);
    console.log(this.account.transactions);

}

deliverMessage(value) {
  var money = parseInt(value, 10);
  if (typeof money == "number") {
    console.log('whippie!')
  }
}

// MAKE A FLOWCHART AT NEXT POSSIBLE OPPORTUNITY

}
