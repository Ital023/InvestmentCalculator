import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-input',
  imports: [],
  templateUrl: './investment-input.component.html',
  styleUrl: './investment-input.component.css',
})
export class InvestmentInputComponent {
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

}
