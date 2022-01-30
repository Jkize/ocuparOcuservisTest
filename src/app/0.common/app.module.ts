import { GenericWrapCardComponent } from './../1.components/part1/generic-wrap-card/generic-wrap-card.component';
import { DogCardComponent } from './../1.components/part1/dog-card/dog-card.component';
import { VeterianVideoComponent } from './../1.components/part1/veterian-video/veterian-video.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../1.components/main/app.component';
import { HomeComponent } from '../1.components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment.prod';

/*Firebase */ 
import { AppModuleMaterial } from './app-material.module'; 
import { NgxSpinnerModule } from 'ngx-spinner';
import { Part1Component } from '../1.components/part1/part1.component';
import { Part2Component } from '../1.components/part2/part2.component';
import { NewsCardComponent } from '../1.components/part1/news-card/news-card.component';
import { VeterinaryCardComponent } from '../1.components/part1/veterinary-card/veterinary-card.component';
import { FooterComponent } from '../1.components/part1/footer/footer.component';
import { NavBarComponent } from '../1.components/part1/nav-bar/nav-bar.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../1.components/part2/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Part1Component,
    Part2Component,
    VeterianVideoComponent,
    DogCardComponent,
    GenericWrapCardComponent,
    NewsCardComponent,
    VeterinaryCardComponent,
    FooterComponent,
    NavBarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    AppModuleMaterial,
    NgxSpinnerModule,
    FlexLayoutModule,
    CommonModule,
    FlexModule
    
    
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
