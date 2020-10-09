import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImportacaoComponent } from './modal-importacao.component';

describe('ModalImportacaoComponent', () => {
  let component: ModalImportacaoComponent;
  let fixture: ComponentFixture<ModalImportacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImportacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImportacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
