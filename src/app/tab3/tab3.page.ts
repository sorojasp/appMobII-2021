import { Component } from '@angular/core';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public names=['Valentina', 'Elian','Camilo','Jeison','Stiven','David'];
  public showMsg=true;

  constructor(
    private router: Router
  ) {}

  public showOrNotShow(){

    this.showMsg=!this.showMsg;
    this.goToTeachers();
  }

  public goToTeachers(){
    this.router.navigate(['../teachers/tabs']);
  }

}
