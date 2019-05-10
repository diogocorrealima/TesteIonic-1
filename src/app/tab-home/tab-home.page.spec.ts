import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHomePage } from './tab-home.page';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestService } from '../_services/request.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

describe('TabHomePage', () => {
  let component: TabHomePage;
  let fixture: ComponentFixture<TabHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabHomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [RequestService, SplashScreen]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('call movies', () => {
    expect(component.getMovies).toBeTruthy();
  });
});
