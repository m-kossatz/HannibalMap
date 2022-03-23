const DATA =
{
    "map":
    {
        "viewport_center": [41, 7.8],
        "zoom_level": 5,
        "tiles":
        {
            "tileUrl": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
            "attribution": "Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS",
            "maxZoom": 9,
            "minZoom": 4
        },
        "markers":
        {
            "sticks":
            {
                "iconUrl": "../images/stick.png",
                "iconSize": [25, 41],
                "iconAnchor": [12, 41],
                "popupAnchor": [1, -34],
            },
            "elephant":
            {
                "iconUrl": "../images/elephant.png",
                "iconSize": [35, 35],
                "iconAnchor": [35, 35],
            }
        }
    },
    "timeline":
    {
        "start_year": -220,
        "end_year": -200,
        "years_per_marker": 2
    },
    /* Station structure
        {
            name: NAME
            location: [LNG, LAT]
            date: [YEAR, MONTH, DAY]
        }    
    */
    "stations":
    [
        {
            "name": "Carthago Nova",
            "location": [37.601834414256636, -1.0711706486532553],
            "date": [-218,01,01,] // -218
        },
        {
            "name": "Saguntum",
            "location": [39.6833333, -0.2833333],
            "date": [-218,04,04] // -218
        },
        {
            "name": "Orange (Rhone)",
            "location": [44.125927, 4.813990],
            "date": [-218,09,09] // -218-09
        },
        {
            "name": "Ticinus",
            "location": [46.484728, 8.404414],
            "date": [-218,11,11] //-218
        },
        {
            "name": "Trebia",
            "location": [44.766141, 9.443817],
            "date": [-218,12,18] // -218
        },  
        {
            "name": "Trasimener See",
            "location": [43.163432, 12.059825],
            "date": [-217,06,24] // -217
        },
        {
            "name": "Ager Falernus",
            "location": [41.109720, 14.847379],
            "date": [-217,09,09] // -217
        },
        {
            "name": "Molise Geronium",
            "location": [41.695157, 14.181965],
            "date": [-217,12,12] // -217
        },
        {
            "name": "Cannae",
            "location": [41.286874, 16.149796],
            "date": [-216,08,02] // -216
        },
        {
            "name": "Nola",
            "location": [40.974004, 14.529253],
            "date": [-216,12,12] // -216
        },
        {
            "name": "Tarentum",
            "location": [40.454335, 17.269052],
            "date": [-212,03,03] // -212
        },
        {
            "name": "Capua",
            "location": [41.100691, 14.211809],
            "date":[-212,06,06] //-212
        },
        {
            "name": "Silarus",
            "location": [40.4944631266102, 14.990760038679674],
            "date": [-212,09,09] // -212
        },
        {
            "name": "Herdonia",
            "location": [41.318611, 15.625],
            "date": [-212,12,12] // -212
        },
        {
            "name": "Numistro",
            "location": [40.75, 15.483333],
            "date": [-210,01,01] // -210
        },
        {
            "name": "Asculum",
            "location": [41.202498, 15.562824],
            "date": [-209,01,01] // -209
        },
        {
            "name": "Grumentum",
            "location": [40.277160, 15.872082],
            "date": [-207,01,01] //-207
        },
        {
            "name": "Rhegium",
            "location": [38.115711, 15.667774],
            "date": [-204,01,01] //-204
        },
        {
            "name": "Croton",
            "location": [39.076162, 17.121775],
            "date": [-204,06,06] // -204
        },
        {
            "name": "Zama",
            "location": [36.404104, 9.669764],
            "date": [-202,10,19] // -202
        },
    ],
    "route": [
        [37.601834, -1.07117], // pin Carthago Nova
        [38.172773, -1.300765],
        [38.928850, -1.190901],
        [39.388861, -0.806380],
        [39.683333, -0.28333], // pin Saguntum
        [40.935245, 0.768561],
        [41.926205, 2.917972],
        [43.259013, 2.901275],
        [44.125927, 4.813990], // pin Orange (Rhone)
        [46.484728, 8.404414], // pin Ticinus
        [45.753310, 8.489149],
        [45.194779, 8.945081],
        [44.766141, 9.443817], // pin Trebia
        [43.899912, 11.745965],
        [43.163432, 12.05982], // pin Trasimener See
        [41.869619, 13.732972],
        [41.109720, 14.847379], // pin Ager Falernus
        [41.695157, 14.181965], // pin Molise Geronium
        [41.286874, 16.14979], // pin Cannae
        [40.974004, 14.529253], // pin Nola
        [40.454335, 17.26905], // pin Tarentum
        [41.100691, 14.21180], // pin Capua (I)
        [40.4944631266102, 14.990760038679674], //pin Silarus
        [41.318611, 15.625], // pin Herdonia (I)
        [41.100691, 14.21180], // pin Capua (II)
        [41.318611, 15.625], // pin Herdonia (II)
        [40.75, 15.483333], //pin Numistro
        [41.202498, 15.562824], // pin Asculum
        [40.454335, 17.26905], // pin Tarentum (II)
        [40.277160, 15.872082], // pin Grumentum    
        [39.540409, 16.409926],
        [39.076162, 17.12177], // pin Croton
        [38.874421, 16.466246],
        [38.344031, 16.129902],
        [38.115711, 15.66777], // pin Rhegium
        [38.344031, 16.129902],
        [38.874421, 16.466246],
        [39.076162, 17.12177], // pin Croton
        [39.053076, 17.301207],
        [37.260002, 17.458451],
        [35.572278, 15.239593],
        [34.975544, 12.654797],
        [36.404104, 9.669764], // pin Zama
    ]
}