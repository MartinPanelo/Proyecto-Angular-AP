import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivosComponent } from './colectivos.component';

describe('ColectivosComponent', () => {
  let component: ColectivosComponent;
  let fixture: ComponentFixture<ColectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
