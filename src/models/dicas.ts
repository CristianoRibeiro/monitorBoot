import { SalaModel } from './sala';
export class DicasModel {

  constructor(data = null) {
    if (data) {
      this.nome = data.nome;
      this.numeroSala = data.numeroSala;
      this.grupo1dica1titulo = data.grupo1dica1titulo;
      this.grupo1dica1texto = data.grupo1dica1texto;
      this.grupo1dica2titulo = data.grupo1dica2titulo;
      this.grupo1dica2texto = data.grupo1dica2texto;
      this.grupo1dica3titulo = data.grupo1dica3titulo;
      this.grupo1dica3texto = data.grupo1dica3texto;
      this.grupo2dica1titulo = data.grupo2dica1titulo;
      this.grupo2dica1texto = data.grupo2dica1texto;
      this.grupo2dica2titulo = data.grupo2dica2titulo;
      this.grupo2dica2texto = data.grupo2dica2texto;
      this.grupo2dica3titulo = data.grupo2dica3titulo;
      this.grupo2dica3texto = data.grupo2dica3texto;
      this.grupo3dica1titulo = data.grupo3dica1titulo;
      this.grupo3dica1texto = data.grupo3dica1texto;
      this.grupo3dica2titulo = data.grupo3dica2titulo;
      this.grupo3dica2texto = data.grupo3dica2texto;
      this.grupo3dica3titulo = data.grupo3dica3titulo;
      this.grupo3dica3texto = data.grupo3dica3texto;
      this.sala = new SalaModel(data.sala);
    }
  }

  nome: string;
  numeroSala: string;
  grupo1dica1titulo: string;
  grupo1dica1texto: string;
  grupo1dica2titulo: string;
  grupo1dica2texto: string;
  grupo1dica3titulo: string;
  grupo1dica3texto: string;
  grupo2dica1titulo: string;
  grupo2dica1texto: string;
  grupo2dica2titulo: string;
  grupo2dica2texto: string;
  grupo2dica3titulo: string;
  grupo2dica3texto: string;
  grupo3dica1titulo: string;
  grupo3dica1texto: string;
  grupo3dica2titulo: string;
  grupo3dica2texto: string;
  grupo3dica3titulo: string;
  grupo3dica3texto: string;
  sala: SalaModel

}
