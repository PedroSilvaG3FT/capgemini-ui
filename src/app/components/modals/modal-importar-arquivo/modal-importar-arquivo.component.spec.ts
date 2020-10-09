import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImportarArquivoComponent } from './modal-importar-arquivo.component';

describe('ModalImportarArquivoComponent', () => {
  let component: ModalImportarArquivoComponent;
  let fixture: ComponentFixture<ModalImportarArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImportarArquivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImportarArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
