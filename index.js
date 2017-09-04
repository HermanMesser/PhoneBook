/**
 * Created by admin on 03.09.2017.
 */
window.onload=function () {


//Buttons
    var listElementBtn = document.getElementById("list-element");
    var addElementBtn = document.getElementById("add-element");
    var addBtn = document.getElementById("Add");
    var cancelBtn = document.getElementById("Cancel");

//Forms
    var divEnterForm = document.getElementById("enterForm");
    var divId1Form=document.getElementById("id1");

//Others
    var contacts = {
        name: "",
        lastName: "",
        phone: "",
        email: ""
    };
    var phoneBook = [];

    addElementBtn.addEventListener("click", function () {
        divEnterForm.style.display = "block";
        divId1Form.style.display="none";
    });
    cancelBtn.addEventListener("click", function () {
        divEnterForm.style.display = "none";
    });
    listElementBtn.addEventListener("click", function () {
        divEnterForm.style.display = "none";
        divId1Form.style.display="block";
    })

    document.getElementById("Add").onclick = function () {
        contacts.lastName = document.getElementById("lastName").value;
        contacts.name = document.getElementById("name").value;
        contacts.phone = document.getElementById("phone").value;
        contacts.email = document.getElementById("email").value;
        var i = phoneBook.length;
        phoneBook[i] = contacts;
        localStorage.setItem("id" + 1, JSON.stringify(phoneBook));
        eraseForm();

    };
    function eraseForm() {
        var formFields = document.querySelectorAll(".field");
        for(var i in formFields){
            formFields[i].value = "";
        };
    };
    listElementBtn.addEventListener("click", function () {

        phoneBook=JSON.parse(localStorage["id1"]);
        var str="";
        for(var n in phoneBook){
            str +="<br>";
            str += '<div class="lastname"><p>' + phoneBook[n].lastName + '</p></div>';
            str += '<div class="name"><p>' + phoneBook[n].name + '</p></div>';
            str += '<div class="phone"><p>' + phoneBook[n].phone + '</p></div>';
            str += '<div class="email"><p>' + phoneBook[n].email + '</p></div>';
            str += "<br><br>"
        };
        document.getElementById("id1").innerHTML=str;

    });
};
