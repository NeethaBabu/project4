import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtformPagesComponent } from './artform-pages.component';

describe('ArtformPagesComponent', () => {
  let component: ArtformPagesComponent;
  let fixture: ComponentFixture<ArtformPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtformPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtformPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
