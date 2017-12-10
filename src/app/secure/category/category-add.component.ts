import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Category} from './category';
import{Router} from '@angular/router';
import{Location} from '@angular/common';

@Component({
    selector: 'dashboard-category-add',
    templateUrl: './category-add.component.html'
})

export class CategoryAddComponent implements OnInit{
    model: any={};
    categories: Category[];
    constructor(private categoryService: CategoryService,
                private toastr: ToastsManager,
                private location: Location){}
    ngOnInit(){
        this.getAllCategories();
    }

    addCategory(){
        this.categoryService.addCategory(this.model.name, this.model.parent).subscribe(response => {
            debugger;
            if(response.status == 200){
                this.toastr.success('Successfully added category.', 'Success!');
                this.goBack();
            }
            else{
                this.toastr.error('Some errro.', 'Error!');
            }
          });
        

    }
    getAllCategories(){
        this.categoryService.getAll()
            .subscribe(categories => this.categories = categories);
    }

    jsUcfirst(string): string
    {
        if(!string) return null;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    goBack(){
        this.location.back();
    }
}