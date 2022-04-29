import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPComponent } from './detalhes-p.component';

describe('DetalhesPComponent', () => {
  let component: DetalhesPComponent;
  let fixture: ComponentFixture<DetalhesPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
