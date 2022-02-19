import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlopalSitting } from '../shared/glopalSitting.services';
import { User } from '../shared/user';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit , OnDestroy{

   viewedStory=[];
   
   unViewedStory = [new User("Adnan reslan","2/2/2020","assets/self.jpg","assets/self.jpg"),
           new User("Firas Tanani","2/4/2020","assets/firas.jpg","assets/firas.jpg"),
           new User("Wasim halbi","4/4/2020","assets/wasim.jpg","assets/wasim.jpg")]
  constructor(private Glopal : GlopalSitting) { }
  ngOnDestroy(): void {
    this.Glopal.mainHeader.next("MainHeader");
  }
   
  ngOnInit(): void {
  
  }

  hideAllNav(){
  this.Glopal.mainHeader.next("None");
  }
}
