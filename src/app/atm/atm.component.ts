import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

  constructor(public bankService: BankService) { }
  @ViewChild('myForm') formValues; // Added this
  value: number;
  isDisplayBalance: boolean = false;
  isDisplayMessage: boolean = false;
  isDisplayWarning: boolean = false;
  isDisplayTransaction: boolean = false;
  // isDisabled: boolean = (this.isDisplayBalance || this.isDisplayMessage || this.isDisplayTransaction);

  // store all last transactions from bank service here
  transactions = this.bankService.account.transactions;
  // lastTransactions holds the last 3 transactions 
  lastTransactions = this.transactions.slice((this.transactions.length-2),(this.transactions.length));
  customer = `${this.bankService.account.fname} ${this.bankService.account.lname}`;
  

withdraw() {
  if (!isNaN(this.value)) {
  this.isDisplayWarning = false;
  this.bankService.makeWithdrawal(this.value);
  this.displayMessage();
  this.value = 0;
  } else {
    this.isDisplayWarning = true;
  }
}

deposit() {
  if (!isNaN(this.value)) {
  this.isDisplayWarning = false;
  this.bankService.makeDeposit(this.value);
  this.displayMessage();
  this.value = 0;
  } else {
    this.isDisplayWarning = true;
  }
}

displayBalance() {
  this.isDisplayBalance = true;
}

closeBalance() {
  this.isDisplayBalance = false;
}

displayMessage() {
  this.isDisplayMessage = true;
}

closeMessage() {
  this.isDisplayMessage = false;
}

displayTransaction() {
  this.isDisplayTransaction = true;
  console.log('Last 3 tansactions: '+this.lastTransactions);
}

closeTransaction() {
  this.isDisplayTransaction = false;
}

}