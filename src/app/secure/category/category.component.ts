import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category.service';
import{ToastsManager} from 'ng2-toastr/ng2-toastr';
import { Category } from './category';

@Component({
    selector: 'dashboard-category',
    templateUrl: './category.component.html',
    //providers: [CategoryService]
})

export class CategoryComponent implements OnInit{

    IsAdd:boolean = false;
    IsList:boolean = true;
    header:string = "Category";
    model: any = {};
    categories: Category[];
    constructor(private categoryService:CategoryService, private toastr: ToastsManager){
        
    }
    ngOnInit(){
        this.getAllCategories();
    }
    getAllCategories(){
        this.categoryService.findAll().subscribe((categorises:Category[]) => {
            this.categories = categorises;
        }

        )
    }
    add(){
        
        this.IsAdd = true;
        this.IsList = false;
        this.header = "Add Category";
        this.model = {};
    }
    list(){
        this.IsAdd = false;
        this.IsList = true;
        this.header = "Category";
    }
    addCategory(){
        //alert('add Category');
        this.toastr.success('Successfully added category.', 'Success!');
        this.list();
    }
}
