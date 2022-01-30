import { SafeResourceUrl } from '@angular/platform-browser';
import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VeterinianVideoI } from 'src/app/3.interfaces/models.interface';

@Component({
  selector: 'app-veterian-video',
  templateUrl: './veterian-video.component.html',
  styleUrls: ['./veterian-video.component.css']
})
export class VeterianVideoComponent implements OnInit {

  @Input() data:VeterinianVideoI

  constructor(
    private _san:DomSanitizer
  ) { 
   
  }

  ngOnInit(): void {  
    this.data.safeUrl = this._san.bypassSecurityTrustResourceUrl(this.data.urlVideo);
  }

 

}
