import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserComponent} from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.firstname = 'firstname';
    component.lastname = 'lastname';
    fixture.detectChanges();
  });

  it('#_getName when firstname and lastname are both truthy it should return both of them concatenated', () => {
    expect(component._getName()).toEqual('firstname lastname');
  });
  it('#_getName when firstname is defined and lastname is undefined return firstname', () => {
    component.lastname = undefined;
    expect(component._getName()).toEqual('firstname');
  });
  it('#_getName when firstname is undefined and lastname is defined return lastname', () => {
    component.firstname = undefined;
    expect(component._getName()).toEqual('lastname');
  });
  it('#_getName should return undefined when firstname and lastname are undefined', () => {
    component.firstname = undefined;
    component.lastname = undefined;
    expect(component._getName()).toBeUndefined();
  });

  it('#_getAvatar when firstname and lastname are both truthy it should return first letter of each concatenated', () => {
    expect(component._getAvatar()).toEqual('FL');
  });
  it('#_getAvatar when firstname is defined and lastname is undefined return first char of firstname', () => {
    component.lastname = undefined;
    expect(component._getAvatar()).toEqual('F');
  });
  it('#_getAvatar when firstname is undefined and lastname is defined return first char of lastname', () => {
    component.firstname = undefined;
    expect(component._getAvatar()).toEqual('L');
  });
  it('#_getName should return undefined when firstname and lastname are undefined', () => {
    component.firstname = undefined;
    component.lastname = undefined;
    expect(component._getAvatar()).toEqual('NO');
  });
});
