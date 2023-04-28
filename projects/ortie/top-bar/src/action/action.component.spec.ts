import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ActionComponent} from './action.component';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an icon', () => {
    component.icon = 'ic-ort';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.ic-ort.icon')).nativeElement.innerHTML).toContain(
      'ic-ort',
    );
  });

  it('Should have a label', () => {
    component.label = 'ic-ort';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.label')).nativeElement.innerHTML).toContain(
      'ic-ort',
    );
  });
});
