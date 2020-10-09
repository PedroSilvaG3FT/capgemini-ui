import { Component, OnInit } from '@angular/core';
import { ImportacaoInterface } from 'src/app/interfaces/transaction.interface';
import { ImportService } from 'src/app/services/import.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalImportarArquivoComponent } from 'src/app/components/modals/modal-importar-arquivo/modal-importar-arquivo.component';
import { ModalImportacaoComponent } from 'src/app/components/modals/modal-importacao/modal-importacao.component';
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  public transaction: ImportacaoInterface = {} as ImportacaoInterface;
  public importsL: ImportacaoInterface[] = [];


  constructor(
    private importService: ImportService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.buscaImportacoes();
  }

  buscaImportacoes(): void {
    this.importService
      .getImportacoes()
      .toPromise()
      .then(response => {
        this.importsL = response;
      });
  }

  get valorTotal(): number {
    const TOTAL_VALUE = this.importsL ? this.importsL.reduce((currentValue, item) => {
      return currentValue + item.valorUnitario;
    }, 0) : 0;

    return TOTAL_VALUE;
  }

  openModalImportarArquivo(): void {
    this.dialog
      .open(ModalImportarArquivoComponent)
      .afterClosed()
      .subscribe(() => this.buscaImportacoes());
  }

  openModalImportacao(id: number): void {
    this.dialog
      .open(ModalImportacaoComponent, { data: id })
      .afterClosed()
      .subscribe(() => this.buscaImportacoes());
  }

}
