import express = require('express');
import bodyParser = require("body-parser");

import { AtividadeEmCampo } from '../../gui/ta-gui/src/app/atividadeCampo/atividadeEmCampo';
import {CadastroDeAtividades} from './cadastrodeatividades';
import {Relatorio} from '../../gui/ta-gui/src/app/relatorios/relatorio';
import {CadastroDeRelatorios} from './cadastroderelatorios';

var app = express();

var cadastroAtividade: CadastroDeAtividades = new CadastroDeAtividades();
var cadastroRelatorio: CadastroDeRelatorios = new CadastroDeRelatorios();
var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/atividades', function (req, res) {
  res.send(JSON.stringify(cadastroAtividade.getAtividades()));
})

app.post('/atividade', function (req: express.Request, res: express.Response) {
  var atividade : AtividadeEmCampo = <AtividadeEmCampo> req.body; 
  atividade = cadastroAtividade.criar(atividade);
  if (atividade) {
    res.send({"success": "A atividade em campo foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "A atividade em campo não pode ser cadastrado"});
  }
})

app.post('/buscaAtividades', function (req: express.Request, res: express.Response) {
  var atividade : AtividadeEmCampo = <AtividadeEmCampo> req.body; 
  var atividadesBuscadas = cadastroAtividade.busca(atividade);
  if (atividadesBuscadas.length>0) {
    res.send(JSON.stringify(atividadesBuscadas));
  } else {
    res.send({"failure": "A atividade em campo não pode ser cadastrado"});
  }
})

app.put('/atividade', function (req: express.Request, res: express.Response) {
  var atividade: AtividadeEmCampo = <AtividadeEmCampo> req.body;
  atividade = cadastroAtividade.atualizar(atividade);
  if (atividade) {
    res.send({"success": "A atividade em campo foi atualizado com sucesso"});
  } else {
    res.send({"failure": "A atividade em campo não pode ser atualizado"});
  }
})
app.delete('/atividade',function(req: express.Request, res: express.Response){
  var atividade = req.body;
  var removido = cadastroAtividade.remover(atividade); //deveria haver um teste de remoção
  if (removido) {
    res.send({"success": "A atividade em campo foi atualizado com sucesso"});
  } else {
    res.send({"failure": "A atividade em campo não pode ser atualizado"});
  }
});

app.get('/relatorios', function (req, res) {
  res.send(JSON.stringify(cadastroRelatorio.getrelatorios()));
})

app.post('/relatorio', function (req: express.Request, res: express.Response) {
  var relatorio: Relatorio = <Relatorio> req.body; //verificar se é mesmo relatorio!
  relatorio = cadastroRelatorio.criar(relatorio);
  if (relatorio) {
    res.send({"success": "O relatorio foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O relatorio não pode ser cadastrado"});
  }
})

app.put('/relatorio', function (req: express.Request, res: express.Response) {
  var relatorio: Relatorio = <Relatorio> req.body;
  relatorio = cadastroRelatorio.atualizar(relatorio);
  if (relatorio) {
    res.send({"success": "O relatorio foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O relatorio não pode ser atualizado"});
  }
})


app.put('/relatorioDelete', function (req: express.Request, res: express.Response) {
  var relatorio: Relatorio = <Relatorio> req.body;
  relatorio = cadastroRelatorio.remover(relatorio);
  if (relatorio) {
    res.send({"success": "O relatorio foi deletado com sucesso"});
  } else {
    res.send({"failure": "O relatorio não pode ser deletado"});
  }
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void{
  server.close();
}

export { app, server, closeServer }
