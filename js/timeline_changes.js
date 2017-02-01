// JavaScript Document, Own JS-Document


// The TL.Timeline constructor takes at least two arguments:
      // the id of the Timeline container (no '#'), and
      // the URL to your JSON data file or Google spreadsheet.
      // the id must refer to an element "above" this code,
      // and the element must have CSS styling to give it width and height
      // optionally, a third argument with configuration options can be passed.
		var options = {
            start_at_end: false,
            timenav_height: 80,
			//optimal_tick_width: 195
        };

      	var timeline = new TL.Timeline('timeline-embed','json/timeline.json', options);