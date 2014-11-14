angular.module('angular-mood', [])











.factory('MoodGrid', function() {

var moods = [ {
  "name" : "enraged",
  "valence" : -0.9,
  "arousal" : 0.9
}, {
  "name" : "panicked",
  "valence" : -0.7,
  "arousal" : 0.9
}, {
  "name" : "stressed",
  "valence" : -0.5,
  "arousal" : 0.9
}, {
  "name" : "jittery",
  "valence" : -0.3,
  "arousal" : 0.9
}, {
  "name" : "shocked",
  "valence" : -0.1,
  "arousal" : 0.9
}, {
  "name" : "surprised",
  "valence" : 0.1,
  "arousal" : 0.9
}, {
  "name" : "upbeat",
  "valence" : 0.3,
  "arousal" : 0.9
}, {
  "name" : "festive",
  "valence" : 0.5,
  "arousal" : 0.9
}, {
  "name" : "exhilarated",
  "valence" : 0.7,
  "arousal" : 0.9
}, {
  "name" : "ecstatic",
  "valence" : 0.9,
  "arousal" : 0.9
}, {
  "name" : "livid",
  "valence" : -0.9,
  "arousal" : 0.7
}, {
  "name" : "furious",
  "valence" : -0.7,
  "arousal" : 0.7
}, {
  "name" : "frustrated",
  "valence" : -0.5,
  "arousal" : 0.7
}, {
  "name" : "tense",
  "valence" : -0.3,
  "arousal" : 0.7
}, {
  "name" : "stunned",
  "valence" : -0.1,
  "arousal" : 0.7
}, {
  "name" : "hyper",
  "valence" : 0.1,
  "arousal" : 0.7
}, {
  "name" : "cheerful",
  "valence" : 0.3,
  "arousal" : 0.7
}, {
  "name" : "motivated",
  "valence" : 0.5,
  "arousal" : 0.7
}, {
  "name" : "inspired",
  "valence" : 0.7,
  "arousal" : 0.7
}, {
  "name" : "elated",
  "valence" : 0.9,
  "arousal" : 0.7
}, {
  "name" : "fuming",
  "valence" : -0.9,
  "arousal" : 0.5
}, {
  "name" : "frightened",
  "valence" : -0.7,
  "arousal" : 0.5
}, {
  "name" : "angry",
  "valence" : -0.5,
  "arousal" : 0.5
}, {
  "name" : "nervous",
  "valence" : -0.3,
  "arousal" : 0.5
}, {
  "name" : "restless",
  "valence" : -0.1,
  "arousal" : 0.5
}, {
  "name" : "energised",
  "valence" : 0.1,
  "arousal" : 0.5
}, {
  "name" : "lively",
  "valence" : 0.3,
  "arousal" : 0.5
}, {
  "name" : "enthusiastic",
  "valence" : 0.5,
  "arousal" : 0.5
}, {
  "name" : "optimistic",
  "valence" : 0.7,
  "arousal" : 0.5
}, {
  "name" : "excited",
  "valence" : 0.9,
  "arousal" : 0.5
}, {
  "name" : "anxious",
  "valence" : -0.9,
  "arousal" : 0.3
}, {
  "name" : "apprehensive",
  "valence" : -0.7,
  "arousal" : 0.3
}, {
  "name" : "worried",
  "valence" : -0.5,
  "arousal" : 0.3
}, {
  "name" : "irritated",
  "valence" : -0.3,
  "arousal" : 0.3
}, {
  "name" : "annoyed",
  "valence" : -0.1,
  "arousal" : 0.3
}, {
  "name" : "pleased",
  "valence" : 0.1,
  "arousal" : 0.3
}, {
  "name" : "happy",
  "valence" : 0.3,
  "arousal" : 0.3
}, {
  "name" : "focused",
  "valence" : 0.5,
  "arousal" : 0.3
}, {
  "name" : "proud",
  "valence" : 0.7,
  "arousal" : 0.3
}, {
  "name" : "thrilled",
  "valence" : 0.9,
  "arousal" : 0.3
}, {
  "name" : "repulsed",
  "valence" : -0.9,
  "arousal" : 0.1
}, {
  "name" : "troubled",
  "valence" : -0.7,
  "arousal" : 0.1
}, {
  "name" : "concerned",
  "valence" : -0.5,
  "arousal" : 0.1
}, {
  "name" : "uneasy",
  "valence" : -0.3,
  "arousal" : 0.1
}, {
  "name" : "peeved",
  "valence" : -0.1,
  "arousal" : 0.1
}, {
  "name" : "pleasant",
  "valence" : 0.1,
  "arousal" : 0.1
}, {
  "name" : "joyful",
  "valence" : 0.3,
  "arousal" : 0.1
}, {
  "name" : "hopeful",
  "valence" : 0.5,
  "arousal" : 0.1
}, {
  "name" : "playful",
  "valence" : 0.7,
  "arousal" : 0.1
}, {
  "name" : "blissful",
  "valence" : 0.9,
  "arousal" : 0.1
}, {
  "name" : "disgusted",
  "valence" : -0.9,
  "arousal" : -0.1
}, {
  "name" : "glum",
  "valence" : -0.7,
  "arousal" : -0.1
}, {
  "name" : "disappointed",
  "valence" : -0.5,
  "arousal" : -0.1
}, {
  "name" : "down",
  "valence" : -0.3,
  "arousal" : -0.1
}, {
  "name" : "apathetic",
  "valence" : -0.1,
  "arousal" : -0.1
}, {
  "name" : "at ease",
  "valence" : 0.1,
  "arousal" : -0.1
}, {
  "name" : "easygoing",
  "valence" : 0.3,
  "arousal" : -0.1
}, {
  "name" : "content",
  "valence" : 0.5,
  "arousal" : -0.1
}, {
  "name" : "loving",
  "valence" : 0.7,
  "arousal" : -0.1
}, {
  "name" : "fulfilled",
  "valence" : 0.9,
  "arousal" : -0.1
}, {
  "name" : "pessimistic",
  "valence" : -0.9,
  "arousal" : -0.3
}, {
  "name" : "morose",
  "valence" : -0.7,
  "arousal" : -0.3
}, {
  "name" : "discouraged",
  "valence" : -0.5,
  "arousal" : -0.3
}, {
  "name" : "sad",
  "valence" : -0.3,
  "arousal" : -0.3
}, {
  "name" : "bored",
  "valence" : -0.1,
  "arousal" : -0.3
}, {
  "name" : "calm",
  "valence" : 0.1,
  "arousal" : -0.3
}, {
  "name" : "secure",
  "valence" : 0.3,
  "arousal" : -0.3
}, {
  "name" : "satisfied",
  "valence" : 0.5,
  "arousal" : -0.3
}, {
  "name" : "grateful",
  "valence" : 0.7,
  "arousal" : -0.3
}, {
  "name" : "touched",
  "valence" : 0.9,
  "arousal" : -0.3
}, {
  "name" : "alienated",
  "valence" : -0.9,
  "arousal" : -0.5
}, {
  "name" : "miserable",
  "valence" : -0.7,
  "arousal" : -0.5
}, {
  "name" : "lonely",
  "valence" : -0.5,
  "arousal" : -0.5
}, {
  "name" : "disheartened",
  "valence" : -0.3,
  "arousal" : -0.5
}, {
  "name" : "tired",
  "valence" : -0.1,
  "arousal" : -0.5
}, {
  "name" : "relaxed",
  "valence" : 0.1,
  "arousal" : -0.5
}, {
  "name" : "chill",
  "valence" : 0.3,
  "arousal" : -0.5
}, {
  "name" : "restful",
  "valence" : 0.5,
  "arousal" : -0.5
}, {
  "name" : "blessed",
  "valence" : 0.7,
  "arousal" : -0.5
}, {
  "name" : "balanced",
  "valence" : 0.9,
  "arousal" : -0.5
}, {
  "name" : "despondent",
  "valence" : -0.9,
  "arousal" : -0.7
}, {
  "name" : "depressed",
  "valence" : -0.7,
  "arousal" : -0.7
}, {
  "name" : "sullen",
  "valence" : -0.5,
  "arousal" : -0.7
}, {
  "name" : "exhausted",
  "valence" : -0.3,
  "arousal" : -0.7
}, {
  "name" : "fatigued",
  "valence" : -0.1,
  "arousal" : -0.7
}, {
  "name" : "mellow",
  "valence" : 0.1,
  "arousal" : -0.7
}, {
  "name" : "thoughtful",
  "valence" : 0.3,
  "arousal" : -0.7
}, {
  "name" : "peaceful",
  "valence" : 0.5,
  "arousal" : -0.7
}, {
  "name" : "comfy",
  "valence" : 0.7,
  "arousal" : -0.7
}, {
  "name" : "carefree",
  "valence" : 0.9,
  "arousal" : -0.7
}, {
  "name" : "despairing",
  "valence" : -0.9,
  "arousal" : -0.9
}, {
  "name" : "hopeless",
  "valence" : -0.7,
  "arousal" : -0.9
}, {
  "name" : "desolate",
  "valence" : -0.5,
  "arousal" : -0.9
}, {
  "name" : "spent",
  "valence" : -0.3,
  "arousal" : -0.9
}, {
  "name" : "drained",
  "valence" : -0.1,
  "arousal" : -0.9
}, {
  "name" : "sleepy",
  "valence" : 0.1,
  "arousal" : -0.9
}, {
  "name" : "complacent",
  "valence" : 0.3,
  "arousal" : -0.9
}, {
  "name" : "tranquil",
  "valence" : 0.5,
  "arousal" : -0.9
}, {
  "name" : "cozy",
  "valence" : 0.7,
  "arousal" : -0.9
}, {
  "name" : "serene",
  "valence" : 0.9,
  "arousal" : -0.9
} ];

    function getRow(arousal) {
        return 10 - Math.ceil((arousal+1) * 5) ;
    } ;

    function getColumn(valence) {
        return Math.ceil((valence+1) * 5) - 1 ;
    } ;

    function getIndex(row, col) {
        return (row * 10) + col ;
    }

    function normalizeAngle(angle) {

        while (angle < 0) 
            angle = angle + 360 ;

        while (angle >= 360)
            angle = angle - 360 ;

        return angle ;
    } ;

    function normalizeDistance(distance) {

        if (distance > Math.sqrt(2))
            return Math.sqrt(2) ;

        return distance ;
    }

    function getAngle(valence, arousal) {

        if (valence == undefined)
            return null ;

        if (arousal == undefined)
            return null ;

        if (valence == 0 && arousal == 0)
            return null ;
        
        var radians = Math.atan2(valence,arousal) ;
        
        var degrees = radians * (180/Math.PI) ;

        return normalizeAngle(degrees) ;
    }

    function getQuadrant(valence, arousal) {

        if (valence >= 0)
            if (arousal >= 0)
                return "ne" ;  
            else
                return "se" ;
        else 
            if (arousal >= 0)
                return "nw" ;
            else
                return "sw" ;
    }

    //scale for mapping angles to colors
    var quadrantColors = {} ;

    //ne (yellow) quadrant
    quadrantColors["ne"] = d3.scale.linear()
        .domain([0,45,90])
        .range(["#ffb600", "#f6e700", "#d0e616"]) ;

    quadrantColors["se"] = d3.scale.linear()
        .domain([90,135,180])
        .range(["#77b621", "#229017", "#009348"]) ;

    quadrantColors["sw"] = d3.scale.linear()
        .domain([180,225,270])
        .range(["#039290", "#1a5da4", "#7b36c8"]) ;

    quadrantColors["nw"] = d3.scale.linear()
        .domain([270,315,360])
        .range(["#cd1e74", "#f1321a", "#ff7a00"]) ;

    var baseColor = "#fafafa" ;

    //determines how strongly we mix with grey in the center of the quadrant
    var lightenScale = d3.scale.linear()
        .domain([0,0.3, Math.sqrt(2)])
        .range([80,50,0]) ;


    return {

        getMoods : function() {
            return moods ;
        },

        getNearest: function(valence, arousal) {

            var row = getRow(arousal) ;
            var col = getColumn(valence) ;

            var index = getIndex(row, col) ;

            return moods[index] ;
        },

        getRowAndColumn: function(valence, arousal) {
            return [
                getRow(arousal),
                getColumn(valence)
            ] ; 

        }, 

        getAngle: function(valence, arousal) {
            return getAngle(valence, arousal) ;
        },

        getIntensity: function(valence, arousal) {

            return Math.sqrt(Math.pow(valence, 2) + Math.pow(arousal, 2));
        },

        getColor: function(valence, arousal) {

            var quadrant = getQuadrant(valence, arousal) ;

            var angle = this.getAngle(valence, arousal) ;

            var intensity = normalizeDistance(this.getIntensity(valence, arousal)) ;

            var color = tinycolor(quadrantColors[quadrant](angle))  ;

            color = tinycolor.mix(color, baseColor, lightenScale(intensity)) ;

            return color.toHexString() ;
        }
    }

}) 





.directive('moodCanvas', ["MoodGrid", function (MoodGrid) {

	
	return {
		restrict: 'E',
		scope: {
			mood:'='
		},
		link: function (scope, element, attrs) {

			var dimensions = {width:300, height: 300} ;

			var xScale = d3.scale.linear().domain([-1,1]).range([0,dimensions.width]) ;
			var yScale = d3.scale.linear().domain([-1,1]).range([dimensions.height,0]) ;

			var drag = d3.behavior.drag()
				.on("drag", clicked) ;

			var container = d3.select(element[0])
			   .append("div")
			   .classed("svg-container", true) ;

			var svg = container.append("svg")
				.attr("preserveAspectRatio", "xMinYMin meet")
			    .attr("cursor", "default")
			    .attr("viewBox", "0 0 300 300")
			    .classed("svg-content-responsive", true) ;

			var canvas = svg.append("rect")
			    .attr("class", "canvas")
			    .on("click", clicked)
			    .call(drag)
			    .style("pointer-events", "all")
			    .style("cursor", "pointer")
			    .style("fill", "none");

			var moodContainer = svg.append("g")
				.style("pointer-events", "none") ;

			var moods = moodContainer.selectAll(".mood")
				.data(MoodGrid.getMoods())
				.enter()
					.append("rect")
					.attr("class", ".mood")
					.attr("width", function(d) { return moodWidth(d) })
					.attr("height", function(d) { return moodHeight(d) })
					.attr("rx",function(d) { return moodCornerRadius(d) })
				    .attr("ry",function(d) { return moodCornerRadius(d) })
					.attr("x", function(d) { return moodX(d) })
					.attr("y", function(d) { return moodY(d) })
					.style("fill", function(d) { return MoodGrid.getColor(d.valence, d.arousal)}) ;

			var promptContainer = svg.append("g")
				.style("pointer-events", "none") 
				.attr("class", "prompts")
				.style("pointer-events", "none") ;

			var centralPromptContainer = promptContainer.append("g")
				.attr("class", "centralPrompt")

			centralPromptContainer.append("circle")
				.attr("r", 40) ;

			centralPromptContainer
				.append("text")
				.attr("text-anchor", "middle")
				.attr("y", -5)
				.text("plot") ;

			centralPromptContainer
				.append("text")
				.attr("text-anchor", "middle")
				.attr("dy",".71em")
				.attr("y", 5)
				.text("mood") ;


			var pHigh = promptContainer.append("text")
				.attr("text-anchor", "middle")
				.attr("dy",".71em")
				.text("high energy")
				.style("pointer-events", "none") ;

			var pLow = promptContainer.append("text")
				.attr("text-anchor", "middle")
				.text("low energy")
				.style("pointer-events", "none") ;

			var pBad = promptContainer.append("text")
				.attr("text-anchor", "start")
				.attr("dy",".35em")
				.text("bad")
				.style("pointer-events", "none") ;

			var pGood = promptContainer.append("text")
				.attr("text-anchor", "end")
				.attr("dy",".35em")
				.text("good")
				.style("pointer-events", "none") ;

			scope.$watch("mood", function() {
				redraw() ;
			},true) ;


			function clicked() {

				var coords = d3.mouse(this) ;

				var valence = xScale.invert(coords[0]) ;
				var arousal = yScale.invert(coords[1]) ;

				var mood = MoodGrid.getNearest(valence, arousal) ;

				scope.$apply(function() {
					scope.mood = mood ;
				}) ;
			}

			function redraw() {

				canvas
					.attr("width", dimensions.width)
				    .attr("height", dimensions.height) ;

				centralPromptContainer
					.attr("transform", "translate(" + dimensions.width/2 + "," + dimensions.height/2 + ")");

				pHigh
					.attr("x", dimensions.width/2)
					.attr("y", 5) ;

				pLow
					.attr("x", dimensions.width/2)
					.attr("y", dimensions.height - 5) ;

				pBad
					.attr("x", 5)
					.attr("y", dimensions.height/2) ;

				pGood
					.attr("x", dimensions.width-5)
					.attr("y", dimensions.height/2) ;

				moods
				    .transition()
				    .duration(500)
				    .attr("width", function(d) { return moodWidth(d) })
					.attr("height", function(d) { return moodHeight(d) })
					.attr("rx",function(d) { return moodCornerRadius(d) })
				    .attr("ry",function(d) { return moodCornerRadius(d) })
					.attr("x", function(d) { return moodX(d) })
					.attr("y", function(d) { return moodY(d) }) ;

				if (!scope.mood)
					promptContainer.attr("display", "block") ;
				else
					promptContainer.attr("display", "none") ;
			}


			function moodX(mood) {

				return xScale(mood.valence) -  moodWidth(mood)/2 ;
			}

			function moodY(mood) {

				return yScale(mood.arousal) - moodHeight(mood)/2 ;
			}

			function moodWidth(mood) {

				var min = Math.min(dimensions.width, dimensions.height) ;

				if (scope.mood) {
					if (scope.mood.name === mood.name)
						return (min/10) ;
					else
						return (min/10) * 0.5 ;
				} else {
					return dimensions.height/10 ;
				}
			}

			function moodHeight(mood) {

				if (scope.mood) 
					return moodWidth(mood) ;
				else
					return dimensions.height/10 ;
			}

			function moodCornerRadius(mood) {

				if (scope.mood)
					return moodWidth(mood) ;
				else
					return 0 ;
			}



		}

	}
}])