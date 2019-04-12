import { ArticlesService } from './../services/articles.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product } from 'src/models/interface-products';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ArticlesListe: Product[];

  constructor(public navCtrl: NavController, public articleService: ArticlesService ){

  }
  // showData(article: any): void {
  //   console.log(article, 'article is');
  // }

  showDetails(article: any): void {
    this.navCtrl.navigateForward(['../details']);
    this.articleService.getlistArticles = article;
    console.log(article, 'article is');
  }

  ngOnInit() {
    this.ArticlesListe = this.articleService.getlistArticles();
    console.log(this.articleService.getlistArticles());
  }


  onOpenCart() {
    this.navCtrl.navigateForward(['../cart']);
  }

}
