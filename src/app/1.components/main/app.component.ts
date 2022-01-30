import { NgxSpinnerService } from 'ngx-spinner';
import { AuthI } from './../../3.interfaces/models.interface';
import { AuthService } from './../../2.services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba Front End';


  constructor(public authS: AuthService, private spinner: NgxSpinnerService) {


    if (!authS.isLogin()) {
      this.spinner.show();

      

      authS.register(
        (dt:any)=>{
          this.spinner.hide();
        },
        (mss:string)=>{
            alert(mss)
        }
      )

    }


  }


}
