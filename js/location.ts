
class Locations{
 public name: string;	
 public address: string;	
 public picture: string;
 public id: string;
 public template: string;
 public wrapper: string;
 public created: string;

 constructor(Name,Address,Picture,Created){
  let title="x"+Name.replace(/ /g,'x').replace(/\./g,'y');
  let Id=title+Math.floor(Math.random()*Math.pow(2,64)).toString(16);	
  this.name=Name;
  this.address=Address;	
  this.picture=Picture;
  this.id=Id; 
  this.created=Created;
  this.template=`<h3>${Name}</h3>
                 <img src="${Picture}"/>
                 <textarea>${Address}</textarea> 
                `;
  this.wrapper=`<div id="place${Id}" 
                 class="col-lg-3 col-md-6 col-sm-12 place" onmousedown="eraseEntry('${Id}','${Name}')">`;              
 }
 render(){
  console.log(this.id);
  if(this.created===undefined)
   {return this.wrapper+this.template+'</div>';}
  else
   {return this.wrapper+this.template+`<p>Created: ${this.created}</p></div>`;} 	
 }
}

function eraseEntry(Id,name){
 let msg="Are you sure you want to erase "+name+" ?";
 
 if(confirm(msg)) 
  {myData.map(function(x){if(x.name==name)
                           {x.kind="delete";x.name="d"+name;}                         
                         });
   $("#place"+Id).remove();
  } 
}