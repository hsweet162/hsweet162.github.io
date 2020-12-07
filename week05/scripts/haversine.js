function haversine(lat1,lon1,lat1,lat2){
    let R = 6371; //earth radiius in KM
    let dLat = (lat2-lat1).toRad();
    let dLon = (lon2-lon1).toRad();
    let lat1 = lat1.toRad();
    let lat2 = lat2.toRad();

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return roundVal(d);

}

if(typeof Number.prototype.toRad == "undefined"){
    Number.prototype.toRad = function(){
        return this * Math.PI/180;
    }
}

function roundVal(val){
    let dec = 2;
    let result = Math.round(val * Math.pow(10,dec)) / Math.pow(10, dec);

    return result;
}

function calculateDistances(lat, lon){
    let d1 = haversine (lat, lon, 2.922562, 101.650965); //de pulze, cyberjaya
    let d2 = haversine(lat, lon, 3.073065, 101.607787) // sunway pyramid
    let d3 = haversine(lat, lon, 3.158761, 101.714524); //klcc

    return[d1,d2,d3];
}