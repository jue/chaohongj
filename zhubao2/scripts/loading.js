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
    
    'images/centerbg.png',
    'images/checked.png',
    'images/close.png',
    'images/cxdpbtn.png',
    'images/discountbg.png',
    'images/discountbtn.png',
    'images/dpbtn.png',
    'images/dybtn.png',
    'images/endsimg.png',
    'images/gz_1.png',
    'images/gz_2.png',
    'images/indexbg.png',
    'images/infotkbg.png',
    'images/leftarr.png',
    'images/load_1.png',
    'images/load_2.png',
    'images/load_3.png',
    'images/load_4.png',
    'images/qrtjbtn.png',
    'images/return.png',
    'images/rightarr.png',
    'images/ropebg.png',
    'images/selectpagebg.jpg',
    'images/selectpagebg.jpg',
    'images/selecttips.png',
    'images/sharebtn.png',
    'images/shareimg.jpg',
    'images/sharepic.png',
    'images/shoul.jpg',
    'images/showbg.jpg',
    'images/sjx_1.png',
    'images/sjx_2.png',
    'images/sjx_3.png',
    'images/sjx_4.png',
    'images/sjx_5.png',
    'images/sjx_6.png',
    'images/sjx_7.png',
    'images/sjx_8.png',
    'images/sjx_9.png',
    'images/sjx_10.png',
    'images/sjx_11.png',
    'images/sjx_12.png',
    'images/slogan.png',
    'images/style_1.jpg',
    'images/style_2.jpg',
    'images/style_3.jpg',
    'images/style_4.jpg',
    'images/style_5.jpg',
    'images/style_6.jpg',
    'images/styles_1.jpg',
    'images/styles_2.jpg',
    'images/styles_3.jpg',
    'images/styles_4.jpg',
    'images/styles_5.jpg',
    'images/styles_6.jpg',
    'images/texttips.png',
    'images/tktips.png',
    'images/xl_1.jpg',
    'images/xl_2.jpg',
    'images/xl_3.jpg',
    'images/xl_4.jpg',
    'images/xl_5.jpg',
    'images/xl_6.jpg',
    'images/xl_7.jpg',
    'images/xlbg_1.jpg',
    'images/xlbg_2.jpg',
    'images/xlbg_3.jpg',
    'images/xlbg_4.jpg',
    'images/xlbg_5.jpg',
    'images/xlbg_6.jpg',
    'images/xlbg_7.jpg',
    'images/xlbg_8.jpg',
    'images/xlbg_9.jpg',
    'images/xlbg_10.jpg',
    'images/xlbg_11.jpg',
    'images/xlbg_12.jpg',
    'images/xlzs_1.png',
    'images/xlzs_2.png',
    'images/xlzs_3.png',
    'images/xlzs_4.png',
    'images/xlzs_5.png',
    'images/xlzs_6.png',
    'images/xzbtn.png',

    'images/bijou/bj_1.png',
    'images/bijou/bj_2.png',
    'images/bijou/bj_3.png',
    'images/bijou/bj_4.png',
    'images/bijou/bj_5.png',
    'images/bijou/bj_6.png',
    'images/bijou/bj_7.png',
    'images/bijou/bj_8.png',
    'images/bijou/bj_9.png',
    'images/bijou/bj_10.png',
    'images/bijou/bj_11.png',
    'images/bijou/bj_12.png',
    'images/bijou/bj_13.png',
    'images/bijou/bj_14.png',
    'images/bijou/bj_15.png',
    'images/bijou/bj_16.png',
    'images/bijou/bj_17.png',
    'images/bijou/bj_18.png',
    'images/bijou/bj_19.png',
    'images/bijou/bj_20.png',
    'images/bijou/bj_21.png',
    'images/bijou/bj_22.png',
    'images/bijou/bj_23.png',
    'images/bijou/bj_24.png',
    'images/bijou/bj_25.png',
    'images/bijou/bj_26.png',
    'images/bijou/bj_27.png',
    'images/bijou/bj_28.png',
    'images/bijou/bj_29.png',
    'images/bijou/bj_30.png',
    'images/bijou/bj_31.png',
    'images/bijou/bj_32.png',
    'images/bijou/bj_33.png',
    'images/bijou/bj_34.png',
    'images/bijou/bj_35.png',
    'images/bijou/bj_36.png',
    'images/bijou/bj_37.png',
    'images/bijou/bj_38.png',
    'images/bijou/bj_39.png',
    'images/bijou/bj_40.png',
    'images/bijou/bj_41.png',
    'images/bijou/bj_42.png',
    'images/bijou/bj_43.png',
    'images/bijou/bj_44.png',
    'images/bijou/bj_45.png',
    'images/bijou/bj_46.png',
    'images/bijou/bj_47.png',
    'images/bijou/bj_48.png',
    'images/bijou/bj_49.png',
    'images/bijou/bj_50.png',
    'images/bijou/bj_51.png',
    'images/bijou/bj_52.png',
    'images/bijou/bj_53.png',
    'images/bijou/bj_54.png',
    'images/bijou/bj_55.png',
    'images/bijou/bj_56.png',
    'images/bijou/bj_57.png',
    'images/bijou/bj_58.png',
    'images/bijou/bj_59.png',
    'images/bijou/bj_60.png',
    'images/bijou/bj_61.png',
    'images/bijou/bj_62.png',
    'images/bijou/bj_63.png',
    'images/bijou/bj_64.png',
    'images/bijou/bj_65.png',
    'images/bijou/bj_66.png',
    'images/bijou/bj_67.png',
    'images/bijou/bj_68.png',
    'images/bijou/bj_69.png',
    'images/bijou/bj_70.png',
    'images/bijou/bj_71.png',
    'images/bijou/bj_72.png',
    'images/bijou/bj_73.png',
    'images/bijou/bj_74.png',
    'images/bijou/bj_75.png',
    'images/bijou/bj_76.png',
    'images/bijou/bj_77.png',
    'images/bijou/bj_78.png',
    'images/bijou/bj_79.png',
    'images/bijou/bj_80.png',
    'images/bijou/bj_81.png',
    'images/bijou/bj_82.png',
    'images/bijou/bj_83.png',
    'images/bijou/bj_84.png',

    'images/rope/rope_1.png',
    'images/rope/rope_2.png',
    'images/rope/rope_3.png',
    'images/rope/rope_4.png',
    'images/rope/rope_5.png',
    'images/rope/rope_6.png',
    'images/rope/rope_7.png',
    'images/rope/rope_8.png'
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
