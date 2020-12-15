function GetBookings() {
    let url = 'https://dashboard.sheety.co/projects/5fd8a94536fefc7e9ca3b134/sheets/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            //Do somrthing with the data
            console.log(json.bookings);
            let bookingList = getElementById("bookingList");
            bookingList.innerHTML = "";
            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;

                bookingList.innerHTML += gId + "-" + gName + ", " + gEmail + ", pax:" + "<br>";

            }
        });



}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function () {
    GetBookings();
});