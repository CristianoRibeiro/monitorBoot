export class SalaModel {

  constructor(data = null) {
    if (data) {
      this.id= data.id;
      this.nome = data.nome;
      this.diretorioAudioVitoria = data.diretorioAudioVitoria;
      this.diretorioAudioDerrota = data.diretorioAudioDerrota;
    }
  }

  id: number;
  nome: string;
  diretorioAudioDerrota: string;
  diretorioAudioVitoria: string;
}
