import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Observable } from 'rxjs';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent implements OnInit {
  blist: Array<Blog>;
  bservice;
  editionMode: boolean = false;
  currentBlog: Blog;
  prevBlogBeforeEdition: Blog;
  showCreateBlog: boolean = true;
  newBlog: Blog;
  creatingBlog = true;

  constructor(bservice: BlogsService) {
    this.bservice = bservice;
    bservice.getBlogs().subscribe(x => this.blist = x)
  }

  ngOnInit() {
  }

  editBlog(blog: Blog){
    //this.currentBlog.
    this.showCreateBlog = false;
    this.editionMode = true;
    this.currentBlog = blog;
    this.prevBlogBeforeEdition = new Blog(
            0,
            this.currentBlog.writer,
            this.currentBlog.title,
            this.currentBlog.body
          )
  }

  cancel(){
    if(!this.creatingBlog){
      this.currentBlog.writer = this.prevBlogBeforeEdition.writer;
      this.currentBlog.title = this.prevBlogBeforeEdition.title;
      this.currentBlog.body = this.prevBlogBeforeEdition.body;
    }
    this.editionMode = false;
    this.showCreateBlog = true;
    this.creatingBlog = false;
  }

  remove(bid){
    console.log(bid)
    this.bservice.removeBlog(bid);
  }

  createBlog(e){
    e.preventDefault();
    this.editionMode = true;
    this.showCreateBlog = false;
    this.currentBlog = new Blog(0,'','','');
    this.creatingBlog = true;
  }

  save(){
    if(this.creatingBlog){
      this.showCreateBlog = true;
      this.bservice.saveBlog(this.currentBlog);
      this.editionMode = false;
    } else {
      this.editionMode = false;
      this.showCreateBlog = true;
    }
    this.creatingBlog = false;
  }

}
