var clickable=document.querySelectorAll(".clickable");
var length=clickable.length;
for (var i =0; i<length ;i++){
clickable[i].addEventListener("click",function(){
this.classlist.toggle("active");
this.nextElementSibling.classlist.toggle("hidden");

});

}