// JavaScript Document, Own JS-Document


// The TL.Timeline constructor takes at least two arguments:
      // the id of the Timeline container (no '#'), and
      // the URL to your JSON data file or Google spreadsheet.
      // the id must refer to an element "above" this code,
      // and the element must have CSS styling to give it width and height
      // optionally, a third argument with configuration options can be passed.
		var options = {
            start_at_end: false,
            timenav_height: 400,
			//optimal_tick_width: 195
        };

      	var timeline = new TL.Timeline('timeline-embed','json/timeline.json', options);

// Load details, present in modal window ===========================================
var jahre;
$.ajax({
	type: 'GET',
	cache: false,
	url: 'json_details/details.json',
	dataType: 'json',
	success: function (daten) {
		jahre = daten;
	}
});



// Function triggered by buttons in timeline.json. Parameter is year, eg 1884
function modalOpen(para) {
	// Display the modal window
	$('#m_page').css('display','block');

	// Content dependig on parameter, In detail.json the years are with y_
	$('#m_html').html(jahre['y_' + para]);

	// When the user clicks on (x), close the modal window
	$('#m_close').click(function() {
		$('#m_page').css('display','none');
	});
}
