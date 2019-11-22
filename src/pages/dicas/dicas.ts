import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, NavController, ToastController } from 'ionic-angular';

import { AvaliacaoModel } from '../../models/avaliacao';
import { DicasProvider } from '../../providers/dicas.provider';
import { DicasModel } from '../../models/dicas';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {

  dicas: DicasModel;
  timeOut: any;
  avaliacao: AvaliacaoModel = new AvaliacaoModel();
  cronoArr: Array<any>;
  grupoDicas: number = 0;
  fillClass: string;
  interval: any;
  dicasAtivas: Array<any>;
  indexDicasAtivas: number;
  dicasExpandidas: Array<any> = [];
  @ViewChild('painelDicas') painelDicas;

  timesDica = [
    ((60 * 1000) * 15),
    ((60 * 1000) * 30),
    ((60 * 1000) * 45)
  ];
  finalTime = ((60 * 1000) * 30);

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public nativeAudio: NativeAudio,
    public dicasProvider: DicasProvider
  ) {

    this.dicas = this.dicasProvider.buscarDicas();

    this.cronoArr = [
      {
        id: 1,
        statusDicas: 'DISPONÍVEL EM BREVE',
        fillClass: 'p00',
        disponivel: false,
        dicas: [
          {
            titulo: this.dicas.grupo1dica1titulo,
            descricao: `■ ${this.dicas.grupo1dica1texto}`
          },
          {
            titulo: this.dicas.grupo1dica2titulo,
            descricao: `■ ${this.dicas.grupo1dica2texto}`
          },
          {
            titulo: this.dicas.grupo1dica3titulo,
            descricao: `■ ${this.dicas.grupo1dica3texto}`
          },
        ]
      },
      {
        id: 2,
        statusDicas: 'DISPONÍVEL EM BREVE',
        fillClass: 'p00',
        dicas: [
          {
            titulo: this.dicas.grupo2dica1titulo,
            descricao: `■ ${this.dicas.grupo2dica1texto}`
          },
          {
            titulo: this.dicas.grupo2dica2titulo,
            descricao: `■ ${this.dicas.grupo2dica2texto}`
          },
          {
            titulo: this.dicas.grupo2dica3titulo,
            descricao: `■ ${this.dicas.grupo2dica3texto}`
          },
        ]
      },
      {
        id: 3,
        statusDicas: 'DISPONÍVEL EM BREVE',
        fillClass: 'p00',
        dicas: [
          {
            titulo: this.dicas.grupo3dica1titulo,
            descricao: `■ ${this.dicas.grupo3dica1texto}`
          },
          {
            titulo: this.dicas.grupo3dica2titulo,
            descricao: `■ ${this.dicas.grupo3dica2texto}`
          },
          {
            titulo: this.dicas.grupo3dica3titulo,
            descricao: `■ ${this.dicas.grupo3dica3texto}`
          },
        ]
      },
    ];

    //Salva a hora que iniciou o jogo
    this.avaliacao.dataHoraInicio = new Date().getTime();
  }

  ionViewDidEnter() {
    this.verificarAudioSala();
  }

  ngAfterViewInit() {
    this.startDicaCounter(this.timesDica[this.grupoDicas]);
    this.timeOut = setTimeout(() => {
      this.finalizarDerrota();
    }, this.finalTime);
  }

  verificarAudioSala() {
    switch (this.dicas.sala.id ) {
      case 1:
        //Cativeirooo
        this.nativeAudio.preloadSimple('AUDIO_FUNDO', 'assets/audio/fundo_cativeiro.mp3').then(data => {
          this.nativeAudio.play('AUDIO_FUNDO');
        });
        break;
      case 2:
        //Graaal
        this.nativeAudio.preloadSimple('AUDIO_FUNDO', 'assets/audio/fundo_graal.mp3').then(data => {
          this.nativeAudio.play('AUDIO_FUNDO');
        });
        break;
      case 3:
        //Matadouro
        this.nativeAudio.preloadSimple('AUDIO_FUNDO', 'assets/audio/fundo_matadouro.mp3').then(data => {
          this.nativeAudio.play('AUDIO_FUNDO');
        });
        break;
    }
  }

  startDicaCounter(time){
    let counter = 1;
    this.interval = setInterval(() => {
      this.cronoArr[this.grupoDicas].fillClass = 'p' + counter.toString();
      counter++;

      if (counter === 101) {
        this.cronoArr[this.grupoDicas].statusDicas = "DISPONÍVEL";
        this.cronoArr[this.grupoDicas].disponivel = true;
        if (this.grupoDicas < 2) {
          clearInterval(this.interval);
          this.startDicaCounter(this.timesDica[++this.grupoDicas]);
        } else {
          clearInterval(this.interval);
        }
      }
    }, (time / 100));
  }


  fillCounter() {
    let counter = 0;
    this.interval = setInterval(() => {
      this.cronoArr[this.grupoDicas].fillClass = 'p' + counter.toString();
      counter++;

      if (counter === 101) {
        this.cronoArr[this.grupoDicas].statusDicas = "DISPONÍVEL";
        this.cronoArr[this.grupoDicas].disponivel = true;
        if (this.grupoDicas < 2) {
          this.grupoDicas++;
          counter = 1;
        } else {
          clearInterval(this.interval);
        }
      }
    }, 9000);
  }

  mostrarDicas(crono, index): void {
    if (crono.disponivel && this.indexDicasAtivas != index) {
      this.indexDicasAtivas = index;
      this.dicasAtivas = crono.dicas;
    }
  }

  onExpandirDica(dicaSelecionada): void {
    if (this.dicasExpandidas.length != 3 && this.dicasExpandidas.indexOf(dicaSelecionada) === -1) {
      dicaSelecionada.active = true;
      this.dicasExpandidas.push(dicaSelecionada);
    } else if (this.dicasExpandidas.indexOf(dicaSelecionada) > -1) {
      dicaSelecionada.active = true;
    } else {
      let toast = this.toastCtrl.create({
        message: 'Suas dicas foram esgotadas.',
        duration: 3000,
        position: 'top'
      });

      toast.present();
    }
  }

  killGame(): void {
    let alert = this.alertCtrl.create({
      title: 'Deseja encerrar o jogo?',
      message: 'Você tem certeza que deseja encerrar esta partida?',
      inputs: [{
        name: 'senha',
        placeholder: 'Senha de confirmação',
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
            if (data.senha == 159753) {
              this.finalizar();
            } else {
              let toast = this.toastCtrl.create({
                message: 'Senha de confirmação incorreta.',
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

  finalizar() {
    clearInterval(this.interval);
    clearTimeout(this.timeOut);
    this.nativeAudio.stop('AUDIO_FUNDO');
    this.nativeAudio.unload('AUDIO_FUNDO');
    this.avaliacao.dataHoraFim = new Date().getTime();
    this.navCtrl.push('FinalVitoriaPage', {
      avaliacao: this.avaliacao
    });
  }

  finalizarDerrota() {
    clearInterval(this.interval);
    clearTimeout(this.timeOut);
    this.nativeAudio.stop('AUDIO_FUNDO');
    this.nativeAudio.unload('AUDIO_FUNDO');
    this.avaliacao.dataHoraFim = new Date().getTime();
    this.navCtrl.push('FinalDerrotaPage', {
      avaliacao: this.avaliacao
    });
  }
}
