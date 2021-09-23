const vh = document.documentElement.clientHeight 
var height=0;
var body = document.body,
    html = document.documentElement;
var max = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
console
function next(){
    if(height<max){
  window.scrollTo(0,height+=vh);
    console.log("Scrolling")
    }
}
function prev(){
    if(height>=0){
window.scrollTo(0,height-=vh);
    console.log("Scrolling")
    }
    
}