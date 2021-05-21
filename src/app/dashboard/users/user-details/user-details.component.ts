import { ModalService } from './../../../shared/modal/modal.service';
import { Modal } from './../../../interfaces/modal.interace';
import { User } from './../../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = {};

  constructor(private route: ActivatedRoute, private modalService: ModalService,) { }

  ngOnInit() {
    this.setUser();
  }

  setUser() {
    this.user.firstname = this.route.snapshot.queryParams['firstname'];
    this.user.lastname = this.route.snapshot.queryParams['lastname'];
    this.user.email = this.route.snapshot.queryParams['email'];
    this.user.id = this.route.snapshot.queryParams['id'];
  }

  openDeleteModal(){
    this.modalService.modalSource.next(this.deleteModal);
    this.modalService.modalResponseObservable.pipe(take(1)).subscribe(
      result => {
        console.log(result);
        //this.deleteUser(); deltes user, opens success modal
      }
    )
  }

  openSuccessDeleteModal(){
    this.modalService.modalSource.next(this.successDeleteModal);
    this.modalService.modalResponseObservable.pipe(take(1)).subscribe(
      result => {
        console.log(result);
        
      }
    )
  }
  openErrorModal(){
    this.modalService.modalSource.next(this.errorModal);
    this.modalService.modalResponseObservable.pipe(take(1)).subscribe(
      result => {
        console.log(result);
        
      }
    )
  }

  
  deleteModal: Modal = {
    size: 'sm',
    title: 'Delete User?',
    titleType: 'danger',
    buttons: [{name: 'Delete', type: 'primary'}, {name: 'Cancel', type: 'danger'}]
  }


  successDeleteModal: Modal = {
    size: 'sm',
    title: 'User deleted',
    titleType: 'primary',
    buttons: [{name: 'ok', type: 'primary'}]
  }

  errorModal: Modal = {
    size: 'sm',
    title: 'Oops!',
    titleType: 'Primary',
    description: ['Something went wrong.', 'Please try later!'],
    descriptionType: 'danger',
    buttons: [{name: 'ok', type: 'primary'}]
  }

}
