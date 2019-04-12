import { CategoriesService } from './services/categories.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Category } from 'src/models/interface-category';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  categories: Category[];
  public appPages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },

];

  constructor(
    private menu: MenuController,
    public categoriesService: CategoriesService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#4c8dff');
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.categories = this.categoriesService.getlistcategories();
    console.log(this.categoriesService.getlistcategories());
  }

}
