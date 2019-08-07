import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatSidenavModule, MatToolbarModule,  MatIconModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { VideoService } from './services/videos.service';

//Rutas
import { APP_ROUTING } from './app.routes';



//Servicios



//Componentes
import { VideoCardsComponent } from './components/video-cards/video-cards.component';
import { RoutesComponent } from './src/routes/routes.component';
import { VideoContentComponent } from './components/video-content/video-content.component';


//Angular
import {MatMenuModule} from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent,
    VideoCardsComponent,
    RoutesComponent,
    VideoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    LayoutModule,
    MatButtonModule
    // APP_ROUTING
  ],
  providers: [
    VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
