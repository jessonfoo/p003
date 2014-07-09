$(document).ready(function(){
 
//RELEASE 0: 
  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': 'white'})

//RELEASE 1:
  //Add code here to select elements of the DOM 
 
 bodyElement = $('body')
//RELEASE 2: 
  // Add code here to modify the css and html of DOM elements
$('h1').css({"color": "grey",
			"font-weight":"bold",∏
  			 "border": "2px solid #000",
  			 "padding": "10px"})

$('.mascot h1').html("Mule Deer")
 
//RELEASE 3: Event Listener
  // Add the code for the event listener here 
 $('img').on('mouseover', function(e){
    e.preventDefault()
    $(this).attr('src', 'https://img0.etsystatic.com/024/0/7721491/il_fullxfull.491487214_rzhn.jpg')
 })
 $('img').on('mouseout', function(e){
     e.preventDefault()
    $(this).attr('src', 'http://ebmedia.eventbrite.com/s3-build/images/1824099/37120493192/1/logo.png')
  })
//RELEASE 4 : Experiment on your own
 
  $('img').css({
  "width": "40%",
  "display":'block',
  "margin-left": "auto",
  "margin-right": "auto",
})
 
})  // end of the document.ready function: do not remove or write DOM manipulation below this.