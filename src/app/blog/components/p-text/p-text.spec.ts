import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PText } from './p-text';

describe('PText', () => {
  let component: PText;
  let fixture: ComponentFixture<PText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
