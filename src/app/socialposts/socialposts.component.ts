import { Component, OnInit, Input } from '@angular/core';

interface PostList{
  title: string,
  thought: string

}

@Component({
  selector: 'app-socialposts',
  templateUrl: './socialposts.component.html',
  styleUrls: ['./socialposts.component.css']
})
export class SocialpostsComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  postList : PostList[] = [
    {
      title : "dog",
      thought : "amefioameiofajefjadaflkw"
    },
    {
     title : "cat",
     thought : "amefiaoemfoeaiefjalsf"

    },
    {
      title : "pig",
      thought : "wafnjewafiefiaeja"
    },
    {
      title : "cow",
      thought : "mefi4nfiajiajwak"
    },
    {
      title : "whale",
      thought : "maefioaejfioajfias"
    }
  ]

  // addPost(){
    // let newPost : PostList = {
    //   title : this.titleInput,
    //   thought : this.thoughtInput,
    // }
    //  this.postList.push(newPost); 
  //   }

  removePost(list){
    console.log(list)
    let indexNumber = this.postList.indexOf(list)
    this.postList.splice(indexNumber, 1);
  }

  post : string;

  addPost = (event) =>{
    this.post = event;
    let post : PostList = {
      title : this.titleInput,
      thought : this.thoughtInput,
    }
     this.postList.push(post); 
    
    console.log(this.post);
  }

  titleInput : string;
  thoughtInput : string;
  

  public show:boolean = false;
  public buttonName:any = 'Show';

  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}

