import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.page.html',
  styleUrls: ['./modal3.page.scss'],
})
export class Modal3Page implements OnInit {

  name= null;
  constructor(private vavParams : NavParams, private modalController : ModalController) { }

  ngOnInit() {
    this.name=this.vavParams.get('name');
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
