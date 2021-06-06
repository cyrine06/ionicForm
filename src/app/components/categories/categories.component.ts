import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  categories: Category[]=[
    {
      id: 1,
      name: "Politique",
      image: "assets/images/category/women-fashion.jpg"
    },
    {
      id: 2,
      name: "Culture",
      image: "assets/images/category/men-fashion.jpg"
    },
    {
      id: 3,
      name:"Sport",
      image: "assets/images/category/luggage.jpg"
    },
    {
      id: 4,
      name: "Entreprenariat",
      image: "assets/images/category/watches.jpg"
    },
    {
      id: 5,
      name: "Santé",
      image: "assets/images/category/jewelry.jpg"
    },
    {
      id: 6,
      name: "Social",
      image: "assets/images/category/shoes.jpg"
    },
    {
      id: 7,
      name: "Finances",
      image: "assets/images/category/computer.jpg"
    },
    {
      id: 8,
      name: "Education",
      image: "assets/images/category/electronics.jpg"
    },
    {
      id: 9,
      name: "mode",
      image: "assets/images/category/home.jpg"
    },
    {
      id: 10,
      name: "Autre",
      image: "assets/images/category/baby.jpg"
    }
  ];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  //  this.getCategories();
  }

  //getCategories() {
   // this.categories = this.categoryService.categoryList();
  //}

}