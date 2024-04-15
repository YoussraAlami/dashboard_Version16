import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTestComponent } from './tree-test.component';

describe('TreeTestComponent', () => {
  let component: TreeTestComponent;
  let fixture: ComponentFixture<TreeTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeTestComponent]
    });
    fixture = TestBed.createComponent(TreeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
