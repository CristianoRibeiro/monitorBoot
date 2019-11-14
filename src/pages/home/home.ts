import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hasClicked: boolean;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.hasClicked = false;
  }

  enterAdmin(): void {
    let alert = this.alertCtrl.create({
      title: 'Área de adminstração',
      message: 'Insira a senha de administrador',
      inputs: [{
        name: 'senha',
        placeholder: 'Senha de adminstrador',
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            if (data.senha == '159753') {
              this.loadControlPanel();
            } else {
              let toast = this.toastCtrl.create({
                message: 'Senha de administração incorreta.',
                duration: 3000,
                position: 'top'
              });
              toast.present();
            }
          }
        }
      ]
    });
    alert.present();
  }

  loadControlPanel(): void {
    this.navCtrl.setRoot('PainelControlePage');
  }

  startGame(): void {
    this.hasClicked = (this.hasClicked == false ? !this.hasClicked : this.hasClicked = false);

    setTimeout(() => {
      this.navCtrl.push('DicasPage');
    }, 500);
  }

}
