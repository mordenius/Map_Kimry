$(function() {
    // -- data_point 
    var Point_Mass = [{
        "point": {
            "id": "Kimra",
            "type": "active",
            "vilage_name": "Кимры",
            "vilage_type": "vilage",
            "number_of_houses": "803",
            "number_of_people": {
                "man": "2406",
                "female": "2677",
            },
            "header": "Село",
            "description": " В 1891 г. в Кимрах было 803 дома, 5083 местных жителя, 2406 мужчин,  2677 женщин, всего же, с временно проживающими, 6028 человек.",
            "engaged": "занимались производством обуви",
            "position": {
                "top": "",
                "left": ""
            }
        }
    }, {
        "point": {
            "id": "Gubin_Ugol",
            "type": "active",
            "vilage_name": "Губин-Угол.",
            "vilage_type": "vilage",
            "number_of_houses": "44",
            "number_of_people": {
                "man": "121",
                "female": "153",
            },
            "header": "Село",
            "description": " В 1569 г. относилось к Дубенскому стану Кашинского уезда, принадлежало старицкому Успенскому монастырю. В селе были храмы Покрова Богородицы и Флора и Лавра. В 1628 г. церковь Флора и Лавра, согласно писцовой книге, «стоит без пенья» и без священника. В 1806 г. в селе была  деревянная церковь Покрова Богородицы, 18 дворов и 106 жителей. Впоследствии село отнесли к Ларцевской волости Корчевского уезда. Покровская церковь с 1858 г. была отстроена в камене с 5 престолами.  В конце XIX - начале XX вв. в селе насчитывалось 46 дворов, 268 человек, из них 112 мужчин и 156 женщин. В селе располагалась сапожная мастерская с 23 рабочими, две чайные, молочная лавка и красильня.",
            "engaged": "занимались шитьем калош и ботинок",
            "position": {
                "top": "",
                "left": ""
            }
        }
    }, {
        "point": {
            "id": "Shutovo",
            "type": "active",
            "vilage_name": "Шутово",
            "vilage_type": "Small_Vilage",
            "number_of_houses": "13",
            "number_of_people": {
                "man": "84",
                "female": "138",
            },
            "header": "Деревня",
            "description": " Входила в состав Кимрской вотчины. В 1635 г. насчитывала 10 дворов и 31 жителя (20 мужчин и 11 женщин). В 1780-х гг. - 43 двора, население – 281 человек. В 1806 г.  - 21 двор, 125 человек. В 1887 г. деревня  Шутово – селение в составе Кимрской волости Корчевского уезда с 49 дворами  и  265 жителями из которых 128 мужчин и 137 женщин.  В деревне работали  две кожевенные и две сапожные мастерские.",
            "engaged": "занимались изготовлением  детской обуви",
            "position": {
                "top": "",
                "left": ""
            }
        }
    }, {
        "point": {
            "id": "Tihonovo",
            "type": "active",
            "vilage_name": "Тихоново",
            "vilage_type": "Small_Vilage",
            "number_of_houses": "19",
            "number_of_people": {
                "man": "47",
                "female": "57",
            },
            "header": "Деревня",
            "description": " В 1678 г. принадлежала тверскому Христорождественскому монастырю, насчитывала 3 двора с 12 крестьянами. Относилась к Белгородскому стану Кашинского уезда.   В конце XVIII-XIX в. – государственная деревня. В 1887 г. – 21 двор, 129 человек из которых 29 мужчин и 51 женщина. В древне располагались две сапожные мастерские с наемными рабочими.",
            "engaged": "занимались отделкой  выкроенных кож и окончательном  приготовлении их для шитья обуви",
            "position": {
                "top": "",
                "left": ""
            }
        }
    }, {
        "point": {
            "id": "Malchevka",
            "type": "active",
            "vilage_name": "Мыльцевка",
            "vilage_type": "Small_Vilage",
            "number_of_houses": "84",
            "number_of_people": {
                "man": "54",
                "female": "56",
            },
            "header": "Деревня",
            "description": " Ныне в черте г. Кимры. В 1628 г. в Дубенском стане была пустошь Мыльцова, принадлежащая тверскому Отроч монастырю. В 1678 г. это была уже деревня в 4 двора. В 1780-х гг. – государственная деревня с 12 дворами и 71 жителем. В 1893 г. деревня находилась в составе Кимрской волости, в ней было 18 дворов и 110 жителей, из которых 54 мужчины и 56 женщин.",
            "engaged": "занимались изготовлением  сапожных и башмачных колодок",
            "position": {
                "top": "",
                "left": ""
            }
        }
    }, {
        "point": {
            "id": "Emelyanovka",
            "type": "active",
            "vilage_name": "Емельяновка",
            "vilage_type": "Small_Vilage",
            "number_of_houses": "18",
            "number_of_people": {
                "man": "29",
                "female": "33",
            },
            "header": "Деревня",
            "description": " В 1628 г. – пустошь Омельяново Дубенского стана Кашинского уезда. В 1780-х гг. деревня числилась бывшей собственностью Отроч монастыря. В 1887 г. относилась к Кимрской волости, насчитывала 14 дворов и 62 жителя, из которых 29 мужчин и 33 женщины.",
            "engaged": "занимались изготовлением сапожных и башмачных колодок",
            "position": {
                "top": "",
                "left": ""
            }
        }
    }, {
        "point": {
            "id": "Bogunino",
            "type": "active",
            "vilage_name": "Богунино",
            "vilage_type": "Small_Vilage",
            "number_of_houses": "14",
            "number_of_people": {
                "man": "202",
                "female": "259",
            },
            "header": "Деревня",
            "description": " В 1628 г. село Богунино принадлежало тверскому Отроч  монастырю, относилось к Дубенскому стану Кашинского уезда.  Храм Дмитрия Солунского в 1628 г., согласно писцовой книге, «стоит без пенья» и без священника. Было 4 двора крестьянских и 4 бобыльских. В 1780-х гг. – государственная деревня, 33 двора, 201 человек. В 1887 г. находилась в составе в Кимрской волости и начитывала  84 двора и 461 жителя,  из которых 202 мужчины и 259 женщин. В деревне был постоялый двор, винная лавка, три сапожные мастерские.",
            "engaged": "занимались изготовлением  сапожных и башмачных колодок",
            "position": {
                "top": "",
                "left": ""
            }
        }

    }];
    // -- data_point_end    

    // -- create_point_dom
    function create_point_dom() {
        var Teg_El = "<div><div class='active'></div><div class='container2'><button class='pulse-button'></button></div></div>";
        var list_nambers = 0;

        function Point_Alignment() {
            $.each(Point_Mass, function(key, value) {
                list_nambers++;
                if (value.point.vilage_type == "vilage") {
                    value.point.url = "img/Left_Block/Vilage_Type_Vilage.png"
                } else {
                    value.point.url = "img/Left_Block/Vilage_Type_Small_Vilage.png"
                }
                $(".points").append("<div class='point' id=" + value.point.id + ">" + Teg_El + "</div>");
                $(".swiper-wrapper").append("<li class='swiper-slide' id=" + value.point.id + " ><p class='Str_Nam'>" + list_nambers + "</p> <div class='Vilage_Type'> <img src=" + value.point.url + "><p> " + value.point.number_of_houses + " </p></div> <p class='Vilage_Name'> " + value.point.header + " " + value.point.vilage_name + " </p> <div class='Nam_People'> <div class='Man'> <img src='img/Left_Block/Woman.png'> <p> " + value.point.number_of_people.man + " </p>  </div> <div class='female'> <img src='img/Left_Block/Man.png'> <p> " + value.point.number_of_people.female + " </p> </div></div></li>");
            });
        };
        Point_Alignment();
    }
    create_point_dom();

    //--chenge_information_right_info_clok
    function change_info_r_block() {
        $.each(Point_Mass, function(key, value) {
            if (value.point.id == $('.active_point').attr("id")) {
                $('.Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h1,.Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > p, .Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > .right_b_img, .Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h2, .Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h3, .Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h4').stop().animate({
                    opacity: 0
                }, 400, function() {
                    $('.Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h1').text(value.point.header);
                    $('.Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h2').text(value.point.vilage_name);
                    $('.Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h4').text(value.point.engaged);
                    $('.Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > img').attr("src", value.point.url);
                    $('.Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > p').text(value.point.description);
                    $('.Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h1,.Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > p, .Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > .right_b_img, .Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h2, .Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h3, .Right_Info_Block_1_Frame > .Right_Info_Block_2_Frame > h4').stop().animate({
                        opacity: 1
                    }, 400)
                });
            } else {}
        });
    }

    //--- returne_settings_position

    var returne_settings_position = function() {
        $(".box, .map").width(2512);
        $.each(Point_Mass, function(key, value) {
            $('.point').each(function(i, elem) {
                if (value.point.id == $(elem).attr("id")) {
                    $(elem).css({
                        "left": value.point.position.left
                    });
                    $(elem).css({
                        "top": value.point.position.top
                    });
                } else {

                }
            });
        });
        
       $('.box').css({"left" : -1200 });
        
    };




    //--coretion_map_position 
    var corection_position = function() {
        if ($(".point").hasClass("active_point")) {
            width_box = $('.box').width(); //-- ширина карты
            map_pos_left = $('.box').css("left"); //-- позицыия карты
            map_pos_left = parseInt(map_pos_left); //-- переобразование позиции в число  
            map_pos_left = -map_pos_left; //-- переобразование в плюсовое число
            Max_Trac_Map = width_box * 57 / 100; //-- максимально возможная траекторя движения карты              
            Max_Trac_Map_Midle = Max_Trac_Map / 2 //-- середина карты
            if (map_pos_left > Max_Trac_Map_Midle) {
                m = $('.active_point').offset().left
                var m_plas = m;
                m = m + 100; //-- учитываем размер иконки
                m = m - (m * 2);
                Max_Trac_Map + 80;
                $('.box').animate({
                    "left": m
                }, 400);
                if (m_plas > Max_Trac_Map) {
                    $('.box').animate({
                        "left": -Max_Trac_Map
                    }, 400);
                } else {
                    $('.box').animate({
                        "left": m
                    }, 400);
                }
            } else if (map_pos_left < Max_Trac_Map_Midle) {
                m = $('.active_point').offset().left;
                m = m + 100;
                m = m / 2;
                m = m - (m * 2);
                if (m_plas > Max_Trac_Map) {
                    $('.box').animate({
                        "left": -Max_Trac_Map
                    }, 400);
                } else {
                    $('.box').animate({
                        "left": m
                    }, 400);
                }
            }
        }
    }


    var Corect_Height = function() {
        h = $(".box").height();
        h = h / 2.8;
        h = -h;
        $('.box').css({
            'top': h
        });
    }




    $('.map').click(function() {
        returne_settings_position();
    });




    //--create_point_dom_end

    //--function_width_in 
    var width_in_v;

    function width_in() {
        width_in_v = true;
        var width = $('.map').width();
        width = width * 1.1;
        if (width > 3342) {
            return;
        }
        $('.map').css({
            "width": width
        });
        $('.box').css({
            "width": width
        });
        let pos = $('#Bogunino').position();
        $('#Bogunino').css("left", (pos.left * 1.102)).css("top", (pos.top * 1.108));
        let pos1 = $('#Gubin_Ugol').position();
        $('#Gubin_Ugol').css("left", (pos1.left * 1.102)).css("top", (pos1.top * 1.108));
        let pos3 = $('#Kimra').position();
        $('#Kimra').css("left", (pos3.left * 1.102)).css("top", (pos3.top * 1.108));
        let pos4 = $('#Shutovo').position();
        $('#Shutovo').css("left", (pos4.left * 1.102)).css("top", (pos4.top * 1.108));
        let pos5 = $('#Tihonovo').position();
        $('#Tihonovo').css("left", (pos5.left * 1.102)).css("top", (pos5.top * 1.108));
        let pos6 = $('#Malchevka').position();
        $('#Malchevka').css("left", (pos6.left * 1.102)).css("top", (pos6.top * 1.108));
        let pos7 = $('#Emelyanovka').position();
        $('#Emelyanovka').css("left", (pos7.left * 1.102)).css("top", (pos7.top * 1.108));


        //corection_position();
        Corect_Height();
    }
    //--function_width_in_end        


    //--function_width_out
    function width_out() {
        width_in_v = false;
        var width = $('.map').width();
        if (width < 1800) {
            return;
        }
        width = width / 1.1;
        $('.map').css({
            "width": width
        });
        $('.box').css({
            "width": width
        });
        let pos = $('#Bogunino').position();
        $('#Bogunino').css("left", (pos.left / 1.102)).css("top", (pos.top / 1.108));
        let pos1 = $('#Gubin_Ugol').position();
        $('#Gubin_Ugol').css("left", (pos1.left / 1.102)).css("top", (pos1.top / 1.108));
        let pos3 = $('#Kimra').position();
        $('#Kimra').css("left", (pos3.left / 1.102)).css("top", (pos3.top / 1.108));
        let pos4 = $('#Shutovo').position();
        $('#Shutovo').css("left", (pos4.left / 1.102)).css("top", (pos4.top / 1.108));
        let pos5 = $('#Tihonovo').position();
        $('#Tihonovo').css("left", (pos5.left / 1.102)).css("top", (pos5.top / 1.108));
        let pos6 = $('#Malchevka').position();
        $('#Malchevka').css("left", (pos6.left / 1.102)).css("top", (pos6.top / 1.108));
        let pos7 = $('#Emelyanovka').position();
        $('#Emelyanovka').css("left", (pos7.left / 1.102)).css("top", (pos7.top / 1.108));
        Map_Left = $('.box').css('left');
        $('.box').css({
            'left': Map_Left * 1.3
        });




        //corection_position();

        Box_Vidth = $(".box").width();
        Box_Vidth = (Box_Vidth * 30) / 100;
        Box_Vidth = Box_Vidth - (Box_Vidth * 2);

        $('.box').animate({
            "left": Box_Vidth
        }, 400);

        Corect_Height();

    }



    //--pinch_function
    var myElement = document.getElementById('map');
    var mc = new Hammer.Manager(myElement);
    var pinch = new Hammer.Pinch();
    mc.add([pinch]);
    mc.on("pinchin", function(ev) {
        ev.preventDefault();
        width_in();
    });
    mc.on("pinchout", function(ev) {
        ev.preventDefault();
        width_out();
    });
    mc.on("panmove", function(ev) {

    });
    // --- open_id_info


$(".point").click(function() {
        returne_settings_position();
        $(".point").removeClass('active_point');
        $(this).addClass('active_point');
        $(".point").children('div').children('div').children('button').removeClass('ativeted_point');
        $(this).children('div').children('div').children('button').addClass('ativeted_point');
        $(".point").children('div').children('.active').removeClass("clickd");
        $(this).children('div').children('.active').addClass('clickd');
        change_info_r_block();
        var this_top = $(this).css('top');
        this_top = parseInt(this_top);
        $(this).animate({
            top: this_top - 100
        }, 300, function() {
            $(this).animate({
                top: this_top
            }, 300)
        });
        Point_Id = $(this).attr("id");
        $('.swiper-slide').removeClass('activet');
        Ul_Point = ".swiper-wrapper > #" + Point_Id;
        $(Ul_Point).addClass('activet');
        corection_position();
        Corect_Height();
});




    //--- Zooom_Button
$('.Zomm_In').click(function() {
        width_in();
});


$('.Zoom_Out').click(function() {
        width_out();
});
    //--- Zooom_Button


var disable_point = function() {
        $('.swiper-slide').removeClass('activet');
        $('.point').removeClass('active_point');
        $(".point").children('div').children('div').children('button').removeClass('ativeted_point');
}


var map = {
    scroll_map: scroll_funck = function() {
        var initialPoint;
        var finalPoint;
        var nowPoint;
        var drag = false;
        $(".box").on('touchstart', function(e) {
            initialPoint = event.changedTouches[0];
            drag = true;
        }).on('touchend', function() {
            finalPoint = event.changedTouches[0];
            $(this).data({
                startX: 0,
                startY: 0,
            });
            drag = false;
        }).on('touchmove', function(e) {
            nowPoint = event.changedTouches[0];
            //  console.log(nowPoint.screenX, nowPoint.screenY);
            e.preventDefault();
            if (drag) {
                var left = parseInt($(this).css('left')) || 0,
                    top = parseInt($(this).css('top')) || 0,
                    newLeft = left + (nowPoint.screenX - ($(this).data().startX || nowPoint.screenX)),
                    newTop = top + (nowPoint.screenY - ($(this).data().startY || nowPoint.screenY)),
                    parentHeight = $(this).parent().height(),
                    parentWidth = $(this).parent().width(),
                    imgHeight = $(this).height(),
                    imgWidth = $(this).width();
                $(this).css({
                    left: newLeft < 0 && (Math.abs(newLeft - parentWidth) < imgWidth) ? newLeft : left,
                    top: newTop < 0 && (Math.abs(newTop - parentHeight) < imgHeight) ? newTop : top
                }).data({
                    startX: nowPoint.screenX,
                    startY: nowPoint.screenY,
                });
            };
        });
     },
     start_map_position: start_map_position_funck = function() {
        $(".box").css({
            "top": "-630px"
        });
        $(".box").css({
            "left": "-1055px"
        });
        $(".box").css({
            "width": $(".map").width()
        });
    }
};
    map.scroll_map();
    map.start_map_position();

    //--Right_Info_Block    
var right_info_block = {
        Enable_Disable: {
            Of_ON: "false",
            click_function: click_function = function() {
                $('.Right_Info_Block_ON_OF').click(function() {
                    right_info_block.Enable_Disable.Of_ON = "false"
                    right_info_block.animation_of()
                })
                $('.point').click(function() {
                    right_info_block.Enable_Disable.Of_ON = "true"
                    right_info_block.animation_on()
                })
            }
        },
        animation_on: animation = function() {
            $('.Right_Info_Block_1_Frame').animate({
                "margin-right": "0"
            });
        }, //--annimation_function_end    
        animation_of: animation = function() {
                $('.Right_Info_Block_1_Frame').animate({
                    "margin-right": "-845"
                });
                disable_point();
            } //--animation_of_end
}
right_info_block.Enable_Disable.click_function();

    
    //-- Left_Info_Block   
var left_info_block = {
        Enable_Disable: {
            Of_ON: "true",
            click_function: click_function = function() {
                $('.Left_Info_Block_ON_OF').click(function() {
                    left_info_block.Enable_Disable.Of_ON = "false"
                    left_info_block.animation_of()
                })
                $('.Pointer').click(function() {
                    left_info_block.Enable_Disable.Of_ON = "true"
                    left_info_block.animation_on()
                })
            }
        },
        animation_on: animation = function() {
            $('.Pointer').animate({
                "margin-left": "-60"
            }, 200);
            $('.Left_Info_Block_1_Frame').animate({
                "margin-left": "0"
            }, 200);
        }, //--annimation_function_end    
        animation_of: animation = function() {
            $('.Left_Info_Block_1_Frame').animate({
                "margin-left": "-845"
            }, 200);
            $('.Pointer').animate({
                "margin-left": "0"
            }, 1000);
        }, //--animation_of_end
        swipe_funck: swipe_fucktion = function() {
            setTimeout(function() {
                swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 5,
                    paginationClickable: true,
                    direction: 'vertical'
                })
            }, 200)
        }, //--end_swipe_funck
        point_selection: point_selection = function() {
            $('.swiper-slide').click(function() {
                $('.swiper-slide').removeClass('activet');
                $(this).addClass('activet');
                var this_id = $(this).attr('id');
                $('.points > div').each(function(index, domEle) {
                    if (this_id == $(domEle).attr('id')) {
                        $(domEle).click();
                    }
                });
            });
        }, //--point_selection_end          
}
left_info_block.swipe_funck(); //--swipe_funck
left_info_block.point_selection(); //--point_selection
left_info_block.Enable_Disable.click_function();

//------ scrolbar
    
    

    
    

});