import { MatSnackBar } from '@angular/material/snack-bar';

import { AbstractControl } from "@angular/forms";
import { FormGroup, FormControl } from "@angular/forms"; 

export class Base {
    constructor() { }


    getControl(form: FormGroup, key: string): FormControl {
        return form.get(key) as FormControl;
    }


    /** 
     *  Check if the FormControl has a error
     * @param control
     */
    hasError(control: AbstractControl) {
        if (control.errors) {
            return true;
        }
        return false;
    }

    /** 
     *  Return the string corresponding the error
     *
     * @param control
     * @param mapMss Para personalizar los errores
     */
    printError(control: AbstractControl, mapMss?: any): string {
        let e = control.errors;
        let mss = "Error";

        for (const r in mapMss) {
            if (e!=null && e[r]) {
                mss = mapMss && mapMss[r] ? mapMss[r] : mss;
                return mss;
            }
        }

        return "";
    }

    /** 
     *   Trim all the data type string in the form
     * @param form
     */
    trimForm(form: FormGroup) {
        for (var key in form.controls) {
            const valor = form.get(key)!.value;
            if (typeof valor == "string") {
                form.get(key)!.setValue((<string>form.get(key)!.value).trim());
            }
        }
    }

}