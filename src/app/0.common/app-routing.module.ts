import { HomeComponent } from './../1.components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1Component } from '../1.components/part1/part1.component';
import { Part2Component } from '../1.components/part2/part2.component';
import { NavBarComponent } from '../1.components/part1/nav-bar/nav-bar.component';

const routes: Routes = [

  { path: "home", component: HomeComponent },
  {path:"part1",component:NavBarComponent},
  {path:"part2",component:Part2Component},
  { path: "**", pathMatch: "full", redirectTo: "home" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
