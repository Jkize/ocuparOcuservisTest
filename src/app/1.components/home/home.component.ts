import { NgxSpinnerService } from 'ngx-spinner';
 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from 'src/app/0.common/base.class';
import { ServicesGService } from 'src/app/2.services/services-g.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Base implements OnInit {



  constructor(
    private s: ServicesGService,
    public router: Router,
    private spinner: NgxSpinnerService
  ) {
    super()
  }

  ngOnInit(): void {
  }


  /**
   *  Router 
   * @param type 
   */
  goToPart(type: number) {

    if (type == 1) {
      //Go to part 1 
      this.router.navigateByUrl("/part1")
    } else {
      //Go to part 2
      this.router.navigateByUrl("/part2")
    }

  }




}
