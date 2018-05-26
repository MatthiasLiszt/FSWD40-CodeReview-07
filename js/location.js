var Locations = /** @class */ (function () {
    function Locations(Name, Address, Picture, Created) {
        var title = "x" + Name.replace(/ /g, 'x').replace(/\./g, 'y');
        var Id = title + Math.floor(Math.random() * Math.pow(2, 64)).toString(16);
        this.name = Name;
        this.address = Address;
        this.picture = Picture;
        this.id = Id;
        this.created = Created;
        this.template = "<h3>" + Name + "</h3>\n                 <img src=\"" + Picture + "\"/>\n                 <textarea>" + Address + "</textarea> \n                ";
        this.wrapper = "<div id=\"place" + Id + "\" \n                 class=\"col-lg-3 col-md-6 col-sm-12 place\" onmousedown=\"eraseEntry('" + Id + "','" + Name + "')\">";
    }
    Locations.prototype.render = function () {
        console.log(this.id);
        if (this.created === undefined) {
            return this.wrapper + this.template + '</div>';
        }
        else {
            return this.wrapper + this.template + ("<p>Created: " + this.created + "</p></div>");
        }
    };
    return Locations;
}());
function eraseEntry(Id, name) {
    var msg = "Are you sure you want to erase " + name + " ?";
    if (confirm(msg)) {
        myData.map(function (x) {
            if (x.name == name) {
                x.kind = "delete";
                x.name = "d" + name;
            }
        });
        $("#place" + Id).remove();
    }
}
