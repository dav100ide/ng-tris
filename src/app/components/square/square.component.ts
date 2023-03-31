import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-square',
   template: `
      <button [ngClass]="value === 'X' ? 'x' : 'o'">
         {{ value }}
      </button>
   `,
   styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
   @Input() value!: string;
   @Input() isX!: boolean;
}
