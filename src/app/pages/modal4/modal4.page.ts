import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal4',
  templateUrl: './modal4.page.html',
  styleUrls: ['./modal4.page.scss'],
})
export class Modal4Page implements OnInit {
  
  name= null;
  constructor(private vavParams : NavParams, private modalController : ModalController) { }

  ngOnInit() {
    this.name=this.vavParams.get('name');
  }

  closeModal(){
    this.modalController.dismiss();
  }


}
