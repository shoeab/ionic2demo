import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { PostListPage } from '../pages/post-list/post-list';
import { PostInfoPage } from '../pages/post-info/post-info';
import { MovieService } from '../pages/service/movie-service';

@NgModule({
  declarations: [
    MyApp,
    MovieListPage,
    MovieInfoPage,
    PostListPage,
    PostInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostListPage,
    PostInfoPage,
    MovieListPage,
	MovieInfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
