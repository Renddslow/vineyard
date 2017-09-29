import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMenuComponent } from './simple-menu.component';

describe('SimpleMenuComponent', () => {
  let component: SimpleMenuComponent;
  let fixture: ComponentFixture<SimpleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
