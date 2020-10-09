import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImportService } from 'src/app/services/import.service';


@Component({
  selector: 'app-modal-importar-arquivo',
  templateUrl: './modal-importar-arquivo.component.html',
  styleUrls: ['./modal-importar-arquivo.component.scss']
})
export class ModalImportarArquivoComponent implements OnInit {
  public nomeArquivo = '';
  public arquivoSeleconado: File = null;
  public templateImportacao = TEMPLATE_IMPORTACAO;
  public errorsList: string[] = [];
  public inputFileValue = null;

  constructor(
    private importService: ImportService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModalImportarArquivoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  selecionaArquivo(files?: FileList): void {
    if (files.item(0)) {
      this.arquivoSeleconado = files.item(0);
      this.nomeArquivo = this.arquivoSeleconado.name;

      const file = new FormData();
      file.append('file', this.arquivoSeleconado);

      this.importService
        .enviarImportacaoXlsx(file)
        .toPromise()
        .then(
          response => {
            this.openSnackBar(response);
            this.dialogRef.close(response);
          },
          (error) => {
            if (error.error[0] === '[') {
              const errorsList = JSON.parse(error.error);
              this.errorsList = errorsList;
            }else {
              this.errorsList.push(error.error);
            }

            this.arquivoSeleconado = null;
            this.inputFileValue = null;
            this.nomeArquivo = '';

            setTimeout(() => {
              this.errorsList = [];
            }, 7000);
          });
    }
  }

  ngOnInit(): void { }

  openSnackBar(message: string): void {
    this.snackBar.open(message, null, {
      duration: 4000,
      verticalPosition: 'top'
    });
  }
}

export const TEMPLATE_IMPORTACAO = {
  caminho: '/assets/templates/teste_admissao.xlsx',
  nome: 'teste_admissao.xlsx'
}