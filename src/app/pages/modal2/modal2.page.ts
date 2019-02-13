import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.page.html',
  styleUrls: ['./modal2.page.scss'],
})
export class Modal2Page implements OnInit {

  name= null;
  constructor(private vavParams : NavParams, private modalController : ModalController) { }

  ngOnInit() {
    this.name=this.vavParams.get('name');
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
