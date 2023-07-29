
$(document).ready(function () {
    $('.bar_1').animate({
        width: "70%"
    });
    $('.bar_2').animate({
        width: "40%"
    });
    $('.bar_3').animate({
        width: "43%"
    });
    $('.bar_4').animate({
        width: "65%"
    });
});
$(document).ready(function () {
    $('.tooltip').tooltipster();
});

// offers
$(function () {
    $("#tabs").tabs();
});
$(document).ready(function () {
    $("#offer_1").mouseover(function () {
        $("#offer_box_1").css({
            top: "105%",
            visibility: "unset",
            opacity: "1"
        });
    })
    $("#offer_2").mouseover(function () {
        $("#offer_box_2").css({
            top: "105%",
            visibility: "unset",
            opacity: "1"
        });
    })
    $("#offer_3").mouseover(function () {
        $("#offer_box_3").css({
            top: "105%",
            visibility: "unset",
            opacity: "1"
        });
    })
    $("#offer_4").mouseover(function () {
        $("#offer_box_4").css({
            top: "105%",
            visibility: "unset",
            opacity: "1"
        });
    })
    $("#offer_5").mouseover(function () {
        $("#offer_box_5").css({
            top: "105%",
            visibility: "unset",
            opacity: "1"
        });
    })

    $("#offer_1").mouseout(function () {
        $("#offer_box_1").css({
            opacity: "0",
            top: "120%",
            visibility: "hidden"
        });
    })
    $("#offer_2").mouseout(function () {
        $("#offer_box_2").css({
            opacity: "0",
            top: "120%",
            visibility: "hidden"
        });
    })
    $("#offer_3").mouseout(function () {
        $("#offer_box_3").css({
            opacity: "0",
            top: "120%",
            visibility: "hidden"
        });
    })
    $("#offer_4").mouseout(function () {
        $("#offer_box_4").css({
            opacity: "0",
            top: "120%",
            visibility: "hidden"
        });
    })
    $("#offer_5").mouseout(function () {
        $("#offer_box_5").css({
            opacity: "0",
            top: "120%",
            visibility: "hidden"
        });
    })
})
// back top
function backTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back_top").style.display = "block";
    } else {
        document.getElementById("back_top").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
    scrollFunction(),
        backTop()
};

// blog
$(document).ready(function () {
    $('.tooltip').tooltipster();
});
$(document).ready(function () {
    $(".zoom_img").mouseover(function () {
        $(this).css({
            width: "110%"
        })
    })
});
$(document).ready(function () {
    $(".zoom_img").mouseout(function () {
        $(this).css({
            width: "100%"
        })
    })
});
// contact
function validateForm() {
    var check_email = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    var a = document.getElementById('form_name').value;
    var b = document.getElementById('form_email').value;
    var c = document.getElementById('form_subject').value;
    var d = document.getElementById('form_mess').value;

    if (a == '') {
        swal('Vui lòng nhập Tên');
    } else if (!check_email.test(b)) { //so sanh
        swal('Email không đúng, vui  lòng nhập lại');
    } else if (c == '') {
        swal("Vui lòng nhập chủ đề")
    } else if (d == '') {
        swal("Vui lòng nhập nội dung")
    } else {
        //Lấy all dữ liệu trong form
        var data = $('form#form_contact').serialize();

        $.ajax({
            type: 'POST', //kiểu post
            url: 'test.php', //gửi dữ liệu sang trang test.php
            data: data,
            success: function (data) {
                if (data == 'false') {
                    swal('Gởi thất bại');
                } else {
                    swal("Thành công!", "Nội dung đã được gởi", "success");
                    $('#contact').html(data);
                }
            }
        });
        // return true;
    }

    return false;
}