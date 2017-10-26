/*
* @Author: Administrator
* @Date:   2017-08-15 15:50:25
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-10-26 16:04:50
*/
function render(data) {
    var liTemp = '';
    var ulTemp = '';
    for( var i=data.length-1 ; i>-1 ;i-- ){
        liTemp = '';
        for( var j=0 ; j<data[i].link.length ; j++ ){
            liTemp +='<li class="bgPic"><a data-fancybox="images" data-caption="'+data[i].text[j]+'" href="http://ountlr0uu.bkt.clouddn.com/'+data[i].link[j]+'"><img class="lazy" src="http://ountlr0uu.bkt.clouddn.com/'+data[i].link[j]+'"/></a></li>';
        }
        ulTemp+='<section class="archives album"><h1 class="year">'+data[i].date+'</h1><ul class="img-box-ul">'+liTemp+'</ul></section>';
    }
    document.querySelector('.instagram').innerHTML = '<div class="photos">' + ulTemp + '</div>'+'<p>呀，已经到底了！</p>';
}
function errSet(){
    setTimeout(function() {
        $('.bgPic').each(function() {
            $(this).css("background","url(../assets/img/loadErr.png) no-repeat center");
        });
    },6000);
}
function init() {
    $.getJSON("./list.json", function (data){
        render(data);
    });
    errSet();
}
init();
window.onload=function() {
    $("[data-fancybox]").fancybox({infobar : true,buttons : ['fullScreen','thumbs'],idleTime : 4});
}