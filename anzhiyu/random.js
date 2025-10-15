var posts=["2025/10/14/hello-world/","2025/10/15/我的新博客的第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };