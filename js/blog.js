//the shell of the app 
var Blog = /** @class */ (function () {
    function Blog() {
        this.template = "<h1>Travel-o-matic Blog</h1>\n                 <mynav></mynav>\n                 <output></output> \n                ";
    }
    Blog.prototype.render = function () {
        $('blog').html(this.template);
    };
    return Blog;
}());
//export {Blog};
