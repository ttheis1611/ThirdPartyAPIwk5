
var currentDate = document.getElementById('currentDay');
 currentDate.innerHTML = moment().format('LLLL');

console.log(moment().format('LLLL'));


//$(".saveBtn").click(saveClick);
var timesArr = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];
$(function() {
    $(timesArr).each(function(index) {
        $('<section').append('row');
        $('<div>').addClass('hour').text(timesArr);
        //$('<section').append('row');
    //var rowBlock = $('<section>').addClass('row');
    //var timeBlock = $('<div>').addClass('col-md-1 hour').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
   // timeBlock.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    //var taskBlock = $('<textarea>').addClass('col-md-10 description');
    //var saveButton = $('<button>').addClass('col-xs-1 btn saveBtn').html('<i class="fas fa-save"></i>');
})    
console.log(timesArr);
});


function colorChange() {
    $('textarea').each(function () {
        var currentHour = parseInt(moment().hours());
        var textData = $('textarea').data('time');
        if (textData < currentHour) {
            $('textarea').removeClass("present");
            $('textarea').removeClass("future");
            $('textarea').addClass("past");
           
        }
        else if (textData === currentHour) {
            $('textarea').removeClass("past");
            $('textarea').removeClass("future");
            $('textarea').addClass("present");
        }
        else {
            $('textarea').removeClass("past");
            $('textarea').removeClass("present");
            $('textarea').addClass("future");
        }
        console.log(currentHour);
        
    });
};
colorChange();


// $('.saveBtn').on('click', function() {

//     localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
// });