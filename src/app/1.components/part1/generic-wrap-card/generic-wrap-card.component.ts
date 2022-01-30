import { GenericDetailI } from './../../../3.interfaces/models.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-wrap-card',
  templateUrl: './generic-wrap-card.component.html',
  styleUrls: ['./generic-wrap-card.component.css']
})
export class GenericWrapCardComponent implements OnInit {


  @Input() data:GenericDetailI

  constructor() { }

  ngOnInit(): void {
  }

}
