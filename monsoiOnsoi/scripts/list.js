function GetBookings() {
    let url = 'https://api.sheety.co/ea5259d345192b979c0435d911586ff7/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
            let bookingList = document.getElementById("booking-list");
            let bookingIds = [];

            //clear the table rows
            for (let k = bookingList.rows.length - 1; k > 0; k--) {
                bookingList.deleteRow(k);
            }

            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gTel = json.bookings[i].tel;
                let gDate = json.bookings[i].date;
                let gTime = json.bookings[i].time;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;
                let gRemarks = json.bookings[i].remarks;
                let buttonId = "delete" + gId;

                let row = bookingList.insertRow(bookingList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gTel;
                row.insertCell(3).innerHTML = gDate;
                row.insertCell(4).innerHTML = gTime;
                row.insertCell(5).innerHTML = gPax;
                row.insertCell(6).innerHTML = gRemarks;
                row.insertCell(7).innerHTML = "<button id='" + buttonId + "' class='btn btn-danger'>Delete</button>";

                bookingIds.push(buttonId);

            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");
                    DeleteBooking(theId);
                });
            }
        });
}

window.addEventListener("load", function () {
    document.getElementById("refreshList").addEventListener("click", function () {
        GetBookings();
    });

});

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/ea5259d345192b979c0435d911586ff7/bookingApp/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })

        .then((response) => {
            GetBookings();
        });
}

function replaceUndefined(vl) {
    if (typeof (vl) === "undefined") {
        return "0"; // return 0 as replace, and end function execution
    }
    return v1; // the above state was false, functions continues and return original value
};
