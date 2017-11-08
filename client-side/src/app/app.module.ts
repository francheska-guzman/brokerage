import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Header
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';

// Pages
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavigationComponent,
    HomeComponent,
    NewsComponent,
    PortfolioComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // For debugging purposes only.
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
