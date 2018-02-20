console.log('Loaded!');
var element = document.getElementById('maintext');
element.innerHTML='new value';
var pic=document.getElementById("picd");
pic.onClick = function (){
    alert("you clicked");
    pic.style.marginLeft='60px';
}

