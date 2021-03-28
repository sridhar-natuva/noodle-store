import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoodlesListComponent } from './components/noodles-list/noodles-list.component';
import { RestarentDetailComponent } from './components/restarent-detail/restarent-detail.component';

const routes: Routes = [
  { path: '', component: NoodlesListComponent },
  { path: ':id', component: RestarentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
