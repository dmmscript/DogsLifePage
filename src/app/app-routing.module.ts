import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { BreedsListComponent } from './components/breeds-list/breeds-list.component';

const routes: Routes = [
  { path: '', component: DogsListComponent},
  { path: 'breeds', component: BreedsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
