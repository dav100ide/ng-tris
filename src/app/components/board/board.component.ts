import { Component, OnInit } from '@angular/core';
import { Xo } from 'src/app/xo';

@Component({
   selector: 'app-board',
   templateUrl: './board.component.html',
   styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
   squares!: string[];
   xIsNext: boolean = false;
   winner!: string | null;
   constructor() {}

   ngOnInit(): void {
      this.newGame();
   }
   newGame(): void {
      this.squares = Array(9).fill(null);
      this.winner = '';
      this.xIsNext = true;
   }

   //computed property
   get currentPlayer(): 'X' | 'O' {
      return this.xIsNext ? 'X' : 'O';
   }

   //event handler: al click
   makeMove(idx: number): void {
      if (!this.squares[idx]) {
         this.squares.splice(idx, 1, this.currentPlayer);
         this.xIsNext = !this.xIsNext;
      }
      this.winner = this.calculateWinner();
   }

   calculateWinner(): null | string {
      const lines = [
         // win conditions orizzontali
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         //win conditions verticali
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         //obliqui
         [0, 4, 8],
         [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
         const [a, b, c] = lines[i];
         if (
            this.squares[a] &&
            this.squares[a] === this.squares[b] &&
            this.squares[a] === this.squares[c]
         ) {
            return this.squares[a];
         }
      }
      return null;
   }
}
