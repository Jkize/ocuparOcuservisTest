import { animate } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { state } from '@angular/animations';
import { trigger } from '@angular/animations';
import { ModelHeaderTableI, ProcedureDataI } from './../../../3.interfaces/models.interface';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { expandableTableRowAnimation } from 'src/app/4.util/util';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [expandableTableRowAnimation]
})
export class TableComponent implements OnInit, AfterViewInit, AfterViewChecked {



  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: ProcedureDataI[] = []

  @Input() set dataTable(val: ProcedureDataI[]) {
    this.dataSource = val
    this.dataS = new MatTableDataSource(this.dataSource);
    if (this.paginator != null) {
      this.dataS.paginator = this.paginator;
      this.dataS.sort = this.sort;
    }

  }

  @Input() headerTable: ModelHeaderTableI[]



  dataS: MatTableDataSource<ProcedureDataI>;

  displayedColumns: string[] = []
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {

    this.headerTable.forEach(r => {
      this.displayedColumns.push(r.displayed)
    })

    this.dataS = new MatTableDataSource(this.dataSource);
  }


  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  /**
   * Get title if is isName
   * @param key 
   * @returns 
   */
  getTitle(key: string): any {

    if (this.dataSource.length > 0) {
      let dt: any = this.dataSource[0]
      return dt[key];

    }
    return "";

  }

  changeState(index: number) {

    this.dataSource[index].isExpanded = !this.dataSource[index].isExpanded


  }
 

  ngAfterViewInit() {
    this.dataS.paginator = this.paginator;
    this.dataS.sort = this.sort;
  }


}

