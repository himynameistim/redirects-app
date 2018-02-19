import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRedirectsComponent } from './upload-redirects.component';

describe('UploadRedirectsComponent', () => {
  let component: UploadRedirectsComponent;
  let fixture: ComponentFixture<UploadRedirectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRedirectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRedirectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
