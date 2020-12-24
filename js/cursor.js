var mouseX=window.innerWidth/2,
    mouseY=window.innerHeight/2;
var circle = {
     el:$('#kenWasHereCircle'),
     x:window.innerWidth/2,
     y:window.innerHeight/2,
     w:80,
     h:80,
     update:function(){
       l = this.x-this.w/2;
       t = this.y-this.h/2;
       this.el.css({
         'top': (this.y-this.w/2)+'px',
         'left': (this.x-this.w/2)+'px',
         // 'transform': 'translate3d('+l+'px,'+t+'px, 0)'
       });
     }
}
$(window).mousemove (function(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
})
setInterval (move,0.1)
function move(){
  // circle.x = lerp(circle.x, mouseX, 0.1);console.log(circle);
  // circle.y = lerp(circle.y, mouseY, 0.1);
  circle.x = mouseX
  circle.y = mouseY
  circle.update()
}
function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}
