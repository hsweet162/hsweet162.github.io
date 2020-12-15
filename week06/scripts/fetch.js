function GetBookings() {
    let url = "https://dashboard.sheety.co/projects/5fd8a94536fefc7e9ca3b134/sheets/bookings"
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            //Do somrthing with the data
            console.log(json.bookings);
        });



}