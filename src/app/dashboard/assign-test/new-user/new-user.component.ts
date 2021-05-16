import { Test } from './../../../interfaces/test.interface';
import { ModalService } from './../../../shared/modal/modal.service';
import { Modal } from './../../../interfaces/modal.interace';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../../../shared/loader/loader.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  inputFocus: boolean;
  myForm: FormGroup;
  emailOnFocus = false;
  confEmailOnFocus = false;
  testOnFocus = false;
  tests: Test[] = [
    {name: 'menu', id: 1},
    {name: 'managment', id: 2},

  ]

  constructor(private fb: FormBuilder, public router: Router, private loader: LoaderService, private modalService: ModalService) { }

  ngOnInit() {
    this.setMyForm();
  }


  setMyForm () {
    this.myForm = this.fb.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      confEmail: ['', [Validators.required, ]],
      test: ['', [Validators.required, ]],
    },
    { validator: this.emailMatchValidator }
    );
  }

  get test() {
    return this.myForm.get('test');
  }
  get email() {
    return this.myForm.get('email');
  }

  get confEmail() {
    return this.myForm.get('confEmail');
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

  emailMatchValidator(form: FormGroup) {
    return form.controls['email'].value === form.controls['confEmail'].value ? null : {'mismatch': true};
  }

  clearInput(control) {
    console.log(this.myForm.controls[control])
    this.myForm.controls[control].reset()
    //this.onBlur();
  }

  onFocus () {
    this.inputFocus = true;
  }

  onChange(control) {
    console.log(control);
    
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
