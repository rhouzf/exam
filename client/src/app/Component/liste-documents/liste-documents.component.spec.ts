import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDocumentsComponent } from './liste-documents.component';

describe('ListeDocumentsComponent', () => {
  let component: ListeDocumentsComponent;
  let fixture: ComponentFixture<ListeDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDocumentsComponent]
    });
    fixture = TestBed.createComponent(ListeDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
