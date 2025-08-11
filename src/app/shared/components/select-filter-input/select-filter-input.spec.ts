import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFilterInput } from './select-filter-input';

describe('SelectFilterInput', () => {
  let component: SelectFilterInput;
  let fixture: ComponentFixture<SelectFilterInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFilterInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFilterInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
