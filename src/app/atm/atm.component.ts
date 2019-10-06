import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

  constructor(public bankService: BankService) { }
  value = '';
  isDisplayBalance = false;

withdraw() {
  this.bankService.makeWithdrawal(this.value);
}

deposit() {
  this.bankService.makeDeposit(this.value);
}

displayBalance() {
  console.log(this.isDisplayBalance);
  this.isDisplayBalance = true;
  console.log(this.isDisplayBalance);
}

closeBalance() {
  this.isDisplayBalance = false;
}

}