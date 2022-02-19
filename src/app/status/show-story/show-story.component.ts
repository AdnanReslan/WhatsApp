import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlopalSitting } from 'src/app/shared/glopalSitting.services';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-show-story',
  templateUrl: './show-story.component.html',
  styleUrls: ['./show-story.component.css']
})
export class ShowStoryComponent implements OnInit , OnDestroy {

  constructor(private Glopal : GlopalSitting) { }
  ngOnDestroy(): void {
    this.Glopal.mainHeader.next("MainHeader");
  }

  ngOnInit(): void {
    this.Glopal.mainHeader.next("None");
  }
  i=0;
  story = [new User("Adnan reslan","2/2/2020","assets/self.jpg","assets/self.jpg"),
           new User("Firas Tanani","2/4/2020","assets/firas.jpg","assets/firas.jpg"),
           new User("Wasim halbi","4/4/2020","assets/wasim.jpg","assets/wasim.jpg")]
     onNext(){
     this.i++;
     if(this.i>=this.story.length){
       this.i=0
     }
    
   }
   onPer(){
    this.i--;
    if(this.i<0){
      this.i=this.story.length-1
    }
   }

   getindex(){
     return this.i;
   }
}
