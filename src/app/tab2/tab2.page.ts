import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  slideOpts = {
    effect: 'flip'
  };
  constructor(
    public bluetoothSerial : BluetoothSerial,
  ) 
  { 
    let hideFooterTimeout = setTimeout( () => {
         this.bluetoothSerial.enable().then(function () {
            console.log("Bluetooth is enabled");
          }, function () {
            console.log("The user did *not* enable Bluetooth");
          });
    });
   }
   locations : string[] = ['Almacén', 'Sala de Juntas', 'RRHH', 'IT', 'Despacho', 'Comercial', 'Recepción'];
   
   letsGo(){
    console.log("Buscando rutas");
   }
  }
  //enableBluetooth() 
  //{
  //  console.log(this.enableBluetooth.toString());
  //   this.bluetoothSerial.enable(
  //     function() {
  //         console.log("Bluetooth is enabled");
  //     },
  //     function() {
  //         console.log("The user did *not* enable Bluetooth");
  //     }
  // );
 //}
//}

