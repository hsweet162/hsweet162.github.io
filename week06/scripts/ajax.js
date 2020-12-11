function getRandomUser(){
    let xhttp = new XMLHttpRequest(); //create request obj

    xhttp.onreadystatechange = function(){
        if(this.readystate == 4 && this.status == 200){
            let data = JSON.parse(this.response);
            let elFirstName = document.getElementById("firstName");
            let elLastName = document.getElementById("lastName");
            let elJsonResult = document.getElementById("jsonResult");
            let elUserImage = document.getElementById("user image");
            let elPhone = document.getElementById("phone");
            let elAddress = document.getElementById("address");
            let elEmail = document.getElementById("email");

            elFirstName.innerHTML = data.results[0].name.first;

            elJsonResult.innerHTML = this.response;
        }
    }

    xhttp.open("GET", "https://randomuser.me/api/", true);
    xhttp.send();
}

let elGetRandomUser = document.getElementById("getRandomUserBtn");
elGetRandomUser.addEventListener("click", function(){
    getRandomUser();
});