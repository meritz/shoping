import { Injectable } from '@angular/core';
import { Category } from 'src/models/interface-category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  private categories: Category[] = [
    {
      title: 'Vetements',
      description: 'description',
      icon: 'shirt'
    },
    {
      title: 'Electroniques',
      description: 'description',
      icon: 'phone-portrait'
    },
    {
      title: 'mode & Accessoires',
      description: 'description',
      icon: 'bowtie'
    },
    {
      title: 'chaussures',
      description: 'description',
      icon: 'archive'
    },

  ];

  getlistcategories() {
    return this.categories;
  }
  constructor() { }
}
