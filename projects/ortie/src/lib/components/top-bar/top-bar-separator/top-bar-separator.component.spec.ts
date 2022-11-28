import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopBarSeparatorComponent} from './top-bar-separator.component';

describe('TopBarSeparatorComponent', () => {
  let component: TopBarSeparatorComponent;
  let fixture: ComponentFixture<TopBarSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarSeparatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
