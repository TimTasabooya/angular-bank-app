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
  isDisplayTransaction: boolean = false;
  // isDisabled: boolean = (this.isDisplayBalance || this.isDisplayMessage || this.isDisplayTransaction);

  customer = `${this.bankService.account.fname} ${this.bankService.account.lname}`;
  

withdraw() {
  this.bankService.makeWithdrawal(this.value);
  this.displayMessage();
  this.value = 0;
}

deposit() {
  this.bankService.makeDeposit(this.value);
  this.displayMessage();
  this.value = 0;
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
}

closeTransaction() {
  this.isDisplayTransaction = false;
}


}