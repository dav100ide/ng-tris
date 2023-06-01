import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './components/board/board.component';
import { TestBsComponent } from './components/test-bs/test-bs.component';

@NgModule({
   declarations: [AppComponent, SquareComponent, BoardComponent, TestBsComponent],
   imports: [BrowserModule, AppRoutingModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
