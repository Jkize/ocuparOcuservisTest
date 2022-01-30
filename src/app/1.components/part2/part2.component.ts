import { ModelHeaderTableI, ProcedureDataI } from './../../3.interfaces/models.interface';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServicesGService } from 'src/app/2.services/services-g.service';
import { LevelKeyI } from 'src/app/3.interfaces/models.interface';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {

  levels: LevelKeyI[] = []

  dataTable: ProcedureDataI[] = [];

  displayedColumns:ModelHeaderTableI[] = []


  levelSelectsControl = new FormControl([],Validators.required);


  constructor(private _s: ServicesGService) {
    this.levels = this._s.PData.getLevels();
    this.displayedColumns  = this._s.PData.getDisplayedColumns();

  }
 

  /**
   * Event consult data 
   */

  filterData() {
    this.levelSelectsControl.markAsTouched();
    
    if (this.levelSelectsControl.valid) {

      let levels = this.levelSelectsControl.value; 
      this.dataTable = this._s.PData.procedureDataV2(levels)
    }
  }


  /**
   * Listener remove
   * @param topping 
   */
  onToppingRemoved(topping: LevelKeyI) {
    const toppings = this.levelSelectsControl.value as LevelKeyI[];
    this.removeFirst(toppings, topping);
    this.levelSelectsControl.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }


  ngOnInit(): void {
  }

}
