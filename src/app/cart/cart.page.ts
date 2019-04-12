import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { itemCart } from 'src/models/interface-itemCart';
import { element } from 'protractor';
import { Product } from 'src/models/interface-products';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: itemCart[];
  total: number = 0;

  constructor( public storage: Storage,
               public alertCtrl: AlertController,
               public toastController: ToastController,
              ) { }



  ngOnInit() {
    this.storage.get('cart')
     .then((data: itemCart[]) => {
       this.cartItems = data;
        this.cartItems.forEach(( element: itemCart) => {
          if(element.item.availability.type === 'Disponible en Magasin'){
            element.item.availability.feed = 0;
          }
          this.total += (element.item.availability.feed + element.item.price * element.qty);
        });
     })
     .catch(err => {
       console.log('erreur', err);
     });
  }

  async removeItem(article: itemCart, index: number): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Attention !',
      subHeader: `Etes-vous sur de vouloir retirer ${article.item.title} ?`,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Retirer',
          handler: () => {
           let price: number = article.item.price;
           let qty: number = article.qty;
           let feed: number = article.item.availability.feed;
           let myTotal: number = feed+price*qty;
          //  
          // 
           this.cartItems.splice(index, 1);
            this.storage.set('Cart', this.cartItems)
           .then(async (data) => {
             this.total -= myTotal;
               const toast = await this.toastController.create({
                 message: 'Article retiré du panier',
                 duration: 1000,
                });
               toast.present();
           })
           .catch((error) => {
             console.log('error', error);
          });
          }
        }
      ]
    });
    alert.present();
  }

}
