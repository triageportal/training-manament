import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

constructor() { }

  show(){
    this.loaderStateSource.next(true);
  }

  hide (){
    this.loaderStateSource.next(false);
  }

  loaderStateSource = new Subject<any>();
  loaderStateObservable = this.loaderStateSource.asObservable();

}
