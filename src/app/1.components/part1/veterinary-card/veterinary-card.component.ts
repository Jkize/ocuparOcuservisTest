import { VeterinaryI } from './../../../3.interfaces/models.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinary-card',
  templateUrl: './veterinary-card.component.html',
  styleUrls: ['./veterinary-card.component.css']
})
export class VeterinaryCardComponent implements OnInit {

  @Input() data:VeterinaryI

  constructor() { }

  ngOnInit(): void {
  }

}
