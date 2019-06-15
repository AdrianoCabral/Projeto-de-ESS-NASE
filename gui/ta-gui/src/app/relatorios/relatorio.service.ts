import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Relatorio } from './relatorio';

@Injectable()
export class RelatorioService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(relatorio: Relatorio): Promise<Relatorio> {
    return this.http.post(this.taURL + "/relatorio",JSON.stringify(relatorio), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return relatorio;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  atualizar(relatorio: Relatorio): Promise<Relatorio> {
    return this.http.put(this.taURL + "/relatorio",JSON.stringify(relatorio), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return relatorio;} else {return null;}
         })
         .catch(this.tratarErro);
  }

  remover(relatorio: Relatorio): Promise<Relatorio> {
    return this.http.put(this.taURL + "/relatorioDelete",JSON.stringify(relatorio), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return relatorio;} else {return null;}
         })
         .catch(this.tratarErro);
  }


  getrelatorios(): Promise<Relatorio[]> {
    return this.http.get(this.taURL + "/relatorios")
             .toPromise()
             .then(res => res.json() as Relatorio[])
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de relatorios',erro);
    return Promise.reject(erro.message || erro);
  }
}