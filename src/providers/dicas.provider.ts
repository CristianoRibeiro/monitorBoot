import { Injectable } from '@angular/core';
import { DicasModel } from '../models/dicas';

export const DICAS = 'dicas_sala';

@Injectable()
export class DicasProvider {

  public salvarDicas(dicas: DicasModel) {
    const data = JSON.stringify(dicas);
    localStorage.setItem(DICAS, data);
  }

  public buscarDicas(): DicasModel {
    const dicas = localStorage.getItem(DICAS);
    return new DicasModel(dicas ? JSON.parse(dicas) : null);
  }

}
