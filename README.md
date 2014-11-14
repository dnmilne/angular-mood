#angular-mood

This module provides tools for helping users specify their mood in an intuitive way.

* **mood-canvas**: a 10 by 10 grid of emotions that are spatially organized and color coded to make them easy to navigate. The interface is modeled after the [MoodMeter app](http://moodmeterapp.com/) conceived by Dr Marc Brackett at the [Yale Center for Emotional Intelligence](http://www.ei.yale.edu/ruler/the-anchors-of-emotional-intelligence).

* **mood-grid**: a service for accessing the data behind the mood grid. This consists of 100 moods that have been plotted on the [circumplex model of affect](http://en.wikipedia.org/wiki/Emotion_classification#Circumplex_model). Each mood has a valence score ranging from unpleasant (-1) to pleasant (+1) and an arousal score ranging from low energy (-1) to high energy (+1). This service also provides methods for color-coding the emotions.

## Dependencies

This requires [AngularJS](https://angularjs.org/). In addition, you will need:

 * [D3](http://d3js.org/)
 * [TinyColor](http://bgrins.github.io/TinyColor/)


## Installation

1. Install with bower using `bower install angular-mood`

2. Include `angular-mood.js` and `angular-mood.css`. They should be located in `bower_components/angular-mood`

3. Include the dependencies `d3.min.js` (which should be in `bower_components/d3`) and `tinycolor.js` (`bower_components/tinycolor`)

4. Add `angular-mood` as a module dependency to your app


## Usage

### The mood canvas

The mood canvas directive can be created as:

    <mood-canvas mood="mood" />

Where mood is a simple json object like:

	{
	  "name" : "cozy",
	  "valence" : 0.7,
	  "arousal" : -0.9
	}

If the mood is undefined, the widget will show a prompt that explains how to select the mood. Otherwise it will display the selected mood.


### The mood grid

The MoodGrid service provides the following methods 

* `MoodGrid.getMoods()` returns an array of all 100 moods.
* `MoodGrid.getNearestMood(valence, arousal)` returns the closest mood to the given coordinates.
* `MoodGrid.getRowAndColumn(valence, arousal)` returns an array containing row and column indexes nearest the given coordinates.
* `MoodGrid.getColor(valence, arousal)` returns the appropriate color (as a hex string) for the given coordinates.







