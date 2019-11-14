import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoModel } from "../../models/avaliacao";
import { MailService } from "../../services/mail.service";
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})
export class PesquisaPage {

  avaliacao: AvaliacaoModel;
  loja: number = 0;
  dificuldade: number = 0;
  dicas: number = 0 ;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nativeAudio: NativeAudio,
    public mailService: MailService
  ) {
    this.avaliacao = navParams.get('avaliacao');
  }

  ionViewDidEnter() {
    this.nativeAudio.preloadSimple('AVALIACAO', 'assets/audio/avaliacao.wav').then(data => {
      this.nativeAudio.play('AVALIACAO');
    });
  }

  ionViewDidLeave() {
    this.nativeAudio.stop('AVALIACAO');
  }

  enviarForm(): void {
    this.avaliacao.avaliacaoDicas = this.dicas;
    this.avaliacao.avaliacaoDificuldade = this.dificuldade;
    this.avaliacao.avaliacaoLoja = this.loja;

    this.enviarAvaliacao();
    this.nativeAudio.stop('AVALIACAO');
    this.nativeAudio.unload('AVALIACAO');
    this.navCtrl.setRoot('HomePage');
  }

  enviarAvaliacao() {
    let json = {
      horaInicio: new Date(this.avaliacao.dataHoraInicio).toLocaleTimeString(),
      horaFim: new Date(this.avaliacao.dataHoraFim).toLocaleTimeString(),
      avaliacaoDicas: this.avaliacao.avaliacaoDicas,
      avaliacaoLoja: this.avaliacao.avaliacaoLoja,
      avaliacaoDificuldade: this.avaliacao.avaliacaoDificuldade
    };
    let msg = JSON.stringify(json).split(",").join(",\n");
    this.mailService.sendMail('Avaliação via App', msg).subscribe((data) => {
      console.log(data, 'data');
    }, error => console.log(error, 'error'));
  }

}
