import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  //  this.getCategories();
  }

  //getCategories() {
   // this.categories = this.categoryService.categoryList();
  //}

}
