import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TopBarActionDirective} from './action.directive';

describe('TopBarActionDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, TopBarActionDirective],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Should be created and injected', () => {
    expect(component.template).toBeTruthy();
  });
});

@Component({
  template: `
    <ng-template topBarAction></ng-template>
  `,
})
class TestComponent {
  @ViewChild(TemplateRef, {static: true}) template!: TemplateRef<TopBarActionDirective>;
}
