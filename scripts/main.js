///////////////////////
// FUNCTIONS FOR ALL //
///////////////////////

function test_output(strings)
{
    document.getElementById('test').innerHTML = strings.join(" ")
}


/////////////////////////
// MAIN PROGRAM – GO ! //
/////////////////////////

// for each station: check if station is BEFORE next station

DATA.stations.forEach((station) => 
{
    // https://stackoverflow.com/questions/11291206/passing-an-array-to-the-javascript-date-constructor-is-it-standard
    station.date[1] = station.date[1]-1
    station.date = new Date(...station.date)
})

for (let i=0;i<DATA.stations.length;i++) {
    if (DATA.stations[i]!=undefined&&DATA.stations[i+1]!=undefined) {
    if (DATA.stations[i].date.getTime()<DATA.stations[i+1].date.getTime()) {
        console.log(DATA.stations[i].name, "is before")
    } else {
        console.warn(DATA.stations[i].name, "is not before")
    }
    } else {
        console.warn(DATA.stations[i].name, "is last Station")
    }
}