//音频地址
//最后一个为背景音乐；

var musiclist=['/public/zhubao/audio/audio1.mp3?3','/public/zhubao/audio/audio2.mp3?3','/public/zhubao/audio/audio3.mp3?3','/public/zhubao/audio/audio4.mp3?3','/public/zhubao/audio/audio5.mp3?3','/public/zhubao/audio/audio6.mp3?3','/public/zhubao/audio/audio7.mp3?3']

var ropeindex = 0; //串绳索引；
var xl_index = 0; //背景系列索引；
function int_allpage(ropelength){
    var ropehtml='';
    var ropebutton='';
    console.log(ropehtml)
    for(i = 0;i< ropelength;i++){
         
        ropehtml=ropehtml+'<div class="rope"><img src="/public/zhubao/images/rope/rope_'+(i+1)+'.png" class="ropetype"><a href="javascript:;" class="xzbtn img"><img src="/public/zhubao/images/xzbtn.png"></a></div>';
        ropebutton=ropebutton+'<a href="javascript:;">'+i+'</a>';
       
    }
    
    $('.all .ropelist').append(ropehtml);
    $('.all .ropebutton').append(ropebutton);
    $('.all .ropelist .rope').eq(0).addClass('active');
    $('.all .ropebutton a').eq(0).addClass('active');
     //’选好了‘按钮提交，珠珠搭配页面
     $('a.xzbtn').each(function(index) {
         $(this).on("click",function() {
                    $('.all').hide();
                    $('.chosexlpage').show();
                    //锁定选好的串绳；
                    $('.ropelist img.ropetype').eq(index).clone().appendTo('#bijoushow');
        })
     })
    // 串绳，系列页面切换动作；
    MobileTouch($('.all')[0], 'swipetop', topcallback);
    MobileTouch($('.all')[0], 'swipedown', downcallback);
    MobileTouch($('.all')[0], 'swipeleft', leftcallback);
    MobileTouch($('.all')[0], 'swiperight', rightcallback);

}

function topcallback() {
    if (ropeindex < (ropelength-1)) {
        ropeindex++;
        if(ropeindex==(ropelength-1)){
            $('img.jt').hide();
        }
        $('.ropelist').css('top', ropeindex * (-100) + '%');
        $('.ropelist .rope').removeClass('active');
        $('.ropelist .rope').eq(ropeindex).addClass('active');
        $('.ropebutton a').removeClass('active');
        $('.ropebutton a').eq(ropeindex).addClass('active');
    }
}

function downcallback() {
    if (ropeindex > 0) {
        ropeindex--;
        if(ropeindex<(ropelength-1)){
            $('img.jt').show();
        }
        $('.ropelist').css('top', ropeindex * (-100) + '%');
        $('.ropelist .rope').removeClass('active');
        $('.ropelist .rope').eq(ropeindex).addClass('active');
        $('.ropebutton a').removeClass('active');
        $('.ropebutton a').eq(ropeindex).addClass('active');
    }
}

function leftcallback() {
    if (xl_index <= 5) {
        xl_index++;
        $('.xlicolist').css('left', xl_index * (-5.5) + 'rem');
        $('.xlicolist a').removeClass('active');
        $('.xlicolist a').eq(xl_index).addClass('active');
        $('.page').eq(xl_index - 1).addClass('moveleft');
        if (xl_index > 0) {
            $('a.xzbtn').show();

        }
        play_audio(xl_index);

    }
}

function rightcallback() {
    if (xl_index > 0) {
        xl_index--;
        $('.xlicolist').css('left', xl_index * (-5.5) + 'rem');
        $('.xlicolist a').removeClass('active');
        if(xl_index>0){
            $('.xlicolist a').eq(xl_index).addClass('active');
             play_audio(xl_index);
        }
        $('.page').eq(xl_index).removeClass('moveleft');

         if (xl_index <= 0) {
            $('a.xzbtn').hide();
             play_audio(7);
        }
    }
}

//初始化珠珠弹框功能；
function intbijou() {
    for (i = 0; i <= $('.swiper-container').size(); i++) {
        var swiper = new Swiper('.swiper-container_' + i, {
            slidesPerView: 4,
            spaceBetween: 15,
            prevButton: ' .swiper-button-prev',
            nextButton: ' .swiper-button-next',
        });
    }
    create_handchain(); //生成手链；
}
//珠珠系列弹框展示；
function showbijou(xlindex) {
    $('.swiper-container').hide();
    $('.swiper-container').eq(xlindex).show();

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
                } else if ((bjtype1_num >= 3) & (thisbjtype == 'type_1')) {
                    alert('手串上最多可选3个珠串，您可以选择吊坠搭配更好看！')
                } else {
                    $(this).addClass('checked');
                    var bijouid = $(this).attr('id');
                    addbijou(bijouid);
                    //播放珠珠音效；
                    playbijouaudio(bijouid);
                }

            }

        })

    })
}
//添加珠珠
function addbijou(bijouid) {
    $('#' + bijouid).find('img').clone().appendTo('#bijoushow');
    var bj_num = $('#bijoushow img.bijouimg').size(); //手链上珠珠总数
    array_bijou('#bijoushow',bj_num);
}
//删除珠珠
function removebijou(bijouid) {
    $('#bijoushow img.' + bijouid).remove();
    var bj_num = $('#bijoushow img.bijouimg').size(); //手链上珠珠总数
    array_bijou('#bijoushow',bj_num);
}
//串珠位置；
var positionarray = [
    ['22%', '46%'],
    ['36%', '52%'],
    ['50%', '54%'],
    ['64%', '52%'],
    ['78%', '45%']
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
                'left': positionarray[3][0],
                'top': positionarray[3][1]
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
    }

}


//清除所有已选珠珠；
function removeallbijou() {
    $('.bijoulist .swiper-slide a').removeClass('checked');
    $('#bijoushow img.bijouimg').remove();
}

//显示串好的手链；
function show_handchain() {
    $('#bijoushow').find('img').clone().appendTo('#handchain');
    $('.chosexlpage').hide();
    $('.endshow').show();
    $('.normalmusic').show().css('bottom','20%');
    //播放串珠音效；
    playhandchain('#bijoushow',xl_index,false);
    creat_url();
    //setTimeout(function(){playhandchain('#bijoushow');},0)
    //play_audio(xl_index);
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

 function stopallaudio(){
    for(i=0;i<=5;i++){
            var pauseaudio=$("#Audio_"+i)[0];
            pauseaudio.pause();
    }
 }
//初始化纯音频文件；
var Audio_0,Audio_1,Audio_2,Audio_3,Audio_4,Audio_5,Audio_6;
function int_audio(){
    //初始化背景音乐系列音乐；
    for(i=0;i<=6;i++){
        $("#Audio_"+i).attr('src',musiclist[i])
        $("#Audio_"+i)[0].load();
    }
    //初始化珠珠音乐；
    var audio_bijou_length=$('a[bijoutype]').size();
    console.log(audio_bijou_length);
    for(i=1;i<=audio_bijou_length;i++){
        var audio_bijou_src='/public/zhubao/audio/audio_'+i+'.mp3';
        var audio_bijou_html='<audio src="'+audio_bijou_src+'"  id="audio_bijou_'+i+'" preload="auto"></audio>';
        $('.bijoulist').append(audio_bijou_html);
        $("#audio_bijou_"+i)[0].load();
    }
}
 //播放纯音频
function play_audio(audio_index){
    for(i=0;i<=6;i++){
        if(i!=(audio_index-1)){
            var pauseaudio=$("#Audio_"+i)[0];
             pauseaudio.pause();
            //pauseaudio.currentTime = 0;
        }
        else{

            var playaudio=$("#Audio_"+i)[0];
            playaudio.currentTime = 0;
            PlayAudio(playaudio);
        }
    }
}
//微信兼容音频播放；
function PlayAudio(ele) {
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
    //var bijouaudiosrc='/public/zhubao/audio/audio_'+xl_index+'.mp3';
    var $bijouaudioid=$("#audio_bijou_"+bijou_index);
    //$bijouaudioid.attr('src',bijouaudiosrc)
    //$bijouaudioid[0].load();
    PlayAudio($bijouaudioid[0]);

}

//播放珠珠生成音效；
var audio_jg=[1500,1050,1000,2000,2000,1500];
var audiolength=0;
function playhandchain_audio(idname,audio_length,xlindex){

    var i=0;
    var bijouid=$(idname+' img.bijouimg').eq(0).attr('class');
    playbijouaudio(bijouid);
    var timer= setInterval(function(){
        if(i>=audio_length){
            clearInterval(timer);
        }
        else{
             i++;
            var bijouid=$(idname+' img.bijouimg').eq(i).attr('class');
            playbijouaudio(bijouid);
           
        }

    },audio_jg[xlindex-1])

}
//珠珠音效无限循环播放；
function playhandchain(idname,xlindex,showtype){
    audiolength=$(idname+' img.bijouimg').size();
    playhandchain_audio(idname,audiolength,xlindex);
    if(!showtype){
       play_audio(xlindex) 
    }
    var loopaudio=setInterval(function(){
        playhandchain_audio(idname,audiolength,xlindex);
    },audiolength*audio_jg[xlindex-1]+0)
}
//生成分享URL; 背景音乐，串绳，串珠，串珠类型；
//shareshow.html?&xl_audio=3&rope=4&bj=2,4,8&bjtype=1,2,1
function creat_url(){
    var share_url='';
    var xl_audio=xl_index-1;
    var rope_index=ropeindex+1;
    var bijou_var='';
    var bijoutype_var='';
    var bijou_img=$('#handchain img.bijouimg');
    var bijou_length=bijou_img.size();
    for (i = 0; i < bijou_length; i++){
        if(i!=bijou_length-1){
            bijou_var+=bijou_img.eq(i).attr('src').replace(/[^0-9]/ig,"")+',';
            bijoutype_var+=bijou_img.eq(i).attr('bijoutype').replace(/[^0-9]/ig,"")+',';
        }
        else{
            bijou_var+=bijou_img.eq(i).attr('src').replace(/[^0-9]/ig,"");
            bijoutype_var+=bijou_img.eq(i).attr('bijoutype').replace(/[^0-9]/ig,"");
        }

    }
    share_url='?xl_audio='+xl_audio+'&rope='+rope_index+'&bj='+bijou_var+'&bjtype='+bijoutype_var;
    share(share_url,function(){sharedback();});
}

function sharedback(){
    tk_hide('.sharebox');
    $('a.sharebtn').hide();
    $('a.ddpbtn').show();
}


// 生成律动动画；
var parseColor = function(hexStr) {
    return hexStr.length === 4 ? hexStr.substr(1).split('').map(function(s) {
            return 0x11 * parseInt(s, 16);
        }) : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(function(s) {
                return parseInt(s, 16);
        })
 };
 var pad = function(s) {
            return (s.length === 1) ? '0' + s : s;
    };
 var gradientColors = function(start, end, steps, gamma) {
            var i, j, ms, me, output = [],
                so = [];
            gamma = gamma || 1;
            var normalize = function(channel) {
                return Math.pow(channel / 255, gamma);
            };
            start = parseColor(start).map(normalize);
            end = parseColor(end).map(normalize);
            for (i = 0; i < steps; i++) {
                ms = i / (steps - 1);
                me = 1 - ms;
                for (j = 0; j < 3; j++) {
                    so[j] = pad(Math.round(Math.pow(start[j] * me + end[j] * ms, 1 / gamma) * 255).toString(16));
                }
                output.push('#' + so.join(''));
            }
            return output;
        };
function creat_audioanimate(){

        //插入均衡器数量
        var spanNum = 30;

        var musicBarHtml = '';
        var musicBarHtml2 = '';
        var colorArr = gradientColors('#5486c0','#e2f9af', spanNum, 1.5);
        var colorArr2 = gradientColors('#e2f9af','#f8a083', spanNum, 1.5);

        $(colorArr).each(function(i) {
            musicBarHtml += '<span style="background-color: ' + colorArr[i] + '"></span>';
        });
        $(colorArr).each(function(i) {
            musicBarHtml2 += '<span style="background-color: ' + colorArr2[i] + '"></span>';
        });

        $('.music-bars').html(musicBarHtml)
        $('.music-bars2').html(musicBarHtml2)
        //设置均衡器动画
        function equalizer(bar) {
            var height = Math.random() * 100 / 2;
            var timing = height * 5.5;
            var marg = (50 - height) / 2;

            bar.animate({
                height: height,
                marginTop: marg
            }, timing, function() {
                equalizer($(this));
            });
        }

        $('.music-bars span').each(function(i) {
            equalizer($(this));
        });
        $('.music-bars2 span').each(function(i) {
            equalizer($(this));
        });


}
