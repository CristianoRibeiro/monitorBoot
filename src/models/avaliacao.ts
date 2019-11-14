export class AvaliacaoModel {

  public static TABLE_NAME = "tb_avaliacao";

  constructor(data = null) {
    if (data) {
      this.id = data.id;
      this.dataHoraInicio= data.dataHoraInicio;
      this.dataHoraFim = data.dataHoraFim;
      this.avaliacaoLoja= data.avaliacaoLoja;
      this.avaliacaoDificuldade= data.avaliacaoDificuldade;
      this.avaliacaoDicas= data.avaliacaoDicas;
    }
  }

  id: number;
  dataHoraInicio: number;
  dataHoraFim: number;
  avaliacaoLoja: number;
  avaliacaoDificuldade: number;
  avaliacaoDicas: number;

}
