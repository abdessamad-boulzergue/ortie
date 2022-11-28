import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TopBarComponent} from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should add "with-top-bar" to body when created', () => {
    expect(document.body).toHaveClass('with-top-bar');
  });
  it('#_getActionTemplateRef should return undefined if there is no actiontemplate with the provided name', () => {
    expect(component._getActionTemplateRef('doesnotexist')).toBeUndefined();
  });

  it('#_getActionTemplateRef should return undefined if there is no actiontemplate with the provided name', () => {
    component._actionRefs.reset([
      {
        templateRef: 1 as any,
        topBarAction: 'test',
      },
    ]);
    expect(component._getActionTemplateRef('test')).toBeDefined();
  });

  it('#_getActionTemplateRef should return the element with topBarAction="" or null if exists and the provided actionRef does not exist.', () => {
    component._actionRefs.reset([
      {
        templateRef: 1 as any,
        topBarAction: '',
      },
    ]);
    expect(component._getActionTemplateRef('test')).toBeDefined();
  });

  it('#_getActionTemplateRef should return undefined when actionRef does not exist.', () => {
    component._actionRefs.reset([
      {
        templateRef: 1 as any,
        topBarAction: 'test',
      },
    ]);
    expect(component._getActionTemplateRef('testnotexists')).toBeUndefined();
  });
});
