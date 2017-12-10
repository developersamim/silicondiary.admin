import {Component, OnInit, Input} from '@angular/core';
import {CategoryService} from './category.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import { Category } from './category';
import { Subscription } from 'rxjs/Subscription';
import { Params } from '@angular/router/src/shared';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'dashboard-category-update',
    templateUrl: './categoryupdate.component.html'
})

export class CategoryUpdateComponent implements OnInit{

    //@Input() categoryUpdateId: number;
    category: Category;
    private route$: Subscription;
    constructor(private categoryService: CategoryService, 
        private route: ActivatedRoute,
        private location: Location,
        private toastr: ToastsManager){}

    ngOnInit(){
        this.route$ = this.route.params.subscribe((params: Params) =>{
            let id = params["id"];

            this.getCategory(id);
        })

        
    }

    getCategory(id: number){
        this.categoryService.getById(id).subscribe((category:Category) => {
            this.category = category;
        });
    }

    updateCategory(){
        this.categoryService.updateCategory(this.category.id, this.category.name)
            .subscribe((response) =>{
                if(response == null){
                    this.toastr.success('Successfully updated category.', 'Success!');
                    this.goBack();
                }else{
                    this.toastr.error('Error while updating', 'Error!')
                }
            });
    }

    goBack(){
        this.location.back();
    }
}