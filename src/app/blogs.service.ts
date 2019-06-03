import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { from, Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private initialBlogs =  [new Blog(
          1,
          "Indra",
          "Lorem ipsum dolor sit amet",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        )];
  private blogList = new BehaviorSubject<Array<Blog>>(this.initialBlogs);

  constructor() {
    if(localStorage.getItem("blogs")){
      this.blogList.next(JSON.parse(localStorage.getItem("blogs")));
    } else {
      localStorage.setItem('blogs',JSON.stringify(this.initialBlogs))
    }

  }

  createBlog(){
  }

  getBlogs(){
    this.initialBlogs = JSON.parse(localStorage.getItem('blogs'));
    let arr = this.blogList.asObservable();
    return arr;
  }

  saveBlog(b){
    //this.initialBlogs.push(b);
    let blogs = JSON.parse(localStorage.getItem('blogs'));
    blogs.push(b);
    console.log(blogs)
    this.blogList.next(blogs)
    this.initialBlogs = blogs;
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }

  removeBlog(bid){
    let blogs = JSON.parse(localStorage.getItem('blogs'));
    blogs.splice(blogs.findIndex(x => x.id === bid), 1);
    localStorage.setItem('blogs', JSON.stringify(blogs))
    this.initialBlogs = blogs;
    this.blogList.next(blogs)
  }
}
