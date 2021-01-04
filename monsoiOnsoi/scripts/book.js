function BookNow(guestName, guestTel, guestDate, guestTime, guestPax, guestRemarks) {
    let url = 'https://api.sheety.co/ea5259d345192b979c0435d911586ff7/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            tel: guestTel,
            date: guestDate,
            time: guestTime,
            pax: guestPax,
            remarks: guestRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.booking.name + " added!");
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userTel").value;
        let userEmail = document.getElementById("userDate").value;
        let userEmail = document.getElementById("userTime").value;
        let userPax = document.getElementById("userPax").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userTel, userDate, userTime, userPax, userRemarks);
    });
});