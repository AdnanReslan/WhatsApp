import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { GlopalSitting } from '../../shared/glopalSitting.services';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})

export class NewChatComponent implements OnInit , OnDestroy {
  search = false;
  currentStyles: Record<string, string> = {};
  contacts =  [new User("Firas Tanani","2/4/2020","assets/firas.jpg","assets/firas.jpg"),
               new User("Wasim halbi","4/4/2020","assets/wasim.jpg","assets/wasim.jpg")]

  constructor(private Glopal : GlopalSitting) { }

  ngOnDestroy(): void {
   this.Glopal.mainHeader.next("MainHeader");
  }

  ngOnInit(): void {
    this.setCurrentStyles()
    this.Glopal.mainHeader.next("NewChatHeader");
  }

  onshowmainHeader(){
  this.Glopal.mainHeader.next("MainHeader");
  }

  onSearch(){
    this.search=true;
    this.setCurrentStyles()
  }

  onbackup(){
    this.search=false;
    this.setCurrentStyles()
  }
 
 
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'top' :  this.search ? '70px' : '80px' ,
    };
  }
  
  
  
}
