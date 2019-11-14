import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DicasProvider } from '../../providers/dicas.provider';
import { DicasModel } from '../../models/dicas';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SalaModel } from '../../models/sala';
import { SalaProvider } from '../../providers/sala.provider';

@IonicPage()
@Component({
  selector: 'page-painel-controle',
  templateUrl: 'painel-controle.html',
})
export class PainelControlePage {

  public form: FormGroup;
  public dicas: DicasModel;
  @ViewChild(Slides) slides: Slides
  public salas: Array<SalaModel>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dicasProvider: DicasProvider,
              public toastController: ToastController,
              public salaProvider: SalaProvider,
              public formBuilder: FormBuilder) {

    this.dicas = this.dicasProvider.buscarDicas();
    this.salas = this.salaProvider.getSalas();

    this.form = this.formBuilder.group({
      nome: [this.dicas.nome, Validators.compose([Validators.required])],
      sala: [this.dicas.sala ? this.dicas.sala.id : null, Validators.compose([Validators.required])],
      numeroSala: [this.dicas.numeroSala, Validators.compose([Validators.required])],
      grupo1dica1titulo: [this.dicas.grupo1dica1titulo, Validators.compose([Validators.required])],
      grupo1dica1texto: [this.dicas.grupo1dica1texto, Validators.compose([Validators.required])],
      grupo1dica2titulo: [this.dicas.grupo1dica2titulo, Validators.compose([Validators.required])],
      grupo1dica2texto: [this.dicas.grupo1dica2texto, Validators.compose([Validators.required])],
      grupo1dica3titulo: [this.dicas.grupo1dica3titulo, Validators.compose([Validators.required])],
      grupo1dica3texto: [this.dicas.grupo1dica3texto, Validators.compose([Validators.required])],
      grupo2dica1titulo: [this.dicas.grupo2dica1titulo, Validators.compose([Validators.required])],
      grupo2dica1texto: [this.dicas.grupo2dica1texto, Validators.compose([Validators.required])],
      grupo2dica2titulo: [this.dicas.grupo2dica2titulo, Validators.compose([Validators.required])],
      grupo2dica2texto: [this.dicas.grupo2dica2texto, Validators.compose([Validators.required])],
      grupo2dica3titulo: [this.dicas.grupo2dica3titulo, Validators.compose([Validators.required])],
      grupo2dica3texto: [this.dicas.grupo2dica3texto, Validators.compose([Validators.required])],
      grupo3dica1titulo: [this.dicas.grupo3dica1titulo, Validators.compose([Validators.required])],
      grupo3dica1texto: [this.dicas.grupo3dica1texto, Validators.compose([Validators.required])],
      grupo3dica2titulo: [this.dicas.grupo3dica2titulo, Validators.compose([Validators.required])],
      grupo3dica2texto: [this.dicas.grupo3dica2texto, Validators.compose([Validators.required])],
      grupo3dica3titulo: [this.dicas.grupo3dica3titulo, Validators.compose([Validators.required])],
      grupo3dica3texto: [this.dicas.grupo3dica3texto, Validators.compose([Validators.required])]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PainelControlePage');
  }

  salvar() {
    const toast = this.toastController.create({
      duration: 3000,
      position: 'top'
    });

    if (this.form.invalid) {
      toast.setMessage('Preencha os campos obrigatórios.');
      toast.present();
      return;
    }

    const dicas = new DicasModel(this.form.value);
    const salaId = parseInt(this.form.value.sala);
    dicas.sala = this.salaProvider.getSalaById(salaId);
    this.dicasProvider.salvarDicas(dicas);

    toast.setMessage('Dicas salvas com sucesso.');
    toast.present();
    this.navCtrl.setRoot('HomePage');
  }

  avancar() {
    this.slides.slideNext();
  }

  voltar() {
    this.slides.slidePrev();
  }

}
