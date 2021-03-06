import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from './services/book.service';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpModule } from '@angular/http';
import { AddPostComponent } from './add-post/add-post.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PostListComponent,
    AddPostComponent,
    BookListComponent,
    AddBookComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'post', component: PostListComponent },
      { path: 'post/new', component: AddPostComponent },
      { path: 'post/:id', component: AddPostComponent },
      { path: 'books', component: BookListComponent },
      { path: 'book/new', component: AddBookComponent }
      { path: 'hero/new', component: HeroFormComponent }
    ])
  ],
  providers: [
    PostService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
