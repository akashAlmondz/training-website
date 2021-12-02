import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBlogsComponent } from './open-blogs.component';

describe('OpenBlogsComponent', () => {
  let component: OpenBlogsComponent;
  let fixture: ComponentFixture<OpenBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
