import { ToastController } from '@ionic/angular';
import { HelloToastComponent } from './../hello-toast/hello-toast.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  
  ionViewWillEnter() {
    new HelloToastComponent(new ToastController()).presentToast("App exited");
    navigator['app'].exitApp();
  }
}
