 
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthI } from '../3.interfaces/models.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 


  constructor(private afs:AngularFirestore) {  
  }


  /** 
   * Regiter the section of the user 
   */

  register(successful:any,failure:any){
    const id = this.afs.createId();
 
   
    const auth:AuthI = {
      id:id
    }
    
    this.afs.collection<AuthI>(`userOcupar`).doc(id).set(auth).then(_=>{
      sessionStorage.setItem("auth", JSON.stringify(auth))
      successful(true) 
    }).catch(_=>{
      failure("No se pudo crear el usuario")
    })
  }


  /**
   * is login?
   * @returns 
   */
  isLogin():Boolean {

    if( sessionStorage.getItem("auth")){
      return true;
    }

    return false; 
  }

  /**
   * get the user 
   * @returns 
   */
  getAuth():AuthI{
    
    let st = sessionStorage.getItem("auth");
    return JSON.parse(st!);
  }

}
