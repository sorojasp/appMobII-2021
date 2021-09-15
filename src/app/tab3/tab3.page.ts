import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public names=['Valentina', 'Elian','Camilo','Jeison','Stiven','David'];
  public showMsg=true;

  constructor() {}

  public showOrNotShow(){

    this.showMsg=!this.showMsg;

  }

}
