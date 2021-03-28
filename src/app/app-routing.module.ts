import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoodlesListComponent } from './components/noodles-list/noodles-list.component';

const routes: Routes = [
  { path: '', component: NoodlesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
