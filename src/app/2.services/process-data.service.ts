
import { IdkI, LevelKeyI, ModelHeaderTableI, ProcedureDataI } from './../3.interfaces/models.interface';
import { Injectable } from '@angular/core';

import obj from '../../assets/DATA.json'

@Injectable({
  providedIn: 'root'
})
export class ProcessDataService {

  data: IdkI[] = []

  constructor() {
    this.data = obj;
  }


  /**
   * Method to map the levels and then apply a map to standar array ;)
   * @param levels 
   */
  procedureDataV2(levels: LevelKeyI[]): ProcedureDataI[] {
    let test = this.data.slice();


    let dictG: Map<string, ProcedureDataI> = new Map<string, ProcedureDataI>()

    for (let i = 0; i < levels.length; i++) {
      const level = levels[i];

      let auxDict: Map<string, ProcedureDataI>;

      for (let idk of test) {
        let data: any = idk;

        if (i == 0) {
          this.putData(level, idk, dictG)
          dictG.get(data[level.key])!!.dict = new Map<string, ProcedureDataI>()
        } else {


          for (let j = 0; j < i; j++) {
            if (j == 0) {
              auxDict = dictG!!.get(data[levels[j].key])!!.dict!!
            } else {
              auxDict = auxDict!!.get(data[levels[j].key])!!.dict!!
            }

          }

          this.putData(level, idk, auxDict!!)

          if (i != levels.length - 1) {
            auxDict!!.get(data[level.key])!!.dict = new Map<string, ProcedureDataI>()
          }

        }


      }


    }

    return this.getDataR(dictG)
  }

  /**
   * It is a map, Map<string, ProcedureDataI> to ProecedureDataI
   *  Function Recursive
   * @param map 
   * @returns 
   */
  private getDataR(map: Map<string, ProcedureDataI>): ProcedureDataI[] {

    let data = this.getData(map);

    for (let i = 0; i < data.length; i++) {
      const dt = data[i];
      if (dt.dict && dt.dict.size > 0) {
        dt.data = this.getDataR(dt.dict)
      } else {
        return data;
      }
    }


    return data;

  }

  /**
   * function convert map to ProcedureData
   * @param map 
   * @returns 
   */
  private getData(map: Map<string, ProcedureDataI>): ProcedureDataI[] {

    let data: ProcedureDataI[] = [];

    for (let [key, value] of map) {
      data.push(value);
    }
    return data;


  }


  /**
   *  Put necesary data
   * @param level 
   * @param data 
   * @param dictG 
   */
  private putData(level: LevelKeyI, data: any, dictG: Map<string, ProcedureDataI>) {


    if (dictG.get(data[level.key]) != null) {

      dictG.get(data[level.key])!!.openQty += (data.OpenQty) ? data.OpenQty : 0
      dictG.get(data[level.key])!!.produccion += (data.PRODUCCION) ? data.PRODUCCION : 0
      dictG.get(data[level.key])!!.quantity += (data.Quantity) ? data.Quantity : 0
      dictG.get(data[level.key])!!.transito += (data.TRANSITO) ? data.TRANSITO : 0

    } else {
      dictG.set(data[level.key], {
        openQty: (data.OpenQty) ? data.OpenQty : 0,
        produccion: (data.PRODUCCION) ? data.PRODUCCION : 0,
        quantity: (data.Quantity) ? data.Quantity : 0,
        transito: (data.TRANSITO) ? data.TRANSITO : 0,
        nameType: level.name,
        keyType: level.key,
        type: data[level.key],
        isExpanded: false
      })
    }


  }



  /**
   * Obtain levels
   * @returns 
   */
  getLevels(): LevelKeyI[] {
    return [
      {
        name: "Marca",
        key: "FirmCode"
      },
      {
        name: "Articulo",
        key: "ItemCode"
      },
      {
        name: "Categoría",
        key: "CategoriaCode"
      },
      {
        name: "Vendedor",
        key: "SlpCode"
      },
      {
        name: "Cliente",
        key: "CardCode"
      },
      {
        name: "#Pedido",
        key: "DocNum"
      }

    ]
  }

  /**
   * Obtain DisplayColumns
   * @returns 
   */
  getDisplayedColumns(): ModelHeaderTableI[] {

    return [
      {
        displayed: "type",
        name: "nameType",
        isName: true
      },
      {
        displayed: "openQty",
        name: "Open Qty"
      },
      {
        displayed: "produccion",
        name: "Produccion"
      },
      {
        displayed: "quantity",
        name: "Quantity"
      },
      {
        displayed: "transito",
        name: "Transtio"
      }
    ]

  }






}
