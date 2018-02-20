console.log('Loaded!');
var element = document.getElementById('maintext');
element.innerHTML='new value';
var pic=document.getElementById('pic');
pic.onClick = function (){
    pic.style.marginLeft='100px';
}

