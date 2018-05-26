class Events extends Locations{
 public time: string;
 public price: string;
 public weburl: string;	
 public xTemplate: string;

 constructor(Name,Address,Picture,Created,Time,Price,WebUrl){
  super(Name,Address,Picture,Created);	
  this.time=Time;
  this.price=Price;
  this.weburl=WebUrl;
  this.xTemplate=`<div class="moreInfo">
                  <p><span>${Time}</span></p>
                  <p>${Price}</p>
                  <p><a href="https://${WebUrl}">${WebUrl}</p> 
                  </div>`;
 }

 render(){
  if(this.created===undefined) 
   {return this.wrapper+this.template+this.xTemplate+'</div>';}
  else   
   {return this.wrapper+this.template+`<p>Created: ${this.created}</p>`+this.xTemplate+'</div>';} 
 }
 
}