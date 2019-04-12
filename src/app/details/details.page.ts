import { element } from 'protractor';
import { itemCart } from './../../models/interface-itemCart';
import { Product } from './../../models/interface-products';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  slideOpts = {
    autoplay: true,
    loop: true,
  };

  articledetails: any ;

  constructor(public navCtrl: NavController,
              public articleService: ArticlesService,
              public toastController: ToastController,
              public storage: Storage,
              ) {
   }

  ionViewDidLoad() {
   console.log('ionViewDidLoad DetailsPage');
  }

  ngOnInit() {
    this.articledetails = this.articleService.getlistArticles;
    console.log(this.articleService.getlistArticles);
  }

  addToCart(articledetails: Product): void {
    let added: boolean = false;
    //si le panier est vide
    this.storage.get('cart').then((data: itemCart[]) => {
      if (data === null || data.length === 0) {
        data = [];
        data.push({
          item: articledetails,
          qty: 1,
          amount: articledetails.price,
        });
      }
      else {
        // si le panier n'est pas vide
        for (let i = 0; i < data.length; i++) {
          const element: itemCart = data[i];
          if (articledetails.id === element.item.id) {
            //  le panier n'est pas vide et contient l'article
            element.qty += 1;
            element.amount += articledetails.price;
            added = true;
          }
        }
        if (!added) {
          //  le panier n'est pas vide et ne contient pas l'article
          data.push({
            item: articledetails,
            qty: 1,
            amount: articledetails.price,
          });
        }
      }
      this.storage.set('cart', data)
      .then(async data => {
        const toast = await this.toastController.create({
          message: 'votre panier a été mis à jour',
          duration: 2000,
          showCloseButton: true,
        });
        toast.present();
      })
      .catch(err => {
        console.log('Erreur', err);
      });
    });
  }

  onOpenCart() {
    this.navCtrl.navigateForward(['../cart']);
  }

}
