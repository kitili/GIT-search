import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleusersComponent } from './sampleusers.component';

describe('SampleusersComponent', () => {
  let component: SampleusersComponent;
  let fixture: ComponentFixture<SampleusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
