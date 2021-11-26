//音频地址
//最后一个为背景音乐；

var musicsrc='audio/audio7.mp3?3';
var ropeindex;
var ropelength;
function ropecheck(){
        var swiper = new Swiper('.swiper-container-rope', {
            pagination: '.swiper-pagination-rope',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop:true
        });
}

//返回串绳；
function intrope(){
   $('#bijoushow').html('') ;
}

//初始化珠珠弹框功能；
function intbijou() {
    for (i = 0; i <= $('.swiper-container').size(); i++) {
        var swiper = new Swiper('.swiper-container_' + i, {
            slidesPerView: 5,
            spaceBetween: 12,
            prevButton: ' .swiper-button-prev',
            nextButton: ' .swiper-button-next',
        });
    }
    create_handchain(); //生成手链；
}
//珠珠系列弹框展示；
function showbijou(styleindex) {
    $('.swiper-container').hide();
    $('.swiper-container').eq(styleindex).show();
    $('.xlshow_bg img').attr('src','images/xlbg_'+(styleindex+1)+'.jpg').show();
    $('.chosexlpage').attr('id','xlshow_'+(styleindex+1));

}

//串手链；
function create_handchain() {
    $('.bijoulist .swiper-slide a').each(function(index) {
        $(this).live('click', function() {
            if ($(this).hasClass('checked')) {
                $(this).removeClass('checked');
                var bijouid = $(this).attr('id');
                removebijou(bijouid);
            } else {
                var bjtype1_num = $('#bijoushow img[bijoutype=type_1]').size(); //手链上串珠总数；
                var bj_num = $('#bijoushow img.bijouimg').size(); //手链上珠珠总数
                var thisbjtype = $(this).attr('bijoutype') //当前选择的珠珠类型
                if (bj_num >= 5) {
                    alert('手串上最多有5个珠珠！')
                } 
                //else if ((bjtype1_num >= 3) & (thisbjtype == 'type_1')) {
                   // alert('手串上最多可选3个珠串，您可以选择吊坠搭配更好看！')
                //}
                 else {
                    $(this).addClass('checked');
                    var bijouid = $(this).attr('id');
                    addbijou(bijouid);
                    //播放珠珠音效；
                    playbijouaudio(bijouid);
                }

            }
            //longclickdelect();
            bijouexanddel();
        })

    });
    
}

//交换串珠和删除；
function bijouexanddel(){
    //交换位置
    var firstindex=null;
    exchangebijou(firstindex)
    //删除珠珠
    $('.selectedlist img.bijouimg').each(function(){
        $(this).click(function() {
        var bijou_index=$(this).attr('class').replace(/[^0-9]/ig,"");
        $('#bijou_'+bijou_index).removeClass('checked');
        removebijou('bijou_'+bijou_index);
        })    
    })
}
function exchangebijou(firstindex){
    var firstposition=new Array();
    var secondindex=null;
    var secondposition=new Array();
    var t=null;
    var firsthtml,secondhtml;
    var bijoushow_bijou=$('#bijoushow img.bijouimg');
    $('#bijoushow img.bijouimg').unbind("click").click(function() {
        if(firstindex==null){
            t=setTimeout(function(){clearTimeout(t);t=null},3000);
            firstindex=$(this).index();
            firsthtml=$(this).clone();
            firstposition=[$(this).css('left'),$(this).css('top')];
        }  
        else{
            if(t!=null){
                secondindex=$(this).index();
                secondposition=[$(this).css('left'),$(this).css('top')];
                secondhtml=$(this).clone();
                var bj_num = $('#bijoushow img.bijouimg').size(); //手链上珠珠总数
                $('#bijoushow img.bijouimg').eq(firstindex-1).animate({'left':secondposition[0],'top':secondposition[1]},300);
                $('#bijoushow img.bijouimg').eq(secondindex-1).animate({'left':firstposition[0],'top':firstposition[1]},300,function(){
                    
                    console.log(firstindex+' '+secondindex);
                    var firstdom=$('#bijoushow img.bijouimg').eq(firstindex-1);
                    var seconddom=$('#bijoushow img.bijouimg').eq(secondindex-1);

                    $('#bijoushow img.bijouimg').eq(firstindex-1).after("<div id='g1'></div>");
                    $('#bijoushow img.bijouimg').eq(secondindex-1).before("<div id='g3'></div>");
                    $('#g3').before(firstdom);
                    $('#g1').after(seconddom);
                    $('#g3,#g1').remove();
                    clearTimeout(t);t=null;
                     firstindex=null; 
                })
                
            }
                            
        }
    });
}

//添加珠珠
function addbijou(bijouid) {
    $('#' + bijouid).find('img').clone().appendTo('#bijoushow');
    $('#' + bijouid).find('img').clone().appendTo('.selectedlist');
    var bj_num = $('#bijoushow img.bijouimg').size(); //手链上珠珠总数
    array_bijou('#bijoushow',bj_num);
}
//删除珠珠
function removebijou(bijouid) {
    $('#bijoushow img.' + bijouid).remove();
    $('.selectedlist img.' + bijouid).remove();
    var bj_num = $('#bijoushow img.bijouimg').size(); //手链上珠珠总数
    array_bijou('#bijoushow',bj_num);
}
//串珠位置；
var positionarray = [
    ['12%', '46%'],
    ['32%', '60%'],
    ['50%', '68%'],
    ['68%', '60%'],
    ['88%', '45%']
];
//隔珠位置；
var gzpositionarray = [
    ['3%', '47%'],
    ['22%', '70%'],
    ['42%', '75%'],
    ['58%', '75%'],
    ['79%', '69%'],
    ['97%', '47%']
];
//珠珠排列；
function array_bijou(idname,bj_num) {
   
    var $dom = $(idname+' img.bijouimg');
    switch (bj_num) {
        case 0:
            break;
        case 1:
            $dom.css({
                'left': positionarray[2][0],
                'top': positionarray[2][1]
            });
            break;
        case 2:
            $dom.eq(0).css({
                'left': positionarray[1][0],
                'top': positionarray[1][1]
            });
            $dom.eq(1).css({
                'left': positionarray[2][0],
                'top': positionarray[2][1]
            });
            break;
        case 3:
            $dom.eq(0).css({
                'left': positionarray[1][0],
                'top': positionarray[1][1]
            });
            $dom.eq(1).css({
                'left': positionarray[2][0],
                'top': positionarray[2][1]
            });
            $dom.eq(2).css({
                'left': positionarray[3][0],
                'top': positionarray[3][1]
            });
            break;
        case 4:
            $dom.eq(0).css({
                'left': positionarray[0][0],
                'top': positionarray[0][1]
            });
            $dom.eq(1).css({
                'left': positionarray[1][0],
                'top': positionarray[1][1]
            });
            $dom.eq(2).css({
                'left': positionarray[2][0],
                'top': positionarray[2][1]
            });
            $dom.eq(3).css({
                'left': positionarray[3][0],
                'top': positionarray[3][1]
            });
            break;
        case 5:
            $dom.eq(0).css({
                'left': positionarray[0][0],
                'top': positionarray[0][1]
            });
            $dom.eq(1).css({
                'left': positionarray[1][0],
                'top': positionarray[1][1]
            });
            $dom.eq(2).css({
                'left': positionarray[2][0],
                'top': positionarray[2][1]
            });
            $dom.eq(3).css({
                'left': positionarray[3][0],
                'top': positionarray[3][1]
            });
            $dom.eq(4).css({
                'left': positionarray[4][0],
                'top': positionarray[4][1]
            });
            break;
        case 6:
            break;
    };
    $('#bijoushow img.gezhu').remove();
    //黄金手镯隔珠
    if(ropeindex==1){
        var gzimgsrc='images/gz_1.png';
    }
    //K金手镯隔珠
    else if(ropeindex==2){
        var gzimgsrc='images/gz_2.png';
    };
    //添加隔珠；
    
    if((ropeindex==1)||(ropeindex==2)){

        var gzhtml_s='<img src="'+gzimgsrc+'" class="gezhu" style="';
        var gzhtml_e='" />';
        if (bj_num%2==0){
            if (bj_num!=0){
               for(i=0;i<=bj_num;i++){
                    var gzhtml=gzhtml_s+'left:'+gzpositionarray[(bj_num+4)/2-i][0]+';top:'+gzpositionarray[(bj_num+4)/2-i][1]+gzhtml_e;
                    $('#bijoushow').append(gzhtml);
                } 
            }
            
        }
        else{
           for(i=0;i<=bj_num;i++){
                var gzhtml=gzhtml_s+'left:'+gzpositionarray[(bj_num+5)/2-i][0]+';top:'+gzpositionarray[(bj_num+5)/2-i][1]+gzhtml_e;
                $('#bijoushow').append(gzhtml);
            } 
        }
    }

}


//清除所有已选珠珠；
function removeallbijou() {
    $('.bijoulist .swiper-slide a').removeClass('checked');
    $('#bijoushow img.bijouimg').remove();
    $('.selectedlist img.bijouimg').remove();
    $('#bijoushow img.gezhu').remove();
}

//显示串好的手链；
function show_handchain() {
    $('.chosexlpage').hide();
    $('#bijoushow').addClass('positionselect');
    var swiper = new Swiper('.swiper-container-style', {
        slidesPerView: 4,
        spaceBetween:40,
        nextButton: '.swiper-button-nexts',
        prevButton: '.swiper-button-prevs'
    });
}


//弹框；
function tk_show(idname) {
    $(idname).fadeIn();
    $('.blackbg').fadeIn();
    $('.tankuang').click(function() {
        tk_hide('.tankuang')
    })
}

function tk_hide(idname) {
    $(idname).fadeOut();
    $('.blackbg').fadeOut();
}


//初始化纯音频文件；
function int_audio(){
    //初始化背景音乐系列音乐；
    $("#Audio").attr('src',musicsrc)
    $("#Audio")[0].load();
    //初始化珠珠音乐；
    //var audio_bijou_length=$('a[bijoutype]').size();
    var audio_bijou_length=85;
    for(i=1;i<=audio_bijou_length;i++){
        var audio_bijou_src='audio/audio_'+i+'.mp3';
        var audio_bijou_html='<audio src="'+audio_bijou_src+'"  id="audio_bijou_'+i+'" preload="auto"></audio>';
        $('.bijoulist').append(audio_bijou_html);
        $("#audio_bijou_"+i)[0].load();
    }
}
 //播放纯音频
function play_audio(){
    var playaudio=$("#Audio")[0];
    PlayAudio(playaudio);
}
 //播放纯音频
function pause_audio(){
    var playaudio=$("#Audio")[0];
    playaudio.pause();
}
//微信兼容音频播放；
function PlayAudio(ele) {
// ele.play();
 var wxTimmer = setInterval(function () {
     try {

         if (WeixinJSBridge !== undefined) {
             clearInterval(wxTimmer);
             WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                ele.play();
             });
         }

     } catch (e) {
        //ele.play();
         //console.log(e.name + ": " + e.message);
     }
 }, 200);
}

//播放珠珠音效；
function playbijouaudio(bijouid){
    var bijou_index=bijouid.replace(/[^0-9]/ig,"");
    var $bijouaudioid=$("#audio_bijou_"+bijou_index);
    //播放珠珠音乐；
    //PlayAudio($bijouaudioid[0]);

}

//播放珠珠生成音效；
var audio_jg=[1500,1050,1000,2000,2000,1500];
var audiolength=0;
function playhandchain_audio(idname,audio_length,styleindex){

    var i=0;
    var bijouid=$(idname+' img.bijouimg').eq(0).attr('class');
    playbijouaudio(bijouid);
    var timer= setInterval(function(){
        if(i>=(audio_length-1)){
            clearInterval(timer);
        }
        else{
             i++;
            var bijouid=$(idname+' img.bijouimg').eq(i).attr('class');
            playbijouaudio(bijouid);
           
        }

    },audio_jg[styleindex-1])

}
//珠珠音效无限循环播放；
function playhandchain(idname,styleindex){
    audiolength=$(idname+' img.bijouimg').size();
    playhandchain_audio(idname,audiolength,styleindex);
    var loopaudio=setInterval(function(){
        playhandchain_audio(idname,audiolength,styleindex);
    },audiolength*audio_jg[styleindex-1]+0)
}
//生成分享URL; 背景音乐，串绳，串珠，串珠类型；
//shareshow.html?rope=4&bj=2,4,8&bjtype=1,2,1
function creat_url(){
    var share_url='';
    var zdy_txt=encodeURI(usertext);
    console.log(zdy_txt);
    var rope_index=ropeindex;
    var bijou_var='';
    var bijoutype_var='';
    var style_index=styleindex;
    var bijou_img=$('#bijoushow img.bijouimg');
    var bijou_length=bijou_img.size();
    for (i = 0; i < bijou_length; i++){
        if(i!=bijou_length-1){
            bijou_var+=bijou_img.eq(i).attr('class').replace(/[^0-9]/ig,"")+',';
            bijoutype_var+=bijou_img.eq(i).attr('bijoutype').replace(/[^0-9]/ig,"")+',';
        }
        else{
            bijou_var+=bijou_img.eq(i).attr('class').replace(/[^0-9]/ig,"");
            bijoutype_var+=bijou_img.eq(i).attr('bijoutype').replace(/[^0-9]/ig,"");
        }

    }

    share_url='?zdy_txt='+zdy_txt+'&rope='+rope_index+'&bj='+bijou_var+'&bjtype='+bijoutype_var+'&styleindex='+style_index;
    share(share_url,function(){sharedback();});

}

function sharedback(){
    tk_hide('.sharebox');
    $('a.sharebtn').hide();
    $('a.ddpbtn').show();

}

function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}    

function showsjx(){
   for(i=0;i<=$('img.sjx').size();i++) {
     //$('img.sjx').eq(i).addClass('sjx_animate');
     setTimeout('$("img.sjx").eq('+i+').addClass("sjx_animate")',GetRandomNum(1,5)*200);
     //setTimeout(function(){"alert('5 seconds!')"},5000)
   }
}

function bijouanimation(){

    var bijou_img=$('#bijoushow img.bijouimg');
    var bijou_length=bijou_img.size();
    var ani_index=0;
    var timer= setInterval(function(){
        if(ani_index==bijou_length){
            ani_index=0;
        }
       bijou_img.removeClass('bounceIn');
        bijou_img.eq(ani_index).addClass('bounceIn');
        ani_index++;
     },600)
}
