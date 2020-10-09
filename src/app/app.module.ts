import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ImportComponent } from './pages/import/import.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './helpers/material-components.module';
import { ModalImportarArquivoComponent } from './components/modals/modal-importar-arquivo/modal-importar-arquivo.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ModalImportacaoComponent } from './components/modals/modal-importacao/modal-importacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImportComponent,
    ModalImportarArquivoComponent,
    ModalImportacaoComponent
  ],
  entryComponents: [
    ModalImportarArquivoComponent,
    ModalImportacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
