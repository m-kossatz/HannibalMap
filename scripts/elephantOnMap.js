// Add elephant marker on map
var elephant_icon = new L.Icon(
  {
    iconUrl: "../images/elephant_full.png",
    iconSize: DATA.map.markers.elephant.iconSize,
    iconAnchor: DATA.stations[0].location,
  }
)
var elephant_marker = new L.marker(DATA.stations[0].location)
elephant_marker.setIcon(elephant_icon);
elephant_marker.addTo(map);

// Get all stations and transform date into JS Date object
/*DATA.stations.forEach((station) => 
{
    // https://stackoverflow.com/questions/11291206/passing-an-array-to-the-javascript-date-constructor-is-it-standard
    station.date[1] = station.date[1]-1
    station.date = new Date(...station.date)
})
*/

// Set the elephant on the map based on the now marker on the timeline
// -> temporal progress = spatial progress

var last_last_station = DATA.stations[0];

function reset_elephant_on_map(new_date)
{
    // PREPARATION
    // 1) transform year to date
    // N. B. we assume that each month has 30 days
    // Let's hope nobody ever questions that ;-)
    var year = parseInt(new_date)
    var day_of_the_year = 360 * Math.abs(new_date - year)
    var month = parseInt(day_of_the_year / 30)
    var day = parseInt(day_of_the_year - 30 * month)
    var now_date = new Date(year, month-1, day)

    // CALCULATE TEMPORAL PROGRESS
    // get last and next station from DATA
    var last_station = DATA.stations[0]
    var next_station = DATA.stations[0]

    for (var station of DATA.stations)
    {
        if (station.date < now_date)
        {         
            last_station = station
        }
        else
        {
            next_station = station
            break
        }
    }

    if (last_last_station != last_station)
    {
        last_last_station = last_station
        console.log("NEXT STATION!", last_station.name)
    }

    // console.table([{name: "next station", value: next_station.date.getTime()}, {name:"last station", value: last_station.date.getTime()}, {name: "Time current", value: now_date.getTime()},{name:"is Between", value: `${next_station.date.getTime()>now_date.getTime()&&last_station.date.getTime()<now_date.getTime() ? "Yes": "No"}`},{name: "Last = Next", value: ``}].reduce((acc, {name, ...x}) => { acc[name] = x; return acc}, {}))

    // 3) calculate progress from last to next station (based on dates) [0 .. 1]
    // (current_time - last_station_time) / (next_station_time - last_station_time)
    var progress = 1 - ((now_date.getTime()-last_station.date.getTime())/(next_station.date.getTime()-last_station.date.getTime()))
 
     
    // console.table([{name: "Time next station", value: next_station.date.getTime()}, {name:"Time last station", value: last_station.date.getTime()}, {name: "Time current", value: now_date.getTime()}, {name: "Progress", value: progress}].reduce((acc, {name, ...x}) => { acc[name] = x; return acc}, {}))
    // https://stackoverflow.com/questions/49618069/remove-index-from-console-table
    // more things https://www.w3schools.com/jsref/obj_console.asp
    console.log(progress)

    // 4) get lat/lng coordinates for elephant on map
    var lat = location_from_x(last_station.location[0], next_station.location[0], progress)
    var lng = location_from_x(last_station.location[1], next_station.location[1], progress)
    
    // 5) move elephant on map between two stations by same progress
    elephant_marker.setLatLng(new L.LatLng(lat, lng))

}

function location_from_x (loc1, loc2, x)
{
     return ((loc2 - loc1) * x) + loc1
}