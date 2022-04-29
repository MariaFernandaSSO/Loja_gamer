import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLComponent } from './detalhes-l.component';

describe('DetalhesLComponent', () => {
  let component: DetalhesLComponent;
  let fixture: ComponentFixture<DetalhesLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
