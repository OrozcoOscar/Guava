function btnMenu() {
        let menu=document.querySelector(".btn-menu");
        let section=document.querySelectorAll(".section");
        menu.classList.toggle("active");
        for (var i = 0; i < section.length; i++) {
           section[i].classList.toggle("active");
        }      
    }
function inform(m){
    try{
        document.querySelector(".inform").remove();
    }catch(e){}
    $("body").append('<div class="inform"><div class="cont"><p>'+m+'</p></div></div>');
    setTimeout(()=>{
    $(".inform").css({"opacity": "0","transition": "opacity 1.9s ease-in-out"});

},2999);

    $(".inform").css({"display":"flex"});
}
////////////////////---------buttons----------------///////////////
var animateButtonEffect5 =(e)=>{e.preventDefault;e.target.classList.remove('animate');e.target.classList.add('animate');setTimeout(()=>{e.target.classList.remove('animate');},700);};var ButtonEffect5 = document.getElementsByClassName("button-effect-5");for (var i = 0; i < ButtonEffect5.length; i++) {ButtonEffect5[i].addEventListener('click', animateButtonEffect5, false);}
$(".button-effect-8").click((e)=>{console.log(e);$("#"+e.target.offsetParent.id+">.btn-social").toggleClass("btn-social-clicked");})
 $('.button-effect-9').click((e)=>{console.log(e);$("#"+e.currentTarget.id).toggleClass('btn-9-active')});
//-------------------------------------------------------//
if(document.querySelectorAll(".button-effect-8").length>0){
    $("body").append('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="dp-n"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" /><feBlend in="SourceGraphic" in2="goo" /></filter></defs></svg>')

 }
        function effect_pinterest(obj) {
            let cont=document.querySelector(obj.cont);
            let childs=document.querySelectorAll(obj.child);
            for (var i = 0; i < obj.n_colums; i++) {
                cont.innerHTML+='<div class="p-col w-col-'+(12/obj.n_colums)+' h-i"></div>';
            }
            let col=document.querySelectorAll(".p-col");
            let it_c=0;
            for (var e = 0; e < childs.length; e++) {
                    col[it_c].append(childs[e]);
                    document.querySelector(obj.cont+">"+obj.child).remove()
                    it_c++;
                    if(it_c>obj.n_colums-1)it_c=0;
                }
            let min=col[0].offsetHeight,max=col[0].offsetHeight,poMin=0,poMax=0;
            for (var i = 0; i < col.length; i++) {
                if(col[i].offsetHeight>max){
                    max=col[i].offsetHeight;
                    poMax=i;
                }else if(col[i].offsetHeight<min){
                    min=col[i].offsetHeight;
                    poMin=i;
                }
            }
            console.log(max-min)
            if(max-min>200 && min>0){
                let a=col[poMax].children[col[poMax].children.length-1];
                col[poMin].append(a)
            }
            

        }   