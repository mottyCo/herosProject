import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,AbstractControl,Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
  export class LoginComponent implements OnInit{
    constructor(private router: Router){}
    loginForm!: FormGroup;
    username!: AbstractControl;
    password!: AbstractControl;
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      UserName: new FormControl<string>('',[Validators.required, Validators.minLength(4), this.userNameValidator]),
      Password: new FormControl<string>('',[Validators.required, Validators.minLength(8), this.passwordValidator]),
    })
    this.username = this.loginForm.get('UserName') as AbstractControl;
    this.password = this.loginForm.get('Password') as AbstractControl;
  }
  onSubmit(){
    console.log('submit');
    
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
  userNameValidator(control: FormGroup): ValidationErrors | null{
    const UserName = control.value
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz'
    if (UserName!==undefined) {
      for (let index = 0; index < UserName.length; index++) {
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
    if(!Pass.includes('1') && !Pass.includes('2') && !Pass.includes('3') && !Pass.includes('4') && !Pass.includes('5') && !Pass.includes('6') && !Pass.includes('7') && !Pass.includes('8') && !Pass.includes('9') && !Pass.includes('0')){
      return {'numberMissing' : true}
    }else{
      let includeCharacter = false;
      for (let index = 0; index < validCharacters.length; index++) 
        if(Pass.includes(validCharacters[index]))
          includeCharacter = true
      if(!includeCharacter)  
        return {'characterMissing' : true}
    }
    return null
  }
  navToSignup(){
    this.router.navigate(['user/signup'])
  }
}
