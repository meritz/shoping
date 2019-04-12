import { Injectable } from '@angular/core';
import { Product } from 'src/models/interface-products';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private Articles: Product[] = [
    {title: 'television',
    description: 'ipsum ',
    price: 4415,
    category: 'vetements',
    createdAt: new Date(),
    state: 'Neuf',
    city: 'londres',
    id: '1',
    averageStar: 5,
    availability: {
      available: true,
      type: 'livraison',
      feed: 17
    },
  pictures: [
    '../../assets/imgs/Product1/1.jpg',
    '../../assets/imgs/Product1/2.jpg',
    '../../assets/imgs/Product1/3.webp',
    '../../assets/imgs/Product1/4.jpg',
    ]},
    {title: 'chaussure',
    description: 'ipsum ',
    price: 265,
    category: 'Electroniques',
    createdAt: new Date(),
    state: 'Neuf',
    city: 'londres',
    id: '2',
    averageStar: 1,
    availability: {
      available: true,
      type: 'livraison',
      feed: 11
    },
  pictures: [
    '../../assets/imgs/Product2/1.jpg',
    '../../assets/imgs/Product2/2.jpg',
    '../../assets/imgs/Product2/3.jpg',
    '../../assets/imgs/Product2/4.jpg',
    ]},
    {title: 'dame',
  description: 'ipsum ',
  price: 485,
  category: 'Accessoires',
  createdAt: new Date(),
  state: 'Neuf',
  city: 'londres',
  id: '3',
  averageStar: 3,
  availability: {
    available: true,
    type: 'livraison',
    feed: 1
  },
  pictures: [
  '../../assets/imgs/Product3/1.jpg',
  '../../assets/imgs/Product3/2.jpg',
  '../../assets/imgs/Product3/3.jpg',
  '../../assets/imgs/Product3/4.jpg',
    ]},
    {title: 'homme',
  description: 'ipsum ',
  price: 445,
  category: 'chaussures',
  createdAt: new Date(),
  state: 'Neuf',
  city: 'londres',
  id: '4',
  averageStar: 4,
  availability: {
    available: false,
    type: 'livraison',
    feed: 10
  },
  pictures: [
  '../../assets/imgs/Product4/1.jpg',
  '../../assets/imgs/Product4/2.jpg',
  '../../assets/imgs/Product4/3.jpg',
    ]},
  ];

  getlistArticles() {
    return this.Articles;
  }

  constructor() { }
}
