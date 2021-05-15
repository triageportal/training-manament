import { Component, OnInit } from '@angular/core';
import { Modal } from '../../interfaces/modal.interace';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalOn: boolean;
  modalInput = ''
  inputFocus = false;
  modal: Modal;
 /*  modal: Modal = {
    size: 'sm',
    title: 'Create/Edit Checklist',
    titleType: 'primary',
    input: 'Checklist',
    buttons: [{name: 'save', type: 'primary'}, {name: 'cancel', type: 'danger'}]
  } */

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.modalSourceObservable.subscribe(
      result => {
        this.modal = result;
        this.openModal();
      }
    )
  }

  openModal() {
    this.modalOn = true;
  }

  closeModal () {
    this.modalOn = false;
    this.clearInput();
  }


  onButtonClick (respond) {
    this.modalService.modalResponse.next({action: respond, input: this.modalInput});
    this.closeModal ()
  }

  clearInput() {
    this.modalInput = '';
    this.onBlur();
  }

  onFocus () {
    this.inputFocus = true;
  }

  onBlur () {
    if (!this.modalInput) {
      this.inputFocus = false;
    }
  }
}
