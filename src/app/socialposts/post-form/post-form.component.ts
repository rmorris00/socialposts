import { Input, Component, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent{
  @Input() postList : PostList[];
  @Output() add = new EventEmitter<any>(); 
 addMethod = () => { 
   this.add.emit((this.titleInput)+"\n"+(this.thoughtInput));
  //  addPost();

  
   

 //instance of the scan property, calling its emit method passing in a preloaded string 
 }

 
 titleInput : string;
 thoughtInput : string;
 
 public show1:boolean = true;
 public buttonName:any = 'Show1';

 toggle() {
   this.show1 = !this.show1;

   // CHANGE THE NAME OF THE BUTTON.
   if(this.show1)  
     this.buttonName = "Hide1";
   else
     this.buttonName = "Show1";
 }
 
 }