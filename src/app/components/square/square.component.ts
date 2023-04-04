import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-square',
   template: `
      <button [ngClass]="btnCss" [disabled]="btnDisabled">
         {{ value }}
      </button>
   `,
   styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
   @Input() value!: string;
   @Input() btnDisabled = false;
   //computed property per calcolare btnCss
   get btnCss(): string {
      return this.value === 'X' ? 'x' : this.value === 'O' ? 'o' : '';
   }
}
