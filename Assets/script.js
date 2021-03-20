// Declare variables for time
var currentDate = moment().format('LLLL');


// Use clear all tasks button
function clearTask() {
    localStorage.clear();
    location.reload();
};

// Use textKey to acces local storage
function getLocalStorage(textKey) {
    let value = localStorage.getItem(textKey);
    if (value) {
        $(`#text${textKey}`).text(value);
    }
};

// Load schedule for current day and time
$(document).ready(function () {
    $("#currentDay").text(moment().format('LLLL'));
    var currentHour = moment().hours();
    for (let i = 9; i < 18; i++) {
        var rowContain = $(`<div data-time=${i} id='${i}' class="row time-block"></div>`);
        var hourTime = $('<div class="col-md-1 hour">' + formatAMPM(i) + '</div>');

// Fix for AM/PM hours
        function formatAMPM(hours) {
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            return hours + ampm;
        }
    formatAMPM();

        // Create the TEXT AREA with color changes by time
        var columnText = $(`<textarea id=text${i} class="col-md-10 description" placeholder="Enter task input here..."></textarea>`);
        if (i == currentHour) {
            columnText.addClass("present");
        } else if (currentHour > i) {
            columnText.addClass("past");
        } else if (currentHour < i) {
            columnText.addClass('future');
        };
        // Create the SAVE button
        var saveButton = $(`<button id=${i} class="col-xs-1 btn saveBtn fas fa-save"></button>`);

        // Commit append container by time
        $(".container").append(rowContain);
        rowContain.append(hourTime);
        rowContain.append(columnText);
        rowContain.append(saveButton);

        getLocalStorage(i);
    }
    //  Save button function to local storage
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function () {
        let eventId = $(this).attr('id');
        let eventText = $(this).siblings('.description').val();
        localStorage.setItem(eventId, eventText);
    });
});