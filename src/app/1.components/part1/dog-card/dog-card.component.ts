import { DogCardI } from './../../../3.interfaces/models.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent implements OnInit {

  @Input() typeColor = 2 // 1-> black, 2-> White
  

 @Input() data:DogCardI = {
    type:2,
    priceBefore:20,
    priceNow:10,
    image:"https://micarrerauniversitaria.com/wp-content/uploads/2018/03/veterinario-1.gif"

  }

  constructor() { }

  ngOnInit(): void {
  }



}
