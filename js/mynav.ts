
//the navbar
class Mynav{
 public template: string;	
 constructor(){
   this.template=`<nav>
                    <ul class="nav nav-pills">
                    <li ><button>Events</button></li>
                    <li ><button onclick="showPlaces()">Places</button></li>
                    <li class="dropdown">
                    <button class="dropdown-toggle" id="Restaurants" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="true">Restaurants</button>
                    <div class="dropdown-menu" aria-labelledby="Restaurants">
                         <p onclick="showRestaurants('all')">all</p>
                         <p onclick="showRestaurants('Asian')">Asian</p>
                         <p onclick="showRestaurants('Viennesse')">Viennesse</p>
                         <p onclick="showRestaurants('Italian')">Italian</p>
                    </div>          
                    </li>
                   
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
   myData.map(function(e){if(e.kind=="place")
                           {let place=new Locations(e.name,e.address,e.picture);
                            console.log(e.name);
                            $('#data').append(place.render());
                           }
                          });  
 }

function showRestaurants(restrict: string){
   console.log('showRestaurants selected');
   $('output').remove();
   $('blog').append("<output><div class='row' id='data'></div></output>");
   myData.map(function(e){let Filter: boolean;
                          if(restrict=="all"){Filter=true;}
                           else{Filter=(e.category==restrict);}
                          if((e.kind=="restaurant")&&Filter)
                           {let place=new Restaurants(e.name,e.address,e.picture,e.phone,e.category,e.weburl);
                            console.log(e.name);
                            $('#data').append(place.render());
                           }
                          });  
  if($('#data').html()==""){$('output').text('currently nothing matching found');} 
 } 

