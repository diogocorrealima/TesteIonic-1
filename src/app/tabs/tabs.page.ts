import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/theme/theme.service';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#221F1F',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#f5f5f1',
    secondary: '#f5f5f1',
    tertiary: '#f5f5f1',
    medium: '#f5f5f1',
    dark: '#f5f5f1',
    light: '#221F1F'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  ngOnInit(): void {
    this.changeTheme('night');
  }
  constructor(private theme: ThemeService) {}

  changeTheme(name) {
      this.theme.setTheme(themes[name]);
  }

  changeSpeed(val) {
    this.theme.setVariable('--speed', `${val}ms`);
  }
}
