import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DicasPage } from './dicas';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DicasPage,
  ],
  imports: [
    IonicPageModule.forChild(DicasPage),
    ComponentsModule
  ],
})
export class DicasPageModule {}
