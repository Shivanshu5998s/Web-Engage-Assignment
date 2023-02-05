var userdata = JSON.parse(localStorage.getItem("user-list"));

displaydata(userdata);

// “Thanks a ton for taking out your precious time and for completing the survey
// Email Address <Print EMAIL-ID dynamically given in the first page by the user>
// Contact Number <Country Code>-<Mobile Number>”

function displaydata(userdata) {

    alert("Data added successfully");

    userdata.map(function (elem, index, array) {

        var paragraph = document.createElement("p");
        paragraph.innerText = `“Thanks a ton for taking out your precious time and for completing the survey Email Address ${elem.email} Contact Number ${elem.code}-${elem.number}                                                                                                                                                                                  ”`

        document.querySelector("body").append(paragraph);
    })
}
