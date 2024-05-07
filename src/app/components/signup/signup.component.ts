import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,AbstractControl,Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  clicked = false
  constructor(private router: Router, private fb: FormBuilder, private users : UsersService){}
  loginForm!: FormGroup;
  username!: AbstractControl;
  email!: AbstractControl;
  password!: AbstractControl;
  repeatPassword!: AbstractControl;

ngOnInit(): void {
  this.loginForm = this.fb.group({
    UserName: ['',[Validators.required, Validators.minLength(4), this.userNameValidator]],
    Email: ['',[Validators.required, Validators.email]],
    Password: ['',[Validators.required, Validators.minLength(8), this.passwordValidator]],
    RepeatPassword: ['',[Validators.required]],
  },{validators: [this.repeatPasswordValidator]})
  this.username = this.loginForm.get('UserName') as AbstractControl;
  this.email = this.loginForm.get('Email') as AbstractControl;
  this.password = this.loginForm.get('Password') as AbstractControl;
  this.repeatPassword = this.loginForm.get('RepeatPassword') as AbstractControl;
}
onSubmit(){
  if(!this.loginForm.invalid){
    this.users.localUser = new User(this.username.value, this.email.value, this.password.value)
    this.router.navigate(['user/localUser'])
    
    
  }else{
    this.clicked = true
  }
}
userNameInvalidMessage(): string | undefined{
  const errors: any = this.username.errors;
  if(errors?.required)
    return 'user name is required'
  if(errors?.minlength)
    return 'user name must includs 4 characters at least'
  if(errors?.invalidCharacter)
    return 'invalid character! use lower case only'
  return undefined
}
passworsInvalidMessage(): string | undefined{
  const errors: any = this.password.errors;
  if(errors?.required)
    return 'password is required'
  if(errors?.minlength)
    return 'password must includs 8 characters at least'
  if(errors?.numberMissing)
    return 'password must includs 1 number at least'
  if(errors?.characterMissing)
    return 'password must includs 1 letter at least'
  return undefined
}
repeatPassworsInvalidMessage(): string | undefined{
  const errors: any = this.repeatPassword.errors;
  const errors1: any = this.loginForm.errors;
  if(errors?.required)
    return 'repeat password is required'
  if(errors1?.notSamePassword)
    return 'passwords not the same'
  return undefined
}
emailInvalidMessage(): string | undefined{
  const errors: any = this.email.errors;
  if(errors?.required)
    return 'email is required'
  if(errors?.email)
    return 'invalid email'
  return undefined
}
userNameValidator(control:any): ValidationErrors | null{
  const UserName = control.get('UserName')
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'
  if (UserName!==undefined) {
    for (let index = 0; index < UserName?.length; index++) {
      let foundChar = false
      for (let i = 0; i < validCharacters.length; i++) 
        if(UserName[index] === validCharacters[i])
          foundChar = true
      if(!foundChar) return {'invalidCharacter' : true}
    }
  }
  return null
}
passwordValidator(control: FormGroup): ValidationErrors | null{
   const Pass = control.value
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'
  if(!Pass?.includes('1') && !Pass?.includes('2') && !Pass?.includes('3') && !Pass?.includes('4') && !Pass?.includes('5') && !Pass?.includes('6') && !Pass?.includes('7') && !Pass?.includes('8') && !Pass?.includes('9') && !Pass?.includes('0')){
    return {'numberMissing' : true}
  }else{
    let includeCharacter = false;
    for (let index = 0; index < validCharacters.length; index++) 
      if(Pass?.includes(validCharacters[index]))
        includeCharacter = true
    if(!includeCharacter)  
      return {'characterMissing' : true}
  }
  return null
}


repeatPasswordValidator(control: AbstractControl): ValidationErrors | null{
  const RepeatPass = control.get('RepeatPassword')
  const Pass = control.get('Password')

  if(RepeatPass == null || Pass == null)
    return null;

  if(RepeatPass.value !== Pass.value)
    return {'notSamePassword' : true}
  
  return null
}
navToLogin(){
  this.router.navigate(['user/login'])
}
}
