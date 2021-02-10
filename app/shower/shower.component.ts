import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IPost } from '../post';
import { OnlinepostsService } from '../onlineposts.service';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.scss']
})
export class ShowerComponent implements OnInit {

  //constructor() { }

  public onlineposts: IPost[] = []

  constructor(private postService: OnlinepostsService) { 
    postService.getPosts().subscribe(data => this.onlineposts = data);
    console.log(this.onlineposts)
  
  }



  flag = 1
  panelOpenState = false
  postlist = [{
    "userId": 1,
    "id": 1,
    "title": "This is a test post",
    "body": "This is a test post put here\nThis post is not deletable\nThis is a seven on seven match\nDisqualify Everyone"
  }]

  ngOnInit(): void {
  }

 maxid = 0;

  addpost(title: any,value: any):void{
    
    console.log(title)
    console.log(value)
    // for (var post of this.postlist){
    //   if (post.id>this.maxid){this.maxid = post.id}
    // }
    this.maxid = this.maxid+1
    this.postlist.push({
      "userId": 1,
      "id": this.maxid,
      "title": title,
      "body": value
    })
    this.flag = 1
    
  }

  profileForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

}
