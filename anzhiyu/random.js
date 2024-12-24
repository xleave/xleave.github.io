var posts=["2023/12/14/Hexo静态博客搭建教程(仅供参考)/","2023/12/13/Markdown语法简述/","2023/12/12/hello-world/","2023/12/17/把onedrive作为图床使用/","2023/12/16/现行更新计划执行表/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };