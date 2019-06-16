import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { DadosComponent } from './dados.component';
import { RelatoriosComponent } from './relatorios.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    DadosComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'dados',
        component: DadosComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [RelatoriosComponent]
})
export class RelatoriosModule { }