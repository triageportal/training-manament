import { ModalResponse } from './../interfaces/modalResponse.interface';
import { Modal } from './../interfaces/modal.interace';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalSource = new Subject<Modal>();
  modalSourceObservable = this.modalSource.asObservable();

  modalResponse = new Subject<ModalResponse>();
  modalResponseObservable = this.modalResponse.asObservable();
  
constructor() { }

}
