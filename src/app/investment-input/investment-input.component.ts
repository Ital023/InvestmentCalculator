import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-input',
  imports: [CurrencyPipe],
  templateUrl: './investment-input.component.html',
  styleUrl: './investment-input.component.css',
})
export class InvestmentInputComponent {
  private investmentService = inject(InvestmentService);
  
  results = computed(() => this.investmentService.resultData());

}
