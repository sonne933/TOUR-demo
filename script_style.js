
// $(document).ready(function () {
//     $('.bar_1').animate({
//         width: "70%"
//     });
//     $('.bar_2').animate({
//         width: "40%"
//     });
//     $('.bar_3').animate({
//         width: "43%"
//     });
//     $('.bar_4').animate({
//         width: "65%"
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    var bar1 = document.querySelector('.bar_1');
    var bar2 = document.querySelector('.bar_2');
    var bar3 = document.querySelector('.bar_3');
    var bar4 = document.querySelector('.bar_4');

    animateBar(bar1, "70%");
    animateBar(bar2, "40%");
    animateBar(bar3, "43%");
    animateBar(bar4, "65%");

});

function animateBar(element, width) {
  element.style.width = 0;
  var currentWidth = 0;
  var intervalId = setInterval(frame, 10);

  function frame() {
      if (currentWidth >= parseInt(width)) {
          clearInterval(intervalId);
      } else {
          currentWidth++;
          element.style.width = currentWidth + "%";
      }
   }
}
// $(document).ready(function () {
//     $('.tooltip').tooltipster();
// });

// offers
// $(function () {
//     $("#tabs").tabs();
// });
// $(document).ready(function () {
//     $("#offer_1").mouseover(function () {
//         $("#offer_box_1").css({
//             top: "105%",
//             visibility: "unset",
//             opacity: "1"
//         });
//     })
//     $("#offer_2").mouseover(function () {
//         $("#offer_box_2").css({
//             top: "105%",
//             visibility: "unset",
//             opacity: "1"
//         });
//     })
//     $("#offer_3").mouseover(function () {
//         $("#offer_box_3").css({
//             top: "105%",
//             visibility: "unset",
//             opacity: "1"
//         });
//     })
//     $("#offer_4").mouseover(function () {
//         $("#offer_box_4").css({
//             top: "105%",
//             visibility: "unset",
//             opacity: "1"
//         });
//     })
//     $("#offer_5").mouseover(function () {
//         $("#offer_box_5").css({
//             top: "105%",
//             visibility: "unset",
//             opacity: "1"
//         });
//     })

//     $("#offer_1").mouseout(function () {
//         $("#offer_box_1").css({
//             opacity: "0",
//             top: "120%",
//             visibility: "hidden"
//         });
//     })
//     $("#offer_2").mouseout(function () {
//         $("#offer_box_2").css({
//             opacity: "0",
//             top: "120%",
//             visibility: "hidden"
//         });
//     })
//     $("#offer_3").mouseout(function () {
//         $("#offer_box_3").css({
//             opacity: "0",
//             top: "120%",
//             visibility: "hidden"
//         });
//     })
//     $("#offer_4").mouseout(function () {
//         $("#offer_box_4").css({
//             opacity: "0",
//             top: "120%",
//             visibility: "hidden"
//         });
//     })
//     $("#offer_5").mouseout(function () {
//         $("#offer_box_5").css({
//             opacity: "0",
//             top: "120%",
//             visibility: "hidden"
//         });
//     })
// })

document.addEventListener("DOMContentLoaded", function() {
    var offer1 = document.getElementById("offer_1");
    var offer2 = document.getElementById("offer_2");
    var offer3 = document.getElementById("offer_3");
    var offer4 = document.getElementById("offer_4");
    var offer5 = document.getElementById("offer_5");
    var offerBox1 = document.getElementById("offer_box_1");
    var offerBox2 = document.getElementById("offer_box_2");
    var offerBox3 = document.getElementById("offer_box_3");
    var offerBox4 = document.getElementById("offer_box_4");
    var offerBox5 = document.getElementById("offer_box_5");

    offer1.addEventListener("mouseover", function() {
        offerBox1.style.top = "105%";
        offerBox1.style.visibility = "unset";
        offerBox1.style.opacity = "1";
    });
    offer2.addEventListener("mouseover", function() {
        offerBox2.style.top = "105%";
        offerBox2.style.visibility = "unset";
        offerBox2.style.opacity = "1";
    });
    offer3.addEventListener("mouseover", function() {
        offerBox3.style.top = "105%";
        offerBox3.style.visibility = "unset";
        offerBox3.style.opacity = "1";
    });
    offer4.addEventListener("mouseover", function() {
        offerBox4.style.top = "105%";
        offerBox4.style.visibility = "unset";
        offerBox4.style.opacity = "1";
    });
    offer5.addEventListener("mouseover", function() {
        offerBox5.style.top = "105%";
        offerBox5.style.visibility = "unset";
        offerBox5.style.opacity = "1";
    });

    offer1.addEventListener("mouseout", function() {
        offerBox1.style.opacity = "0";
        offerBox1.style.top = "120%";
        offerBox1.style.visibility = "hidden";
    });
    offer2.addEventListener("mouseout", function() {
        offerBox2.style.opacity = "0";
        offerBox2.style.top = "120%";
        offerBox2.style.visibility = "hidden";
    });
    offer3.addEventListener("mouseout", function() {
        offerBox3.style.opacity = "0";
        offerBox3.style.top = "120%";
        offerBox3.style.visibility = "hidden";
    });
    offer4.addEventListener("mouseout", function() {
        offerBox4.style.opacity = "0";
        offerBox4.style.top = "120%";
        offerBox4.style.visibility = "hidden";
    });
    offer5.addEventListener("mouseout", function() {
        offerBox5.style.opacity = "0";
        offerBox5.style.top = "120%";
        offerBox5.style.visibility = "hidden";
    });
});
// back top
// function backTop() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("back_top").style.display = "block";
//     } else {
//         document.getElementById("back_top").style.display = "none";
//     }
// }
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
// window.onscroll = function () {
//     scrollFunction(),
//         backTop()
// };

// blog
// $(document).ready(function () {
//     $('.tooltip').tooltipster();
// });
document.addEventListener('DOMContentLoaded', function() {
    var tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(function(tooltip) {
        // tooltip.addEventListener('mouseover', function() {
        //     // Thêm mã logic của bạn ở đây
        // });
    });
});
// $(document).ready(function () {
//     $(".zoom_img").mouseover(function () {
//         $(this).css({
//             width: "110%"
//         })
//     })
// });
document.addEventListener("DOMContentLoaded", function() {
    var zoomImgs = document.querySelectorAll(".zoom_img");
    zoomImgs.forEach(function(zoomImg) {
        zoomImg.addEventListener("mouseover", function() {
            this.style.width = "110%";
        });
    });
});
// $(document).ready(function () {
//     $(".zoom_img").mouseout(function () {
//         $(this).css({
//             width: "100%"
//         })
//     })
// });
document.addEventListener("DOMContentLoaded", function() {
    var zoomImgs = document.querySelectorAll(".zoom_img");
    zoomImgs.forEach(function(zoomImg) {
        zoomImg.addEventListener("mouseout", function() {
            this.style.width = "100%";
        });
    });
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
        // var data = $('form#form_contact').serialize();

        // $.ajax({
        //     type: 'POST', //kiểu post
        //     url: 'test.php', //gửi dữ liệu sang trang test.php
        //     data: data,
        //     success: function (data) {
        //         if (data == 'false') {
        //             swal('Gởi thất bại');
        //         } else {
        //             swal("Thành công!", "Nội dung đã được gởi", "success");
        //             $('#contact').html(data);
        //         }
        //     }
        // });
        // return true;
    }

    return false;
}