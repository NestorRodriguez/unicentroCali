import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal1Page } from '../pages/modal1/modal1.page';
import { Modal2Page } from '../pages/modal2/modal2.page';
import { Modal3Page } from '../pages/modal3/modal3.page';
import { Modal4Page } from '../pages/modal4/modal4.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalcontroller: ModalController){

  }

  async openModal1(){
    console.log("modal 1");
    const modal = await this.modalcontroller.create({
      component:Modal1Page,
      componentProps: {}
    });
    modal.present();
  }
  
  async openModal2(){
    console.log("modal 2");
    const modal = await this.modalcontroller.create({
      component:Modal2Page,
      componentProps: {}
    });
    modal.present();
  }
  
  async openModal3(){
    console.log("modal 3");
    const modal = await this.modalcontroller.create({
      component:Modal3Page,
      componentProps: {}
    });
    modal.present();
  }
  
  async openModal4(){
    console.log("modal 4");
    const modal = await this.modalcontroller.create({
      component:Modal4Page,
      componentProps: {}
    });
    modal.present();
  }
}
