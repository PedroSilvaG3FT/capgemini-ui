import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImportacaoInterface } from 'src/app/interfaces/transaction.interface';
import { ImportService } from 'src/app/services/import.service';

@Component({
  selector: 'app-modal-importar-arquivo',
  templateUrl: './modal-importacao.component.html',
  styleUrls: ['./modal-importacao.component.scss']
})
export class ModalImportacaoComponent implements OnInit {
  public importacao: ImportacaoInterface = {} as ImportacaoInterface;

  constructor(
    private importService: ImportService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModalImportacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log('data :', this.data);
    this.obterImportacao();
  }

  obterImportacao(): void {
    this.importService
      .getImportacao(this.data)
      .subscribe(
        response => this.importacao = response,
        error => {
          this.openSnackBar(error.error);
          this.closeModal();
        }
      );
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, null, {
      duration: 4000,
      verticalPosition: 'top'
    });
  }
}
