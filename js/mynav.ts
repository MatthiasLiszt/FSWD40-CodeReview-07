
//the navbar
class Mynav{
 public template: string;	
 constructor(){
   this.template=`<nav>
                    <ul class="nav nav-pills">
                    <li >Events</li>
                    <li >Restaurants</li>
                    <li onclick="showPlaces()">Places</li>
                    </ul>
                  </nav>`;
 }
 
 render(){
  $('mynav').append(this.template);	
 }
} 

function showPlaces(){
   console.log('showPlaces selected');
   $('output').remove();
   $('blog').append("<output><div class='row' id='data'></div></output>");
   myData.map(function(e){let place=new Locations(e.name,e.address,e.picture);
                           console.log(e.name);
                           $('#data').append(place.render());

                          });  
 }