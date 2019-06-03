import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlobListComponent } from './blob-list/Blob-list.component';
import { BlogsService } from './blogs.service';
import { RouterModule, Routes } from '@angular/router';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';

const appRoutes: Routes = [
  { path: 'admin', component: BlogAdminComponent},
  { path: '', component: BlobListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BlobListComponent,
    BlogAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
