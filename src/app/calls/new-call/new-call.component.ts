import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlopalSitting } from 'src/app/shared/glopalSitting.services';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-new-call',
  templateUrl: './new-call.component.html',
  styleUrls: ['./new-call.component.css']
})
export class NewCallComponent implements OnInit , OnDestroy {
   
  constructor(private Glopal : GlopalSitting) { }
  ngOnDestroy(): void {
    this.Glopal.mainHeader.next("MainHeader");
  }

  ngOnInit(): void {
    this.Glopal.mainHeader.next("NewCallHeader");
  }
  onshowmainHeader(){
  this.Glopal.mainHeader.next("MainHeader");
  }
  
  contacts = [
  new User("Firas Tanani","2/4/2020","assets/firas.jpg","assets/firas.jpg"),
  new User("Wasim halbi","4/4/2020","assets/wasim.jpg","assets/wasim.jpg")]
}
