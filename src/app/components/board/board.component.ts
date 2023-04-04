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
   gameOutcome!: string | null;

   constructor() {
      this.btnsDisabled = [];
      for (let i = 1; i <= 9; i++) {
         this.btnsDisabled.push(false);
      }
   }

   ngOnInit(): void {
      this.newGame();
   }
   newGame(): void {
      this.btnsDisabled = new Array(9).fill(false);
      this.squares = Array(9).fill(null);
      this.gameOutcome = null;
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
      this.gameOutcome = this.calculategameOutcome();
      //verifico se è finito il gioco
      if (this.gameOutcome === 'X' || this.gameOutcome === 'O') {
         this.endGame(this.squares);
      }
   }

   calculategameOutcome(): null | string {
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

      //assegna winner in caso di vittoria
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
      // check for tie: controlla se li ho cliccati tutti
      const tie = this.squares.every((square) => square !== null);
      if (tie) {
         return 'pareggio';
      }

      return null;
   }

   btnsDisabled: boolean[];
   endGame(btns: string[]): void {
      //ciclo su this.squares e pusho in btnsDisabled 9 bool
      for (let i = 0; i < btns.length; i++) {
         const btn = btns[i];
         if (btn === 'X' || btn === 'O') {
            this.btnsDisabled[i] = false;
         } else {
            this.btnsDisabled[i] = true;
         }
      }
      console.log(this.btnsDisabled);
   }
}
