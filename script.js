var alert = document.querySelector(".alert");
var notif = document.querySelector(".notif");

function notification() {
  // Assuming "alert" and "notif" are defined elsewhere in your code
  alert.style.opacity = "1";
  alert.style.background = "rgba(103, 231, 171, 0.904)";
  alert.style.transform = "translateY(30px)"
  notif.innerHTML = "Correct OTP";

  // Hide the notification after 3 seconds
  setTimeout(function() {
    alert.style.opacity = "0";
  }, 2000);
}

function notific() {
  // Assuming "alert" and "notif" are defined elsewhere in your code
  alert.style.opacity = "1";
  alert.style.background = "red";
  alert.style.transform = "translateY(40px)"
  notif.innerHTML = "Incorrect OTP";

  // Hide the notification after 3 seconds
  setTimeout(function() {
    alert.style.opacity = "0";
  }, 2000);
}

var otp;
let generateOTP = () => {
  otp = Math.floor(100000 + Math.random() * 900000);
  document.getElementsByClassName("otp-inp")[0].innerText = `${otp}`;
};

document
  .getElementsByClassName("otp-btn")[0]
  .addEventListener("click", generateOTP);

// window.addEventListener("load", generateOTP);

function limitinput(element, maxlength) {
  if (element.value.length > maxlength) {
    element.value = element.value.substring(0, maxlength);
  }
};

function checkOTP() {
  var inputOTP = document.getElementById("inputlimit").value;
  // var convertotp = parseInt(inputOTP, 10);
  if (otp == inputOTP) {
    notification();
    // alert("Correct OTP")
    // location.reload();
  }
  else {
    // alert("OTP is incorrect");
    notific();
  }
}
