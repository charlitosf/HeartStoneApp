import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hello-toast',
  templateUrl: './hello-toast.component.html',
  styleUrls: ['./hello-toast.component.scss'],
})
export class HelloToastComponent {

  constructor(public toastController: ToastController) {}

  async presentToast(text:string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Alert',
      message: 'Would you like to close the application?',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }, {
          text: 'Exit',
          handler: () => {
            new HelloToastComponent(new ToastController()).presentToast("App exited")
          }
        }
      ]
    });
    toast.present();
  }
}
