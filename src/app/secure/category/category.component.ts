import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import{ToastsManager} from 'ng2-toastr/ng2-toastr';
import { Category } from './category';
import{Location} from '@angular/common';

@Component({
    selector: 'dashboard-category',
    templateUrl: './category.component.html',
    //providers: [CategoryService]
})

export class CategoryComponent implements OnInit{

    model: any = {};
    categories: Category[];
    allChildrenName: string[];
    constructor(private categoryService:CategoryService, 
        private toastr: ToastsManager,
        private location: Location){
        
    }
    ngOnInit(){
        this.getAllCategories();
    }
    getAllCategories(): void{
        this.categoryService.getAll().subscribe((categorises:Category[]) => {
            this.categories = categorises;
            this.setNameOfAllChildren();
        })
    }

    setNameOfAllChildren(){
        for(let x = 0; x < this.categories.length; x++){
            if(this.categories[x].children != null){
                this.categories[x].nameOfAllChildren = this.getNameOfAllChildren(this.categories[x]);
            }
        }
    }    

    getNameOfAllChildren(category: Category): string{
        var str: any = '';
        console.log('this: ' + this);
        if(category.children != null){
            category.children.forEach((obj, index) =>{               
                str += this.jsUcfirst(obj.name);
            
                if(index + 1 != category.children.length)
                    str += ', ';
            });
        }
        return str;
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
