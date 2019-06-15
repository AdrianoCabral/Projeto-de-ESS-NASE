import { Relatorio } from '../../gui/ta-gui/src/app/relatorios/relatorio';

export class CadastroDeRelatorios {
  relatorios: Relatorio[] = [];

  criar(relatorio: Relatorio): Relatorio {
    var result = null;
    if (this.nomeNaoCadastrado(relatorio.profissional_nome)) {
      result = new Relatorio();
      result.copyFrom(relatorio);
      this.relatorios.push(result);
    }
    return result;
  }
  remover(relatorio: Relatorio): Relatorio {
    var result: Relatorio = this.relatorios.find(a => a.profissional_nome == relatorio.profissional_nome);
    if (result) this.relatorios.splice(this.relatorios.indexOf(result), 1);
    return result;
  }
  nomeNaoCadastrado(profissional_nome: string): boolean {
     return !this.relatorios.find(a => a.profissional_nome == profissional_nome);
  }

  atualizar(relatorio: Relatorio): Relatorio {
    var result: Relatorio = this.relatorios.find(a => a.profissional_nome == relatorio.profissional_nome);
    if (result) result.copyFrom(relatorio);
    return result;
  }

  getrelatorios(): Relatorio[] {
    return this.relatorios;
  }
}