import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AtividadeEmCampoComponent } from './atividadeCampo/atividadeEmCampo.component';
import { AtividadeEmCampoService } from './atividadeCampo/atividadeEmCampo.service';
import { AlunosComponent} from './alunos/alunos.component'
import { AlunoService } from './alunos/aluno.service'

@NgModule({
  declarations: [
    AppComponent,
    AtividadeEmCampoComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'atividadeEmCampo', 
        component: AtividadeEmCampoComponent
      },
      {
        path: 'aluno',
        component: AlunosComponent
      }
    ])
  ],
  providers: [AtividadeEmCampoService, AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
