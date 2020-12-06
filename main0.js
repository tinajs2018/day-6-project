var clickable=document.querySelectorAll(".clickable");
var length=clickable.length;
for (var i=0; i<length; i++){
    clickable[i].addEventListener("click",function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle('hidden');
    });
}
