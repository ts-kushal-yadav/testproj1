import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
  styleUrls: ['./shower.component.scss']
})
export class ShowerComponent implements OnInit {

  constructor() { }

  flag = 1
  panelOpenState = false
  postlist = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
  ]

  ngOnInit(): void {
  }

 maxid = 0;

  addpost(title: any,value: any):void{
    
    console.log(title)
    console.log(value)
    for (var post of this.postlist){
      if (post.id>this.maxid){this.maxid = post.id}
    }
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
