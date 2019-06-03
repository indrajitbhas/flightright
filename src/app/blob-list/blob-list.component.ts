import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { Observable } from 'rxjs';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blob-list',
  templateUrl: './blob-list.component.html',
  styleUrls: ['./blob-list.component.css']
})
export class BlobListComponent implements OnInit {
  blist: Array<Blog>;
  editionMode: boolean = false;
  currentBlog: Blog;
  prevBlogBeforeEdition: Blog;

  constructor(bservice: BlogsService) {
    bservice.getBlogs().subscribe(x => this.blist = x)
  }

  editBlog(blog: Blog){
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
    this.currentBlog.writer = this.prevBlogBeforeEdition.writer;
    this.currentBlog.title = this.prevBlogBeforeEdition.title;
    this.currentBlog.body = this.prevBlogBeforeEdition.body;
    this.editionMode = false;
  }

  save(){
    this.editionMode = false;
  }

  ngOnInit() {

  }


}
