import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsByBreedComponent } from './components/dogs-by-breed/dogs-by-breed.component';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';

const routes: Routes = [
  { path: '', component: DogsListComponent},
  { path: 'dogs-by-breed/:breed', component: DogsByBreedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
