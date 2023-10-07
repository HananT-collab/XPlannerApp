import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
import { ShellComponent } from './Components/shell/shell.component';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { DockModule } from 'primeng/dock';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  // { path: 'here', redirectTo: '/here', pathMatch: 'full' },
  // { path: 'there', redirectTo: '/there', pathMatch: 'full' },
  // { path: '', redirectTo: '/here', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    MenubarModule,
    MegaMenuModule,
    DockModule,
    BrowserAnimationsModule,
    DividerModule,
    SelectButtonModule,
    AvatarModule,
    AvatarGroupModule,
    PanelMenuModule,
    TabViewModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
