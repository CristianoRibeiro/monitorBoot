import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PainelControlePage } from './painel-controle';

@NgModule({
  declarations: [
    PainelControlePage,
  ],
  imports: [
    IonicPageModule.forChild(PainelControlePage)
  ],
})
export class PainelControlePageModule {}
