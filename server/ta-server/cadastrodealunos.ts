import { relatorio } from '../../gui/ta-gui/src/app/relatorios/relatorio';

export class CadastroDerelatorios {
  relatorios: relatorio[] = [];

  criar(relatorio: relatorio): relatorio {
    var result = null;
    if (this.cpfNaoCadastrado(relatorio.cpf) && this.githubLoginNaoCadastrado(relatorio.githubLogin)) {
      result = new relatorio();
      result.copyFrom(relatorio);
      this.relatorios.push(result);
    }
    return result;
  }
  remover(relatorio: relatorio): relatorio {
    var result: relatorio = this.relatorios.find(a => a.cpf == relatorio.cpf);
    if (result) this.relatorios.splice(this.relatorios.indexOf(result), 1);
    return result;
  }
  cpfNaoCadastrado(cpf: string): boolean {
     return !this.relatorios.find(a => a.cpf == cpf);
  }

  githubLoginNaoCadastrado(githubLogin: string): boolean{
    return !this.relatorios.find(a => a.githubLogin == githubLogin)
  }

  atualizar(relatorio: relatorio): relatorio {
    var result: relatorio = this.relatorios.find(a => a.cpf == relatorio.cpf);
    if (result) result.copyFrom(relatorio);
    return result;
  }

  getrelatorios(): relatorio[] {
    return this.relatorios;
  }
}