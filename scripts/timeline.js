///////////////
// VARIABLES //
///////////////

// year marker + numbers
var year_diff = DATA.timeline.end_year - DATA.timeline.start_year
var num_markers = year_diff / DATA.timeline.years_per_marker

// now marker
var now_marker = document.getElementById('now-marker')
var clicked_on_now_marker = false

// calculation of mouse position within timeline
var timeline_width = document.getElementById('timeline').scrollWidth
var browser_width = document.body.scrollWidth
var timeline_offset_left = document.getElementById('timeline').offsetLeft
var timeline_offset_right = timeline_offset_left + timeline_width


//////////////////
// CALCULATIONS //
//////////////////

function px_to_year(px)
{
    return (((DATA.timeline.end_year-DATA.timeline.start_year) / timeline_width) * px + DATA.timeline.start_year)
}

function year_to_px(year)
{
    return (((year - DATA.timeline.start_year) * timeline_width) / (DATA.timeline.end_year - DATA.timeline.start_year))
}


/////////////
// HELPERS //
/////////////

// clean timeline
function removeElementsByClass(element)
{
    let elements = document.getElementsByClassName(element)
    while(elements.length > 0)
    {
        elements[0].parentNode.removeChild(elements[0])
    }
}

///////////////////
// INIT TIMELINE //
///////////////////

function init_timeline()
{
    // cleanup timeline
    removeElementsByClass('year-marker')
    removeElementsByClass('year-number')

    // setup timeline
    var marker_it = 1
    for (var year_it = DATA.timeline.start_year; year_it < (DATA.timeline.end_year - DATA.timeline.years_per_marker); year_it += DATA.timeline.years_per_marker)
    {
        // create year markers + positioning 
        var year_marker = document.createElement('div')
        year_marker.classList.add('year-marker')
        year_marker.id = "ym" + year_it 
        year_marker.style.left = marker_it * timeline_width / num_markers
        document.getElementById('timeline').appendChild(year_marker)

        // create year numbers + positioning    
        var year_number = document.createElement('div')
        year_number.classList.add('year-number')
        year_number.id = "yn" + year_it
        year_number.innerHTML = year_it + DATA.timeline.years_per_marker
        year_number.style.left = marker_it * timeline_width / num_markers
        document.getElementById('timeline').appendChild(year_number)
        marker_it += 1
    }

}


///////////////////////
// MOVING NOW MARKER //
///////////////////////


// initially set now marker
now_marker.style.left = -now_marker.scrollWidth/2

// when clicking on Now Marker
// activate "move mode"
now_marker.onmousedown = function(event)
{
  clicked_on_now_marker = true
  mouse_pos_x_old = event.clientX
}

// while clicking on Now Marker (in "move mode")
// -> move Now Marker with the mouse
document.onmousemove = function(event)
{
  if (clicked_on_now_marker)
  {
    // calculate new mouse position
    // -> transfer to Now Marker
    var x_pos = event.clientX

    // ensure that Now Marker cannot "leave" timeline
    // = only move it if within timeline offsets left and right
    if (x_pos > timeline_offset_left && x_pos < timeline_offset_right)
    {
        // x position in timeline
        var x_pos_tl = x_pos - timeline_offset_left

        // actually re-set now marker (ensure marker stays in the centre)
        now_marker.style.left = x_pos_tl - now_marker.scrollWidth/2

        // test output in document
        document.getElementById('curr-pos').innerHTML = x_pos_tl
        document.getElementById('curr-year').innerHTML = Math.round(px_to_year(x_pos_tl))

        reset_elephant_on_map(px_to_year(x_pos_tl))
    }
  }
}

// stop moving now marker
document.onmouseup = function()
{
  clicked_on_now_marker = false
}

window.onresize = function()
{
    timeline_width = document.getElementById('timeline').scrollWidth
    browser_width = document.body.scrollWidth
    timeline_offset_left = document.getElementById('timeline').offsetLeft
    timeline_offset_right = timeline_offset_left + timeline_width
    init_timeline()
}

init_timeline()