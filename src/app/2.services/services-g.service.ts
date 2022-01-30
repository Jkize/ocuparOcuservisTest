import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ProcessDataService } from './process-data.service';


/**
 * Service General
 */
@Injectable({
  providedIn: 'root'
})
export class ServicesGService {

  constructor(public AuthS:AuthService, 
    public PData:ProcessDataService
    ) { }
}
