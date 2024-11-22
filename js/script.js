var butaction =document.getElementById("buttact");
var divtext = document.querySelector(".popandtool")  ;
var divtext2 = document.querySelector(".popandtool2")  ;
butaction.addEventListener("mousemove" ,function() {
    divtext.style.display = "block";
    divtext.innerHTML = " ابحث عن رحلتك " });
    butaction.addEventListener("click" , function() {
        divtext.style.display = "none";
        divtext2.style.display = "block";
        divtext2.innerHTML = " جاري البحث " }); 
var butaction2 =document.getElementById("buttact2");
var div2text = document.querySelector(".pop2andtool2")  ;
var div2text2 = document.querySelector(".popand2tool2")  ;
butaction2.addEventListener("mousemove" ,function() {
    div2text.style.display = "block";
    div2text.innerHTML = " ابحث عن رحلتك " });
    butaction2.addEventListener("click" , function() {
        div2text.style.display = "none";
        div2text2.style.display = "block";
        div2text2.innerHTML = " جاري البحث " }); 
      
        var butaction3 =document.getElementById("buttact3");
        var div3text = document.querySelector(".popandtool3")  ;
        var div3text2 = document.querySelector(".popand3tool2")  ;
        butaction3.addEventListener("mousemove" ,function() {
            div3text.style.display = "block";
            div3text.innerHTML = " ابحث عن رحلتك " });
            butaction3.addEventListener("click" , function() {
                div3text.style.display = "none";
                div3text2.style.display = "block";
                div3text2.innerHTML = " جاري البحث " });
        
    var clositem =document.querySelector(".closdiv")   
    clositem.addEventListener("click",function(){
        divtext2.style.display = "none";
        div3text2.style.display = "none";
        div2text2.style.display = "none";
    })                
