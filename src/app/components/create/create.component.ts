import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
public postForm:FormGroup

  constructor (
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.postForm = this.formBuilder.group({
      title: [''],
      content: [''],
      author: [''],
    })
   }

  ngOnInit(): void {
      
  }

  onSubmit (){
    this.postService.cratePost(this.postForm.value)
    this.router.navigate([''])
  }

}
