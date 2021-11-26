//加载图片的方法
    /**
      data:需要预加载的图片的数组
      callback:每加完一个图片后都会调用callback(percent) percent为当前进度值；//参数percent不带%
    **/
    function loadImage(data,callback)
    {
        var imgLoaded = 0;
        var percent = 0;
        var imgLength = data.length;
        for(var i=0;i<imgLength;i++)
        {
            var imgobj = new Image();
            imgobj.onload = function()
            {
                imgLoaded++;
                percent = parseInt(imgLoaded/imgLength*100);
                callback(percent);
            }
            imgobj.src = data[i];
        }
    }
    //定义图片数组
    var data = [
    //***以下为页面中引用图片；
    
    '/public/zhubao2/images/centerbg.png',
    '/public/zhubao2/images/checked.png',
    '/public/zhubao2/images/close.png',
    '/public/zhubao2/images/cxdpbtn.png',
    '/public/zhubao2/images/discountbg.png',
    '/public/zhubao2/images/discountbtn.png',
    '/public/zhubao2/images/dpbtn.png',
    '/public/zhubao2/images/dybtn.png',
    '/public/zhubao2/images/endsimg.png',
    '/public/zhubao2/images/gz_1.png',
    '/public/zhubao2/images/gz_2.png',
    '/public/zhubao2/images/indexbg.png',
    '/public/zhubao2/images/infotkbg.png',
    '/public/zhubao2/images/leftarr.png',
    '/public/zhubao2/images/load_1.png',
    '/public/zhubao2/images/load_2.png',
    '/public/zhubao2/images/load_3.png',
    '/public/zhubao2/images/load_4.png',
    '/public/zhubao2/images/qrtjbtn.png',
    '/public/zhubao2/images/return.png',
    '/public/zhubao2/images/rightarr.png',
    '/public/zhubao2/images/ropebg.png',
    '/public/zhubao2/images/selectpagebg.jpg',
    '/public/zhubao2/images/selectpagebg.jpg',
    '/public/zhubao2/images/selecttips.png',
    '/public/zhubao2/images/sharebtn.png',
    '/public/zhubao2/images/shareimg.jpg',
    '/public/zhubao2/images/sharepic.png',
    '/public/zhubao2/images/shoul.jpg',
    '/public/zhubao2/images/showbg.jpg',
    '/public/zhubao2/images/sjx_1.png',
    '/public/zhubao2/images/sjx_2.png',
    '/public/zhubao2/images/sjx_3.png',
    '/public/zhubao2/images/sjx_4.png',
    '/public/zhubao2/images/sjx_5.png',
    '/public/zhubao2/images/sjx_6.png',
    '/public/zhubao2/images/sjx_7.png',
    '/public/zhubao2/images/sjx_8.png',
    '/public/zhubao2/images/sjx_9.png',
    '/public/zhubao2/images/sjx_10.png',
    '/public/zhubao2/images/sjx_11.png',
    '/public/zhubao2/images/sjx_12.png',
    '/public/zhubao2/images/slogan.png',
    '/public/zhubao2/images/style_1.jpg',
    '/public/zhubao2/images/style_2.jpg',
    '/public/zhubao2/images/style_3.jpg',
    '/public/zhubao2/images/style_4.jpg',
    '/public/zhubao2/images/style_5.jpg',
    '/public/zhubao2/images/style_6.jpg',
    '/public/zhubao2/images/styles_1.jpg',
    '/public/zhubao2/images/styles_2.jpg',
    '/public/zhubao2/images/styles_3.jpg',
    '/public/zhubao2/images/styles_4.jpg',
    '/public/zhubao2/images/styles_5.jpg',
    '/public/zhubao2/images/styles_6.jpg',
    '/public/zhubao2/images/texttips.png',
    '/public/zhubao2/images/tktips.png',
    '/public/zhubao2/images/xl_1.jpg',
    '/public/zhubao2/images/xl_2.jpg',
    '/public/zhubao2/images/xl_3.jpg',
    '/public/zhubao2/images/xl_4.jpg',
    '/public/zhubao2/images/xl_5.jpg',
    '/public/zhubao2/images/xl_6.jpg',
    '/public/zhubao2/images/xl_7.jpg',
    '/public/zhubao2/images/xlbg_1.jpg',
    '/public/zhubao2/images/xlbg_2.jpg',
    '/public/zhubao2/images/xlbg_3.jpg',
    '/public/zhubao2/images/xlbg_4.jpg',
    '/public/zhubao2/images/xlbg_5.jpg',
    '/public/zhubao2/images/xlbg_6.jpg',
    '/public/zhubao2/images/xlbg_7.jpg',
    '/public/zhubao2/images/xlbg_8.jpg',
    '/public/zhubao2/images/xlbg_9.jpg',
    '/public/zhubao2/images/xlbg_10.jpg',
    '/public/zhubao2/images/xlbg_11.jpg',
    '/public/zhubao2/images/xlbg_12.jpg',
    '/public/zhubao2/images/xlzs_1.png',
    '/public/zhubao2/images/xlzs_2.png',
    '/public/zhubao2/images/xlzs_3.png',
    '/public/zhubao2/images/xlzs_4.png',
    '/public/zhubao2/images/xlzs_5.png',
    '/public/zhubao2/images/xlzs_6.png',
    '/public/zhubao2/images/xzbtn.png',

    '/public/zhubao2/images/bijou/bj_1.png',
    '/public/zhubao2/images/bijou/bj_2.png',
    '/public/zhubao2/images/bijou/bj_3.png',
    '/public/zhubao2/images/bijou/bj_4.png',
    '/public/zhubao2/images/bijou/bj_5.png',
    '/public/zhubao2/images/bijou/bj_6.png',
    '/public/zhubao2/images/bijou/bj_7.png',
    '/public/zhubao2/images/bijou/bj_8.png',
    '/public/zhubao2/images/bijou/bj_9.png',
    '/public/zhubao2/images/bijou/bj_10.png',
    '/public/zhubao2/images/bijou/bj_11.png',
    '/public/zhubao2/images/bijou/bj_12.png',
    '/public/zhubao2/images/bijou/bj_13.png',
    '/public/zhubao2/images/bijou/bj_14.png',
    '/public/zhubao2/images/bijou/bj_15.png',
    '/public/zhubao2/images/bijou/bj_16.png',
    '/public/zhubao2/images/bijou/bj_17.png',
    '/public/zhubao2/images/bijou/bj_18.png',
    '/public/zhubao2/images/bijou/bj_19.png',
    '/public/zhubao2/images/bijou/bj_20.png',
    '/public/zhubao2/images/bijou/bj_21.png',
    '/public/zhubao2/images/bijou/bj_22.png',
    '/public/zhubao2/images/bijou/bj_23.png',
    '/public/zhubao2/images/bijou/bj_24.png',
    '/public/zhubao2/images/bijou/bj_25.png',
    '/public/zhubao2/images/bijou/bj_26.png',
    '/public/zhubao2/images/bijou/bj_27.png',
    '/public/zhubao2/images/bijou/bj_28.png',
    '/public/zhubao2/images/bijou/bj_29.png',
    '/public/zhubao2/images/bijou/bj_30.png',
    '/public/zhubao2/images/bijou/bj_31.png',
    '/public/zhubao2/images/bijou/bj_32.png',
    '/public/zhubao2/images/bijou/bj_33.png',
    '/public/zhubao2/images/bijou/bj_34.png',
    '/public/zhubao2/images/bijou/bj_35.png',
    '/public/zhubao2/images/bijou/bj_36.png',
    '/public/zhubao2/images/bijou/bj_37.png',
    '/public/zhubao2/images/bijou/bj_38.png',
    '/public/zhubao2/images/bijou/bj_39.png',
    '/public/zhubao2/images/bijou/bj_40.png',
    '/public/zhubao2/images/bijou/bj_41.png',
    '/public/zhubao2/images/bijou/bj_42.png',
    '/public/zhubao2/images/bijou/bj_43.png',
    '/public/zhubao2/images/bijou/bj_44.png',
    '/public/zhubao2/images/bijou/bj_45.png',
    '/public/zhubao2/images/bijou/bj_46.png',
    '/public/zhubao2/images/bijou/bj_47.png',
    '/public/zhubao2/images/bijou/bj_48.png',
    '/public/zhubao2/images/bijou/bj_49.png',
    '/public/zhubao2/images/bijou/bj_50.png',
    '/public/zhubao2/images/bijou/bj_51.png',
    '/public/zhubao2/images/bijou/bj_52.png',
    '/public/zhubao2/images/bijou/bj_53.png',
    '/public/zhubao2/images/bijou/bj_54.png',
    '/public/zhubao2/images/bijou/bj_55.png',
    '/public/zhubao2/images/bijou/bj_56.png',
    '/public/zhubao2/images/bijou/bj_57.png',
    '/public/zhubao2/images/bijou/bj_58.png',
    '/public/zhubao2/images/bijou/bj_59.png',
    '/public/zhubao2/images/bijou/bj_60.png',
    '/public/zhubao2/images/bijou/bj_61.png',
    '/public/zhubao2/images/bijou/bj_62.png',
    '/public/zhubao2/images/bijou/bj_63.png',
    '/public/zhubao2/images/bijou/bj_64.png',
    '/public/zhubao2/images/bijou/bj_65.png',
    '/public/zhubao2/images/bijou/bj_66.png',
    '/public/zhubao2/images/bijou/bj_67.png',
    '/public/zhubao2/images/bijou/bj_68.png',
    '/public/zhubao2/images/bijou/bj_69.png',
    '/public/zhubao2/images/bijou/bj_70.png',
    '/public/zhubao2/images/bijou/bj_71.png',
    '/public/zhubao2/images/bijou/bj_72.png',
    '/public/zhubao2/images/bijou/bj_73.png',
    '/public/zhubao2/images/bijou/bj_74.png',
    '/public/zhubao2/images/bijou/bj_75.png',
    '/public/zhubao2/images/bijou/bj_76.png',
    '/public/zhubao2/images/bijou/bj_77.png',
    '/public/zhubao2/images/bijou/bj_78.png',
    '/public/zhubao2/images/bijou/bj_79.png',
    '/public/zhubao2/images/bijou/bj_80.png',
    '/public/zhubao2/images/bijou/bj_81.png',
    '/public/zhubao2/images/bijou/bj_82.png',
    '/public/zhubao2/images/bijou/bj_83.png',
    '/public/zhubao2/images/bijou/bj_84.png',

    '/public/zhubao2/images/rope/rope_1.png',
    '/public/zhubao2/images/rope/rope_2.png',
    '/public/zhubao2/images/rope/rope_3.png',
    '/public/zhubao2/images/rope/rope_4.png',
    '/public/zhubao2/images/rope/rope_5.png',
    '/public/zhubao2/images/rope/rope_6.png',
    '/public/zhubao2/images/rope/rope_7.png',
    '/public/zhubao2/images/rope/rope_8.png'
    ];

    $(function(){

      //show_index();
      //调用图片加载函数

      loadImage(data,function(percent){
        //参数percent不带%
       $("#loading em").text(percent);
       if(percent>=12){
        $('#loading .loadimg img').eq(0).show();
       }
       if(percent>=24){
        $('#loading .loadimg img').eq(1).show();
       }
       if(percent>=36){
        $('#loading .loadimg img').eq(2).show();
       }
       if(percent>=48){
        $('#loading .loadimg img').eq(3).show();
       }
       if(percent>=60){
        $('#loading .loadimg img').eq(4).show();
       }
       if(percent>=72){
        $('#loading .loadimg img').eq(5).show();
       }
       if(percent>=84){
        $('#loading .loadimg img').eq(6).show();
       }
       if(percent>=96){
        $('#loading .loadimg img').eq(7).show();
       }
        //$("#loading .loadimg").css('width',percent+'%');
        
        //判断是否加载到100;
        if(percent>=100)
        {
         show_indexpage();
        }
      });
    });
    function show_indexpage(){
        $('#loading').hide();
        $('.indexshowpage').show().addClass('active');
        $('.dzbtn').show().addClass('active');
        play_audio();
        $('a.music img').addClass('active');
        setTimeout('showsjx()',2000)

    }
