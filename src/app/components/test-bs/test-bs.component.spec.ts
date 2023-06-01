import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBsComponent } from './test-bs.component';

describe('TestBsComponent', () => {
  let component: TestBsComponent;
  let fixture: ComponentFixture<TestBsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
