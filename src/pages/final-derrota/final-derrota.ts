import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoModel } from '../../models/avaliacao';
import { SalaModel } from '../../models/sala';
import { DicasProvider } from '../../providers/dicas.provider';

@IonicPage()
@Component({
  selector: 'page-final-derrota',
  templateUrl: 'final-derrota.html',
})
export class FinalDerrotaPage {

  sala: SalaModel;
  avaliacao: AvaliacaoModel = new AvaliacaoModel();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nativeAudio: NativeAudio,
              public dicas: DicasProvider) {
    this.sala = dicas.buscarDicas().sala;
    this.avaliacao = this.navParams.get('avaliacao');
  }

  ionViewDidEnter() {
    this.nativeAudio.preloadSimple('DERROTA', this.sala.diretorioAudioDerrota).then(data => {
      this.nativeAudio.play('DERROTA');
    });
  }

  navegarPesquisa() {
    this.nativeAudio.stop('DERROTA');
    this.nativeAudio.unload('DERROTA');
    this.navCtrl.push('PesquisaPage', {
      avaliacao: this.avaliacao
    });
  }

}
