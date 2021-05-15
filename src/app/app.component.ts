import { Component } from '@angular/core';
import { Modal } from './interfaces/modal.interace';
import { ModalService } from './shared/modal/modal.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-managment';
  modal: Modal = {
    size: 'sm',
    title: 'User Updated',
    titleType: 'danger',
    buttons: [{name: 'ok', type: 'primary'}]
  }
  constructor(private modalService: ModalService){}

  openModal(){
    this.modalService.modalSource.next(this.modal);
    this.modalService.modalResponseObservable.pipe(take(1)).subscribe(
      result => {
        console.log(result);
        
      }
    )
  }
}
