import { User } from './../../../interfaces/user.interface';
import { Test } from './../../../interfaces/test.interface';
import { ModalService } from './../../../shared/modal/modal.service';
import { LoaderService } from './../../../shared/loader/loader.service';
import { Modal } from './../../../interfaces/modal.interace';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  inputFocus: boolean;
  myForm: FormGroup;
  emailOnFocus = false;
  confEmailOnFocus = false;
  firstnameOnFocus = false;
  lastnameOnFocus = false;

  user: User = {firstname: '', lastname: '', email: ''};

  constructor(private route: ActivatedRoute, private fb: FormBuilder, public router: Router, private loader: LoaderService, private modalService: ModalService) { }

  ngOnInit() {
    this.setUser();
    this.setMyForm();
    this.setFormsData();
    console.log(this.user);
    
  }

  setUser() {
    this.user.firstname = this.route.snapshot.queryParams['firstname'];
    this.user.lastname = this.route.snapshot.queryParams['lastname'];
    this.user.email = this.route.snapshot.queryParams['email'];
    this.user.id = this.route.snapshot.queryParams['id'];
  }


  setMyForm () {
    this.myForm = this.fb.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      confEmail: ['', [Validators.required, ]],
      firstname: ['', [Validators.required, ]],
      lastname: ['', [Validators.required, ]],
    },
    { validator: this.emailMatchValidator }
    );
  }

  setFormsData () {
      this.firstname.setValue(this.user.firstname);
      this.lastname.setValue(this.user.lastname);
      this.email.setValue(this.user.email);
  }

  get firstname() {
    return this.myForm.get('firstname');
  }
  get email() {
    return this.myForm.get('email');
  }
  
  get lastname() {
    return this.myForm.get('lastname');
  }
  
  get confEmail() {
    return this.myForm.get('confEmail');
  }


  onSubmit() {
    console.log(this.myForm)
    this.openSuccessModal();
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
        this.router.navigate(['../userdetails'], { queryParams: { firstname: this.firstname.value, lastname: this.lastname.value, id: this.user.id, email: this.email.value }, relativeTo: this.route })
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
    title: 'User updated',
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
