import { Component, Input, OnInit } from '@angular/core';
import { VeterinaryNewsI } from 'src/app/3.interfaces/models.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() data: VeterinaryNewsI = {
    title: "As a veterinarian and lover of animals",
    date: "FEBRUARY 09, 2020",
    description: "Lorem lpsum available, but the majority have suffered alteration in some words wich look",
    extraInfo: "Read More+",
    image: "https://www.consumer.es/wp-content/uploads/2019/07/img_veterinarios-cada-cuanto-tiempo-perros-gatos-art.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
