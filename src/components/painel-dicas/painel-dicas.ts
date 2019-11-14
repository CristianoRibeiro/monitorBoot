import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'painel-dicas',
  templateUrl: 'painel-dicas.html'
})
export class PainelDicasComponent {

  @Input() dicas: any;
  @Output() onExpandirDica: EventEmitter<any> = new EventEmitter();

  toggled: boolean;

  constructor(public alertCtrl: AlertController) {
    this.toggled = false;

  }

  expandirDica(dica: any, i: any) {



      let alert = this.alertCtrl.create({
        title: 'UTILIZAR DICA',
        message: 'Você tem certeza que deseja utilizar essa dica?',
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              console.log('Cancelou clique');
            }
          },
          {
            text: 'Sim',
            handler: () => {
              console.log('Sim clicou');
              this.onExpandirDica.next(dica);
            }
          }
        ]
      });
      alert.present();




    // this.onExpandirDica.next(dica);
  }

  fecharDica(dica: any, event) {
    event.preventDefault();
    event.stopPropagation();
    dica.active = false;
  }

  expandirDescricao(indicador: any, event) {
    indicador.active = !indicador.active;
    console.log(indicador.active);
    event.preventDefault();
    event.stopPropagation();
  }

}
