
//the navbar
class Mynav{
 public template: string;	
 constructor(){
   this.template=`<nav>
                    <ul class="nav nav-pills">
                    <li ><button onclick="showEvents()">Events</button></li>
                    <li ><button onclick="showPlaces()">Places</button></li>
                    <li class="dropdown">
                    <button class="dropdown-toggle" id="Restaurants" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="true">Restaurants</button>
                    <div class="dropdown-menu" aria-labelledby="Restaurants">
                         <p onclick="showRestaurants('all')">all</p>
                         <p onclick="showRestaurants('Asian')">Asian</p>
                         <p onclick="showRestaurants('Viennesse')">Viennesse</p>
                         <p onclick="showRestaurants('Italian')">Italian</p>
                         <p onclick="showRestaurants('Indian')">Indian</p>
                    </div>          
                    </li>
                    <li class="dropdown">
                    <button class="dropdown-toggle" id="More" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="true">&equiv;</button>
                    <div class="dropdown-menu" aria-labelledby="More">
                         <p onclick="addEntry()">Add Entry</p>
                         <p onclick="saveData()">Save</p>
                         <p onclick="loadData()">Load</p>
                         
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
                            {let place=new Locations(e.name,e.address,e.picture,e.created);
                              console.log(e.name);
                              $('#data').append(place.render());  
                            }
                          });  
   if($('#data').html()==""){$('output').text('currently nothing matching found');} 
 }

function showRestaurants(restrict: string){
   console.log('showRestaurants selected');
   $('output').remove();
   $('blog').append("<output><div class='row' id='data'></div></output>");
   myData.map(function(e){let Filter: boolean;
                          if(restrict=="all"){Filter=true;}
                           else{Filter=(e.category==restrict);}
                          if((e.kind=="restaurant")&&Filter)
                           {let place=new Restaurants(e.name,e.address,e.picture,e.created,e.phone,e.category,e.weburl);
                            console.log(e.name);
                            $('#data').append(place.render());
                           }
                          });  
   if($('#data').html()==""){$('output').text('currently nothing matching found');} 
 } 

function showEvents(){
   console.log('showEvents selected');
   $('output').remove();
   $('blog').append("<output><div class='row' id='data'></div></output>");
   myData.map(function(e){if(e.kind=="event")
                           {let place=new Events(e.name,e.address,e.picture,e.created,e.date,e.price,e.weburl);
                            console.log(e.name);
                            $('#data').append(place.render());
                           }
                          });  
 if($('#data').html()==""){$('output').text('currently nothing matching found');} 
}

function addEntry(){
 let template=`<h2>Add Entry Form</h2>
               <p><select>
                 <option value="place">Place</option>
                 <option value="event">Event</option>
                 <option value="restaurant">Restaurant</option>
               </select></p>
               <p><input type="text" placeholder="Name"/></p>
               <p><input type="text" placeholder="Address"/></p>
               <p><span>Image : <input type="file" style="display:inline;"/></span></p>
               <div id="AdditionalInfo"></div>
               <p><input type="text" value="${Date().toString()}"/></p>
               <p><button onclick="addEntryData()">Add</button></p>
              `;
 $('output').remove();
 $('blog').append("<output><div id='addEntryForm'></div></output>");
 $('#addEntryForm').append(template); 
}

function addEntryData(){
 alert("data not added"); 
}

function saveData(){
 console.log('data saved'); 
 localStorage.setItem('travelomaticblog',JSON.stringify(myData));
 $('output').text('data has been saved'); 
}

function loadData(){
 let cat=localStorage.getItem('travelomaticblog');
 if(cat===undefined)
  {$('output').text('stored data could not be found');} 
 else
  {myData=JSON.parse(cat);
   $('output').text('stored data has been loaded');
   console.log('data loaded');
  } 
}

