import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './common/ui/nav-bar/nav-bar.component';
import { FooterComponent } from './common/ui/footer/footer.component';
import { HomeComponent } from './common/ui/home/home.component';
import { RecipesListComponent } from './recipes/recipes-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { DropdownSelectorComponent } from './common/ui/dropdown-selector/dropdown-selector.component';
import { ClickOutsideDirective } from './common/directives/click-outside/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    DropdownSelectorComponent,
    ClickOutsideDirective
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
