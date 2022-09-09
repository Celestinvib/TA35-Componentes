import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string = "";

  cif:string = "";

  address:string = "";

  group:string = "1";

  clients = [
    ['Cliente 1','B 123','C/la la la', 1],
    ['Cliente 2','A 334','Av.lo lo lo', 2]
  ];

  saveClient () {

    if(this.name != "" && this.cif != "" && this.address != "") {
      this.clients.push([this.name,this.cif,this.address,this.group]);
    }
    this.name = "";
    this.cif = "";
    this.address = "";
    this.group = "1";


  }
}
