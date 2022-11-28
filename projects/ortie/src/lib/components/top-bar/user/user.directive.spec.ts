import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TopBarUserDirective} from './user.directive';

describe('TopBarUserDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, TopBarUserDirective],
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
    <ng-template topBarUser></ng-template>
  `,
})
class TestComponent {
  @ViewChild(TemplateRef, {static: true}) template!: TemplateRef<TopBarUserDirective>;
}
