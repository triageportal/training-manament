import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  tests = [
    {name: 'menu', id: 1},
    {name: 'managment', id: 2},

  ]

  constructor(private fb: FormBuilder, public router: Router) { }

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
    /* if (this.myForm.valid) {
      this.loader.show();
      console.log(this.myForm)
      this.staffSetupService.submit(this.email.value, this.hash).subscribe(
        result => {
          if (result == 'success') {
            this.router.navigate(['/login']);
          }
          this.loader.hide();
        },
        error => {
          this.loader.hide();
          this.triModalService.triModalStateSource.next(this.modalTryLater);
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

  closeModal () {
    //this.clearInput();
  }


  onButtonClick (respond) {
    this.closeModal ()
  }

  clearInput(control) {
    console.log(this.myForm.controls[control])
    this.myForm.controls[control].reset()
    //this.onBlur();
  }

  onFocus () {
    this.inputFocus = true;
  }

  onBlur () {
    
      this.inputFocus = false;
    
  }

}
