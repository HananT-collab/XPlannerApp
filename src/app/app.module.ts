import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
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
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { StyleClassModule } from 'primeng/styleclass';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { PickListModule } from 'primeng/picklist';
import { AccordionModule } from 'primeng/accordion';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { ShellComponent } from './Components/Shell/shell.component';
import { ContextMenuModule } from 'primeng/contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartCanvasComponent } from './Components/smart-canvas/smart-canvas.component';
import { ProductCatalogComponent } from './Components/product-catalog/product-catalog.component';


const appRoutes: Routes = [
  // { path: 'here', redirectTo: '/here', pathMatch: 'full' },
  // { path: 'there', redirectTo: '/there', pathMatch: 'full' },
  // { path: '', redirectTo: '/here', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    SmartCanvasComponent,
    ProductCatalogComponent
  ],
  imports: [
    // RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
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
    TabViewModule,
    FormsModule,
    DialogModule,
    TableModule,
    TagModule,
    RatingModule,
    StyleClassModule,
    CardModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    PickListModule,
    AccordionModule,
    ListboxModule,
    MenuModule,
    ContextMenuModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
