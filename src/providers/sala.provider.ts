import { Injectable } from '@angular/core';
import { SalaModel } from '../models/sala';

@Injectable()
export class SalaProvider {

  private salas: Array<SalaModel> = [
    {
      id: 1,
      nome: 'Cativeiro',
      diretorioAudioDerrota: 'assets/audio/cativeiro_derrota.mp3',
      diretorioAudioVitoria: 'assets/audio/cativeiro_sucesso.mp3'
    },
    {
      id: 2,
      nome: 'Graal',
      diretorioAudioDerrota: 'assets/audio/graal_derrota.mp3',
      diretorioAudioVitoria: 'assets/audio/graal_vitoria.mp3'
    },
    {
      id: 3,
      nome: 'Matadouro',
      diretorioAudioDerrota: 'assets/audio/matadouro_derrota.mp3',
      diretorioAudioVitoria: 'assets/audio/matadouro_sucesso.mp3'
    },
    {
      id: 4,
      nome: 'Resgate',
      diretorioAudioDerrota: 'assets/audio/resgate-derrota.mp3',
      diretorioAudioVitoria: 'assets/audio/resgate-sucesso.mp3'
    }
  ];

  getSalas(): Array<SalaModel> {
    return this.salas;
  }

  getSalaById(id: number): SalaModel {
    return this.salas.find(sala => sala.id === id);
  }

}
