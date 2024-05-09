const iframe1 = document.getElementById("iframe1");

// Get the modal
var modalDropdown = document.getElementById("myModalDropdown1");

// Get the button that opens the modal
var linkDropdown1 = document.getElementById("dropdown1");
var linkDropdown2 = document.getElementById("dropdown2");
var linkDropdown3 = document.getElementById("dropdown3");
var linkDropdown4 = document.getElementById("dropdown4");
var linkDropdown5 = document.getElementById("dropdown5");
var linkDropdown6 = document.getElementById("dropdown6");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeDropdown1")[0];

// When the user clicks the button, open the modal
linkDropdown1.onclick = function () {
  iframe1.src = "https://takialmufrad.github.io/Exylance/";
  modalDropdown.style.display = "block";
};
linkDropdown2.onclick = function () {
  iframe1.src = "https://takialmufrad.github.io/Age-calculator/";
  modalDropdown.style.display = "block";
};
linkDropdown3.onclick = function () {
  iframe1.src = "https://takialmufrad.github.io/to-do-app/";
  modalDropdown.style.display = "block";
};
linkDropdown4.onclick = function () {
  iframe1.src = "https://takialmufrad.github.io/cps-counter/";
  modalDropdown.style.display = "block";
};
linkDropdown5.onclick = function () {
  iframe1.src = "https://takialmufrad.github.io/aimassist/";
  modalDropdown.style.display = "block";
};
linkDropdown6.onclick = function () {
  iframe1.src = "https://takialmufrad.github.io/tictactoe/";
  modalDropdown.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalDropdown.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var videoNum = 1;

const videoButton = document.getElementById("videoButton");
const video = document.getElementById("myVideo");

videoButton.addEventListener("click", () => {
  if (videoNum === 1) {
    video.src = "russel2.mp4";
    videoNum = 2;
  } else {
    video.src = "russel.mp4";
    videoNum = 1;
  }
});

function myFunction() {
  var x = document.getElementById("buttoncontent1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.querySelector(".contact-btn");
  const contactInfo = document.querySelector(".contact-info");

  // Event listener for hovering on the contact button
  contactBtn.addEventListener("mouseenter", function () {
    contactInfo.style.right = "0";
  });

  // Event listener for moving mouse out of the contact button
  contactBtn.addEventListener("mouseleave", function () {
    contactInfo.addEventListener("mouseleave", function () {
      contactInfo.style.right = "-300px";
    });
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function () {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};


// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function () {
  modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal
btn4.onclick = function () {
  modal4.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span4.onclick = function () {
  modal4.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};

// Get the modal
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal
btn5.onclick = function () {
  modal5.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span5.onclick = function () {
  modal5.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
};

// Get the modal
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal
btn6.onclick = function () {
  modal6.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span6.onclick = function () {
  modal6.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
};
