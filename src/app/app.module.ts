import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ChatsComponent } from './chats/chats.component';
import { StatusComponent } from './status/status.component';
import { CallsComponent } from './calls/calls.component';
import { NewChatComponent } from './chats/new-chat/new-chat.component';
import { GlopalSitting } from './shared/glopalSitting.services';
import { WriteStatusComponent } from './status/write-status/write-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCallComponent } from './calls/new-call/new-call.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { PrivateChatComponent } from './chats/private-chat/private-chat.component';
import { ShowStoryComponent } from './status/show-story/show-story.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatsComponent,
    StatusComponent,
    CallsComponent,
    NewChatComponent,
    WriteStatusComponent,
    NewCallComponent,
    PrivateChatComponent,
    ShowStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [GlopalSitting],
  bootstrap: [AppComponent]
})
export class AppModule { }
