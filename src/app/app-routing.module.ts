import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsComponent } from './calls/calls.component';
import { NewCallComponent } from './calls/new-call/new-call.component';
import { ChatsComponent } from './chats/chats.component';
import { NewChatComponent } from './chats/new-chat/new-chat.component';
import { PrivateChatComponent } from './chats/private-chat/private-chat.component';
import { ShowStoryComponent } from './status/show-story/show-story.component';
import { StatusComponent } from './status/status.component';
import { WriteStatusComponent } from './status/write-status/write-status.component';

const routes: Routes = [
  {path:'',redirectTo:'/Chats',pathMatch:'full'},
  {path:'Chats',component:ChatsComponent},
  {path:'Status',component:StatusComponent},
  {path:'Calls',component:CallsComponent},
  {path:'New chat',component:NewChatComponent},
  {path:'Write story',component:WriteStatusComponent},
  {path:'New call', component:NewCallComponent},
  {path:'Private chat', component:PrivateChatComponent},
  {path:'Show story',component:ShowStoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
