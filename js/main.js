//import "blog.js";
$(document).ready(function () {
    var blog = new Blog();
    var mynav = new Mynav();
    blog.render();
    mynav.render();
    console.log('blog hull rendered');
});
