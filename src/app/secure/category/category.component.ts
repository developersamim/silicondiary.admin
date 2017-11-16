import {Component} from '@angular/core';
import {CategoryService} from './category.service';
import{ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'dashboard-category',
    templateUrl: './category.component.html',
    //providers: [CategoryService]
})

export class CategoryComponent{

    IsAdd:boolean = false;
    IsList:boolean = true;
    header:string = "Category";
    model: any = {};
    constructor(private cs:CategoryService, private toastr: ToastsManager){

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