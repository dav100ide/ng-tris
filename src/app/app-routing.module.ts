import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestBsComponent } from './components/test-bs/test-bs.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
   {
      path: 'test-bs',
      component: TestBsComponent,
   },
   {
      path: 'tris',
      component: BoardComponent,
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
