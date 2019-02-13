import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, NavParams, AlertController, LoadingController } from '@ionic/angular';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage //implements OnInit {
{
    reactSubmitted: boolean = false;
    loginDatos: any = { user: "unicentrocali", password: "cali" };

    constructor(
      public router: Router, 
      public formBuilder: FormBuilder,
      public alertCtrl: AlertController, 
      public navCtrl: NavController,
      ) 
    {}

    async login( forma:NgForm )
    {
        if (!forma.valid) {
        const alert = await this.alertCtrl.create({
            header: "Campos vacios",
            //subHeader: "",
            message: "No debe tener campos vacios",
            buttons: ['OK'] });
            await alert.present();
        return;
        }else
        {
            if(!(forma.value.user != this.loginDatos.user) && !(forma.value.password != this.loginDatos.password))
            { 
                this.navCtrl.navigateForward('app/tabs/tab1');
            }
            else{
                const alert = await this.alertCtrl.create({
                    header: "Datos incorrectos",
                    //subHeader: "",
                    message: "Error en el usuario o la contraseña",
                    buttons: ['OK'] });
                    await alert.present();
                return;
            }
        }
    }
}
