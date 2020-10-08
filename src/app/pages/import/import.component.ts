import { Component, OnInit } from '@angular/core';
import { TransactionInterface } from 'src/app/interfaces/transaction.interface';
import { ImportService } from 'src/app/services/import.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  public transaction: TransactionInterface = {} as TransactionInterface;
  public importsL: TransactionInterface[] = [];

  public nomeArquivo = '';
  public arquivoSeleconado: File = null;

  constructor(private importService: ImportService) { }

  ngOnInit(): void {
    this.searchImports();
  }

  searchImports(): void {
    this.importService
      .getImportacoes()
      .toPromise()
      .then(response => {
        this.importsL = response;
      });
  }

  selecionaArquivo(files?: FileList): void {
    if (files.item(0)) {
      this.arquivoSeleconado = files.item(0);
      this.nomeArquivo = this.arquivoSeleconado.name;

      const file = new FormData();
      file.append('file', this.arquivoSeleconado);

      this.importService
        .enviarImportacaoXlsx(file)
        .subscribe(response => {
          console.log('RESP :', response);
        });
      console.log('NOME ', this.nomeArquivo);
    }
  }

  get totalValue(): number {
    const TOTAL_VALUE = this.importsL ? this.importsL.reduce((currentValue, item) => {
      return currentValue + item.valorUnitario;
    }, 0) : 0;

    return TOTAL_VALUE;
  }

}
