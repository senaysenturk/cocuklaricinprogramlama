var ANIMATE_SPEED = 40;
var EX3_LOADING_DELAY = 3000;
var ALERT_TITLE = "Nice Job!";
var ALERT_BUTTON_TEXT = "Submit";
var over = false;
var inc = 1;
var wdth, ht, left, t, oNm;

function closeTwitterInterface() {
    document.getElementById("divTwitterInterface").style.visibility = "hidden";
    document.getElementById("divHTMLbox").style.visibility = "hidden";
    document.getElementById("divCSSbox").style.visibility = "hidden";
}

$(function () {
    if (ex != "ex2" && ex != "4" && ex.indexOf("game") == -1) {
        $("#width-up,#width-down,#height-up,#height-down").tooltip({
            bodyHandler: function () {
                return $(this).attr('data-tooltip');
            }, showURL: false
        });
    }
});

function gotoNextCourse() {
    var u = document.location.href;
    var ind = u.lastIndexOf(".html");
    var nxtCourseId = parseInt(u.substr(ind - 1, 1)) + 1;
    if (isNaN(nxtCourseId)) nxtCourseId = 1;
    fn = (nxtCourseId == 3 || nxtCourseId == 5 || nxtCourseId == 7) ? "game" : "ex";
    document.location.href = fn + nxtCourseId + ".html";
}

function getPopUrl() {
    return ex + "_pop.html";
}

function refreshEx() {
    window.location.reload();
}

function lightbox(u, target) {
    var txt = $('#' + target).html();
    d = document;
    if ($("#lightbox").length == 0) {
        $('body').append('<div id="shadowing">');
        $('body').append('<div id="lightbox">');
        $("#lightbox").prepend('<div id="alertBox" style="display:none;">');
    }
    $("#alertBox").load(u + ' #' + target, function () {
        $("#closeBtn").click(function () {
            refreshEx();
            return false;
        });
        $("#nxtBtn").click(function () {
            gotoNextCourse();
            return false;
        });
        $("#sbmtBtn").click(function () {
            showSecondPopup();
            return false;
        });
        center_lightbox();
        var refreshId = setInterval(function () {
            if ($('#' + target).width() > 0) {
                clearInterval(refreshId);
                center_lightbox(target);
            }
        }, 100);
        $("#alertBox #" + target).show();
    });
}

function center_lightbox(target) {
    var topPos = "20px";
    d = document;
    if (d.all && !window.opera) topPos = d.documentElement.scrollTop + "px";
    leftPos = (d.documentElement.scrollWidth - $("#" + target).width()) / 2 + "px";
    $("#alertBox").css('top', topPos + 50);
    $("#alertBox").css("left", leftPos);
    $(window).resize(function () {
        leftPos = (d.documentElement.scrollWidth - $("#" + target).width()) / 2 + "px";
        $("#alertBox").css("left", leftPos);
    });
    $("#alertBox").fadeIn(2000);
}

function showSecondPopup() {
    var stat = eval("checkAns" + ex + "()");
    if (stat) {
        lightbox(u, 'success');
        setTimeout("gotoNextCourse()", 5000);
    } else {
        lightbox(u, 'failure');
    }
}

function createContentAlert() {
    var txt = $('#content').html();
    $('#content').empty();
    d = document;
    if (d.getElementById("modalContainer")) return;
    mObj1 = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj1.id = "shadowing";
    d.getElementById('shadowing').style.display = 'block';
    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    formObj = mObj.appendChild(d.createElement("form"));
    formObj.name = "contentForm";
    alertObj = formObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    alertObj.style.width = "610px";
    if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
    alertObj.style.visiblity = "visible";
    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));
    msg = alertObj.appendChild(d.createElement("div"));
    msg.id = "msg";
    msg.innerHTML = txt;
    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function () {
        removeContentAlert();
        return false;
    }
    alertObj.style.display = "block";
    gradient("alertBox", 0);
    fadein("alertBox");
}

function createAlert(elemNm) {
    d = document;
    txt = d.getElementById(elemNm).innerHTML;
    mObj = d.getElementById("modalContainer");
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    alertObj.style.width = "610px";
    if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
    alertObj.style.visiblity = "visible";
    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode((elemNm == "success") ? ALERT_TITLE : "SORRY"));
    msg = alertObj.appendChild(d.createElement("div"));
    msg.innerHTML = txt;
    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode("CLOSE"));
    btn.href = "#";
    btn.focus();
    btn.onclick = function () {
        removeAlert(elemNm);
        return false;
    }
    alertObj.style.display = "block";
    if (elemNm == "success") {
        setTimeout("gotoNextCourse()", 5000);
    } else if (elemNm == "failure") {
        setTimeout("removeAlert('failure')", 10000);
    }
}

function removeContentAlert() {
    var stat = eval("checkAns" + ex + "()");
    $("#alertBox").remove();
    if (stat) {
        createAlert('success');
    } else {
        createAlert('failure');
    }
}

function removeAlert(nm) {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
    if (nm == "success") {
        gotoNextCourse();
    } else if (nm == "failure") {
        refreshEx();
    }
}

function gradient(id, level) {
    var box = document.getElementById(id);
    box.style.opacity = level;
    box.style.MozOpacity = level;
    box.style.KhtmlOpacity = level;
    box.style.filter = "alpha(opacity=" + level * 100 + ")";
    box.style.display = "block";
    return;
}

function fadein(id) {
    var level = 0;
    while (level <= 1) {
        setTimeout("gradient('" + id + "'," + level + ")", (level * 2000) + 10);
        level += 0.01;
    }
}

function submitenter(e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true;
    if (keycode == 13) {
        if ($("#lightbox").length > 0) showSecondPopup(); else removeContentAlert();
        return false;
    } else
        return true;
}

function extractNum(s) {
    if (s == undefined || s == null) return 0;
    return parseInt(s.substring(0, s.indexOf("px")));
}

function getNxtItm(s, arr) {
    var ind = 0;
    var len = arr.length;
    for (i = 0; i < len; ++i) {
        if (arr[i] == s) {
            ind = i;
            break;
        }
    }
    ind += inc;
    if (inc > 0 && ind == len) ind = 0;
    if (inc < 0 && ind == -1) ind = len - 1;
    return arr[ind];
}

function clearContents() {
    $(this).value = '';
}

function showColorPicker() {
    $("#color-pick").css("display", "block");
    v = $(".color").val();
    $(".color").val("").show().focus().val(v);
}

function loadex() {
    nS = 5;
    t = parseInt($("#p1").offset().top);
    tPoss = new Array(nS);
    for (i = 0; i < nS; ++i)
        tPoss[i] = parseInt($("#p" + (i + 1)).offset().top) - t;
    $("#how_main a:not('#takequiz')").click(function () {
        idNm = $(this).attr("id").substring(2);
        pos = tPoss[parseInt(idNm) - 1];
        $("#how_main").animate({scrollTop: pos}, 'slow');
    });
    $("#takequiz").click(function () {
        u = getPopUrl();
        lightbox(u, "content");
    });
}

function checkAnsex() {
    var ans1V = $("input:radio[name=ans1]:checked").val();
    var ans2V = $("input:radio[name=ans2]:checked").val();
    return (ans1V == "3" && ans2V == "3");
}

$(".html-slide-link").click(function () {
    $(".csstext").css("background", "none");
    $(".htmltext").css({'background-color': 'lightgreen', 'height': '7px', 'margin-bottom': '3px'});
    $(".box-1-highlight span[class='blue']").css({"background": "#82160d", "color": "#FFFFFF"});
});
$(".css-slide-link").click(function () {
    $(".box-1-highlight span[class='blue']").css({"background": "none", "color": "#000000"});
    $(".htmltext,.box-1-highlight").css("background", "none");
    $(".csstext").css("background", "lightblue");
});
$(".clear-highlights").click(function () {
    $(".csstext,.box-1-highlight,.htmltext").css("background", "none");
    $(".box-1-highlight span[class='blue']").css({"background": "none", "color": "#000000"});
});
$(".combine-highlights").click(function () {
    $(".csstext").css("background", "lightblue");
    $(".box-1-highlight").css("background", "lightgreen");
    $(".htmltext").css("background", "none");
});

function loadex1() {
    $("#css-width").html("50");
    $("#css-height").html("50");
    wdth = $("#box-r-container1").width();
    ht = $("#box-r-container1").height();
    $('#width-up,#width-down,#height-up,#height-down').mousedown(function () {
        $("#colorBlk,#colorBlk1").addClass("codeColor");
        over = true;
        var n = this.id;
        inc = (n.indexOf("up") != -1) ? 1 : -1;
        oNm = (n.indexOf("width") != -1) ? "width" : "height";
        grow_anim1();
    }).mouseup(function () {
        over = false;
        $("#colorBlk,#colorBlk1").removeClass("codeColor");
    });
}

function checkAnsex1() {
    var ans1V = $("input[name=ans1]").val();
    var ans2V = $("input[name=ans2]").val();
    console.log(ans1V + ":" + ans2V);
    return ((ans1V.toUpperCase() == "WIDTH" && ans2V.toUpperCase() == "HEIGHT") || (ans1V.toUpperCase() == "HEIGHT" && ans2V.toUpperCase() == "WIDTH"));
}

function grow_anim1() {
    if (over) {
        var divNm = '#css-' + oNm;
        var w = parseInt($(divNm).text()) + inc;
        if (w < 0) w = 0;
        if (oNm == "width" && w <= wdth) {
            if (inc > 0)
                $('#box-r-1').animate({width: '+=1'}, ANIMATE_SPEED, grow_anim1); else
                $('#box-r-1').animate({width: '-=1'}, ANIMATE_SPEED, grow_anim1);
            $(divNm).html(w);
        }
        if (oNm == "height" && w <= ht) {
            if (inc > 0)
                $('#box-r-1').animate({height: '+=1'}, ANIMATE_SPEED, grow_anim1); else
                $('#box-r-1').animate({height: '-=1'}, ANIMATE_SPEED, grow_anim1);
            $(divNm).html(w);
        }
        if (parseInt($('#css-width').text()) >= wdth && parseInt($('#css-height').text()) >= ht) {
            createContentAlert(checkAnsex1);
            over = false;
            return;
        }
    }
}

function loadex2() {
    $.ColorPicker.init();
}

function checkAnsex2() {
    var ans1V = document.contentForm.ans1.value;
    return (ans1V.toUpperCase() == "BACKGROUND-COLOR");
}

function populateColor() {
    var c = $("#cPhex").attr("value");
    if (c != "FF0000" && c != "ff0000") {
        alert("Please select the correct color.");
    } else {
        createContentAlert(checkAnsex2);
    }
}

function loadgame3() {
    $("#css-width").html("50");
    $("#css-height").html("50");
    wdth = $("#box-r-container1").width();
    ht = $("#box-r-container1").height();
    $('#width-up,#width-down,#height-up,#height-down').mousedown(function () {
        $("#colorBlk,#colorBlk1").addClass("codeColor");
        over = true;
        var n = this.id;
        inc = (n.indexOf("up") != -1) ? 1 : -1;
        oNm = (n.indexOf("width") != -1) ? "width" : "height";
        grow_animgame3();
    }).mouseup(function () {
        over = false;
        $("#colorBlk,#colorBlk1").removeClass("codeColor");
    });
    $("#objective a").click(function () {
        $("#divTwitterInterface,#divHTMLbox").hide();
        var count = 60;
        var refreshId = setInterval(function () {
            count--;
            if (count < 0) {
                clearInterval(refreshId);
                u = getPopUrl();
                lightbox(u, "failure");
            } else {
                $("#sec_counter").text(count);
            }
            if (showAlertgame3()) {
                u = getPopUrl();
                lightbox(u, "success");
                clearInterval(refreshId);
                setTimeout("gotoNextCourse()", 5000);
                return;
            }
        }, 1000);
    });
}

function grow_animgame3() {
    if (over) {
        var divNm = '#css-' + oNm;
        var w = parseInt($(divNm).text()) + inc;
        if (w < 0) w = 0;
        if (oNm == "width" && w <= wdth) {
            if (inc > 0)
                $('#box-r-1').animate({width: '+=1'}, ANIMATE_SPEED, grow_animgame3); else
                $('#box-r-1').animate({width: '-=1'}, ANIMATE_SPEED, grow_animgame3);
            $(divNm).html(w);
        }
        if (oNm == "height" && w <= ht) {
            if (inc > 0)
                $('#box-r-1').animate({height: '+=1'}, ANIMATE_SPEED, grow_animgame3); else
                $('#box-r-1').animate({height: '-=1'}, ANIMATE_SPEED, grow_animgame3);
            $(divNm).html(w);
        }
        if (parseInt($('#css-width').text()) >= wdth && parseInt($('#css-height').text()) >= ht) over = false;
    }
}

function showAlertgame3() {
    return parseInt($('#css-width').text()) >= wdth && parseInt($('#css-height').text()) >= ht && $(".color").attr("value") == "0B484F";
}

function onColorHidegame3() {
    var c = $(".color").attr("value");
    $("#sel-color").html(c);
    $("#box-r-1").css("background-color", "#" + c);
    if (showAlertgame3()) {
        u = getPopUrl();
        lightbox(u, "success");
    }
}

function loadex4() {
    $("#left-bottom-box-video img").click(function () {
        $("#out_mesg").width(650);
        $("#out_mesg").removeClass("error-bg");
        $("#out_mesg").html($("<img>").attr("src", "images/loading.gif")).attr('align', 'middle');
        setTimeout("upload4()", EX3_LOADING_DELAY);
    });
}

function upload4() {
    var options = {
        url: "impl/compare.php", dataType: "json", success: function (data) {
            if (data["err"] != 'success') {
                $("#out_mesg").html(data["out"]);
                $("#out_mesg").addClass("error-bg");
                $.each(data["mesg"].split(","), function (i, v) {
                    if (v != "") $("#" + v).addClass("errorColor");
                });
            } else {
                $("#out_mesg").html($("<img>").attr("src", "images/exercise3-success.png").stop(true, true).hide().fadeIn(3000));
                u = getPopUrl();
                lightbox(u, "content");
            }
        }
    }
    $('#form' + ex).ajaxForm(options);
    $('#form' + ex).submit();
    return false;
}

function loadex6() {
    showdial = false;
    $(".signin").click(function (e) {
        $("fieldset#signin_menu").show();
        $(".signin").toggleClass("menu-open");
        return false;
    });
    $("input#myfile").change(function () {
        showdial = true;
    });
    $("fieldset#signin_menu").mouseup(function () {
        return false;
    });
    $(document).mouseup(function (e) {
        $(".signin").removeClass("menu-open");
        if (!showdial) {
            $("fieldset#signin_menu").hide();
        } else {
            showdial = false;
        }
    });
    $("input[name='submitBtn']").click(function () {
        eval("upload" + ex + "()");
    });
    var s = $('#text-to-copy').html().replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    $('#copy-text').zclip({path: 'images/ZeroClipboard.swf', copy: s});
}

function uploadex6() {
    var options = {
        url: "impl/upload.php", beforeSubmit: function () {
            document.getElementById('f1_upload_process').style.visibility = 'visible';
            document.getElementById('f1_upload_form').style.visibility = 'hidden';
        }, dataType: "json", success: function (data) {
            if (data["err"] != 'success') {
                $("#out_mesg").html(data["out"]);
                $("#out_mesg").addClass("error-bg");
                $.each(data["mesg"].split(","), function (i, v) {
                    if (v != "") $("#" + v).addClass("errorColor");
                });
            } else {
                $("#out_mesg").html($("<img>").attr("src", "images/exercise3-success.png").stop(true, true).hide().fadeIn(3000));
                u = getPopUrl();
                lightbox(u, "content");
            }
            document.getElementById('f1_upload_process').style.visibility = 'hidden';
            document.getElementById('f1_upload_form').style.visibility = 'visible';
            $("fieldset#signin_menu").hide();
        }
    }
    $("form").ajaxForm(options);
    $('form').submit();
    return false;
}

var ex8int;

function loadex8() {
    $('.ex5htmlinput').live('keyup', function () {
        var n = $(".ex5htmlinput").val().replace(/>\s+</, "><");
        var m = '<div id="box2"></div>';
        $(".ex5htmlinput").css("background", (n != m) ? "red" : "lightgreen");
        if (n == m) ex8int = setInterval("updateex8()", 1000);
    });
}

function updateex8() {
    $("style").remove();
    $("head").append("<style>" + $("textarea#box2css").val() + "</style>");
    if (checkAnsex8()) {
        clearInterval(ex7int);
        lightbox(getPopUrl(), "content");
    }
}

function checkAnsex8() {
    return $("#box2").width() == 265 && $("#box2").height() == 200 && ($("#box2").getHexBackgroundColor() == "#00203a");
}

$.fn.getHexBackgroundColor = function () {
    var rgb = $(this).css('background-color');
    if (rgb != null && rgb != "transparent") {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }

        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    } else {
        return "";
    }
}
$(document).ready(function () {
    eval("load" + ex + "()");
});
$(".ex5cssinput").focus(function () {
    $(".ex5cssinput").animate({height: '110'}, 400);
    $(".ex5cssinput").val('');
});
var flag = 0;
$(".ex5htmlinput").click(function () {
    if (window.flag < 1) {
        $(".ex5htmlinput").val('');
    }
    flag = 1;
});