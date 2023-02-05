document.querySelector("form").addEventListener("submit", myform);

var user = JSON.parse(localStorage.getItem("user-list")) || [];
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function myform(event) {

    event.preventDefault();

    var email = document.querySelector("#email_address").value.match(mailformat);
    var number = document.querySelector("#mobile_number").value;
    var code = document.querySelector("#code").value;

    if (email === null || email == "") {
        alert("Please enter a valid email");
    }
    else if (number === null || number < 10) {
        alert("Please enter a 10 digit valid mobile number");
    }
    else {
        window.location.href = "details.html";
        // pagechange()
    }

    // function pagechange() {
    //     location.href = "./details.html"
    // }

    console.log(email, number, code);

    var obj = {
        email: email,
        number: number,
        code: code
    };

    user.push(obj);

    localStorage.setItem("user-list", JSON.stringify(user));
    // window.location.reload();
}
