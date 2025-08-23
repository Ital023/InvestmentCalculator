import { CurrencyPipe } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-investment-input',
  imports: [CurrencyPipe],
  templateUrl: './investment-input.component.html',
  styleUrl: './investment-input.component.css',
})
export class InvestmentInputComponent {
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  results = input<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[]>();

}
