import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  public name_form="";
  public email_form="";
  public name = "Stiven Rojas";
  public age = 35;
  public single=true;

  public images=["assets/img/vegeta.jpg", "https://www.elcarrocolombiano.com/wp-content/uploads/2019/11/20191110-MERCEDES-CLASE-G-ELECTRICA-AA01.jpg"]

  public img_BDZ=null;


  constructor(
    private menuCtrl: MenuController,
  ) { 
    this.img_BDZ=this.images[0];
  }

  public catchEvent(ev: any){
    console.log(ev);
    console.log('event catched');

    if(this.img_BDZ === this.images[0]){
      this.img_BDZ=this.images[1];
    }else{
      this.img_BDZ=this.images[0];
    }


  }

  public sendData(){
    console.log('name:', this.name_form);
    console.log('email:', this.email_form);
  }

  public async presentAsideMenu(ev: any){
    console.log(ev);
    await this.menuCtrl.enable(true,'custom');
    await this.menuCtrl.toggle('custom');
  }

}
