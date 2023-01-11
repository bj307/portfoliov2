import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudosComponent } from './conteudos.component';

describe('ConteudosComponent', () => {
  let component: ConteudosComponent;
  let fixture: ComponentFixture<ConteudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
