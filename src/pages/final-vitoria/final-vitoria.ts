import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoModel } from '../../models/avaliacao';
import { SalaModel } from '../../models/sala';
import { DicasProvider } from '../../providers/dicas.provider';

@IonicPage()
@Component({
  selector: 'page-final-vitoria',
  templateUrl: 'final-vitoria.html',
})
export class FinalVitoriaPage {

  avaliacao: AvaliacaoModel = new AvaliacaoModel();
  sala: SalaModel;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nativeAudio: NativeAudio,
              public dicas: DicasProvider) {
    this.sala = dicas.buscarDicas().sala;
    this.avaliacao = this.navParams.get('avaliacao');
  }

  ionViewDidEnter() {
    this.nativeAudio.preloadSimple('VITORIA', this.sala.diretorioAudioVitoria).then((data) => {
      console.log('foi');
      this.nativeAudio.play('VITORIA');
    }, error => {
      console.log('n foi', error);
    });
  }

  navegarPesquisa() {
    this.nativeAudio.stop('VITORIA');
    this.nativeAudio.unload('VITORIA');
    this.navCtrl.push('PesquisaPage', {
      avaliacao: this.avaliacao
    });
  }

}
