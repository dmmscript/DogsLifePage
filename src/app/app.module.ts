import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { DogCardComponent } from './components/dog-card/dog-card.component';
import { BreedsListComponent } from './components/breeds-list/breeds-list.component';
import { DogsByBreedComponent } from './dogs-by-breed/dogs-by-breed.component';
// import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DogsListComponent,
    DogCardComponent,
    BreedsListComponent,
    DogsByBreedComponent,
    // FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
