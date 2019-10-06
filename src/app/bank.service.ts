import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor() { }

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
      // {
      //   date: '03-03-03',
      //   type: 'withdrawal',
      //   amount: 2.00,
      //   currency: 'usd'
      // }
    ]
  };

makeWithdrawal(value) {
  this.account.balance -= parseFloat(value);
  const date = new Date();
  this.account.transactions.push(
    {
      date: `${date.getMonth()}-${date.getDate()}-${date.getUTCFullYear()}`,
      type: 'withdrawal',
      amount: value,
      currency: 'usd'
    }
  );
  // alert("new balance is "+this.account.balance);
  // console.log(this.account.transactions);
}

makeDeposit(value) {
    this.account.balance += parseFloat(value);
    const date = new Date();
    this.account.transactions.push(
      {
        date: `${date.getMonth()}-${date.getDate()}-${date.getUTCFullYear()}`,
        type: 'deposit',
        amount: value,
        currency: 'usd'
      }
    );
    // alert("new balance is "+this.account.balance);
}


viewTransactionHistory() {}

}
