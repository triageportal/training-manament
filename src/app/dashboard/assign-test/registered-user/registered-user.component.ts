import { User } from './../../../interfaces/user.interface';
import { Test } from './../../../interfaces/test.interface';
import { ModalService } from './../../../shared/modal/modal.service';
import { LoaderService } from './../../../shared/loader/loader.service';
import { Modal } from './../../../interfaces/modal.interace';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.scss']
})
export class RegisteredUserComponent implements OnInit {
  inputFocus: boolean;
  myForm: FormGroup;
  emailOnFocus = false;
  confEmailOnFocus = false;
  testOnFocus = false;
  tests: Test[] = [
    {name: 'menu', id: 1},
    {name: 'managment', id: 2},
  ]

  users: User[] = [
    {name: 'Ana Johns', email: 'ajohns@gmail.com', id: 1},
    {name: 'John Doe', email: 'john_doe@gmail.com', id: 2},
    {name: 'Juan Carlos', email: 'juan.carlos@gmail.com', id: 3},
  ];

  constructor(private fb: FormBuilder, public router: Router, private loader: LoaderService, private modalService: ModalService) { }

  ngOnInit() {
    this.setMyForm();
  }


  setMyForm () {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, ]],
      test: ['', [Validators.required, ]],
    }
    );
  }

  get test() {
    return this.myForm.get('test');
  }
  get email() {
    return this.myForm.get('email');
  }

  onSubmit() {
    console.log(this.myForm)
    /* this.openErrorModal(); */
    /* if (this.myForm.valid) {
      this.loader.show();
      console.log(this.myForm)
      this.staffSetupService.submit(this.email.value, this.hash).subscribe(
        result => {
          if (result == 'success') {
            this.openSuccessModal();
          }
          this.loader.hide();
        },
        error => {
          this.loader.hide();
          this.openErrorModal();
          console.log(error);
        }
      )
    } */
  }

  onReset() {
    this.myForm.reset();
  }

  onCancel() {

  }

  clearInput(control) {
    this.myForm.controls[control].reset()
  }

  onFocus () {
    this.inputFocus = true;
  }

  openSuccessModal(){
    this.modalService.modalSource.next(this.successModal);
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
  successModal: Modal = {
    size: 'sm',
    title: 'Test assigned',
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
