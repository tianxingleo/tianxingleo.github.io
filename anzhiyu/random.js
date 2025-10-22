var posts=["2025/10/15/我的新博客的第一篇文章/","2025/10/22/关于回文质数筛选的优化路径/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };