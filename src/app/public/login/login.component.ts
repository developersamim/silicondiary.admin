import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  model: any = {};
  constructor(private router: Router){}

}