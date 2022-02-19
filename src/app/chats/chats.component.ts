import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlopalSitting } from '../shared/glopalSitting.services';
import { User } from '../shared/user';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit , OnDestroy {

  constructor(private Glopal : GlopalSitting) { }
  ngOnDestroy(): void {
    this.Glopal.mainHeader.next("MainHeader");
  }
  hight !:number;
  ngOnInit(): void {
  
  }
  chats = [new User("Firas Tanani","2/4/2020","assets/firas.jpg","assets/firas.jpg"),
  new User("Wasim halbi","4/4/2020","assets/wasim.jpg","assets/wasim.jpg")]
  showNewChatHeader(){
    this.Glopal.mainHeader.next("NewChatHeader");
  }

}
