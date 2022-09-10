import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "";

  email:string = "";

  msg:string = "";

  valLabel="";
  randomVal = 0;

  val:string ="";

  validations = [
    ['7 + 2' ,'9'],
    ['4 * 3','12'],
    ['10 - 2','8'],
    ['4 - 2','2']
  ]

  messages:string[][] = [];

  /*Span errors*/
  nameError:string = "";

  emailError:string = "";

  msgError:string = "";

  valError:string = "";

  formError:boolean = false;

  ngOnInit(): void {
    this.getValidation();
  }

  //Gets the validation label value
  getValidation() {
    this.randomVal = Math.floor(Math.random() * this.validations.length) ;
    this.valLabel = this.validations[this.randomVal][0]+" :";
  }

  //Check if the message can be save and it can it does it
  sendMsj() {

    if(this.name == "") {
      this.formError = true;
      this.nameError = "Introduzca su nombre y apellido";
    }else {
      this.nameError = "";
    }
    if(this.email == "") {
      this.formError = true;
      this.emailError = "Introduzca un email valido";
    }else{
      this.emailError = "";
    }

    if(this.msg == "") {
      this.formError = true;
      this.msgError = "Introduzca un mensaje";
    }else{
      this.msgError = "";
    }

    if(this.val != this.validations[this.randomVal][1]) {
      this.formError = true;
      this.valError = "Validacion anti-spam incorrecta";
    }else {
      this.valError = "";
    }

    if(!this.formError){
      this.messages.push([this.name,this.email,this.msg]);

      this.name = "";
      this.email = "";
      this.msg = "";
      this.val = "";

    }

    this.getValidation();
    this.formError = false
  }



}
