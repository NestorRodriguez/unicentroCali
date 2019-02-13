import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.page.html',
  styleUrls: ['./modal1.page.scss'],
})
export class Modal1Page implements OnInit {


  name= null;
  constructor(private vavParams : NavParams, private modalController : ModalController) { }

  ngOnInit() {
    this.name=this.vavParams.get('name');
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
