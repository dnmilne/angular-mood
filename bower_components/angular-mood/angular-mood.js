angular.module('angular-mood', [])











.factory('MoodData', function() {

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

    var colors = {
      dark:{},
      light:{}
    }

    //color scales for dark background
    colors.dark.ne = d3.scale.linear()
        .domain([0,45,90])
        .range(["#ffb600", "#f6e700", "#d0e616"]) ;

    colors.dark.se = d3.scale.linear()
        .domain([90,135,180])
        .range(["#77b621", "#229017", "#009348"]) ;

    colors.dark.sw = d3.scale.linear()
        .domain([180,225,270])
        .range(["#039290", "#1a5da4", "#7b36c8"]) ;

    colors.dark.nw = d3.scale.linear()
        .domain([270,315,360])
        .range(["#cd1e74", "#f1321a", "#ff7a00"]) ;

    colors.dark.baseColor = "#fafafa" ;



    //color scales for light background
    colors.light.ne = d3.scale.linear()
        .domain([0,45,90])
        .range(["#ffae00", "#f1d30b", "#c7d307"]) ;

    colors.light["se"] = d3.scale.linear()
        .domain([90,135,180])
        .range(["#77b621", "#229017", "#009348"]) ;

    colors.light["sw"] = d3.scale.linear()
        .domain([180,225,270])
        .range(["#039290", "#1a5da4", "#7b36c8"]) ;

    colors.light["nw"] = d3.scale.linear()
        .domain([270,315,360])
        .range(["#cd1e74", "#f1321a", "#ff7a00"]) ;    

    colors.light.baseColor = "#bbbbbb" ;

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

        getColor: function(valence, arousal, background) {

            var bg = background ;
            if (!bg)
              bg = 'light' ;

            var quadrant = getQuadrant(valence, arousal) ;

            var angle = this.getAngle(valence, arousal) ;

            var intensity = normalizeDistance(this.getIntensity(valence, arousal)) ;

            var color = tinycolor(colors[bg][quadrant](angle))  ;

            color = tinycolor.mix(color, colors[bg].baseColor, lightenScale(intensity)) ;

            return color.toHexString() ;
        }
    }

}) 





.directive('moodCanvas', ["MoodData", function (MoodData) {

  var defaultConfig = {
    showAxii : true,
    showPrompt : true,
    showSquares : true,
    readOnly : false,
    toggle: true,
    background: "light"
  } ;
	
	return {
		restrict: 'E',
		scope: {
			selected:'=?',
      hovered:'=?',
      counts:'=?',
      config:'=?'
		},
		link: function (scope, element, attrs) {

      var conf = defaultConfig;


			var dimensions = {width:300, height: 300} ;
      var cellWidth = dimensions.width/10 ;

			var xScale = d3.scale.linear().domain([-1,1]).range([0,dimensions.width]) ;
			var yScale = d3.scale.linear().domain([-1,1]).range([dimensions.height,0]) ;

      //used to scale radius of circles, based on mood count
      //need to know max mood count to set domain
      var rScale = d3.scale.linear().range([0.3*cellWidth, 0.8*cellWidth]) ;

			var drag = d3.behavior.drag()
        .on("dragstart", dragstarted)
				.on("drag", dragged) ;

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
          .on("mousemove", hovered)
          .on("mouseout", unhovered)
			    .call(drag)
			    .style("pointer-events", "all")
			    .style("fill", "none");

			var moodContainer = svg.append("g")
				.style("pointer-events", "none") ;

			var mood = moodContainer.selectAll(".mood")
				.data(MoodData.getMoods())
				.enter()
          .append("g")
            .attr("class", ".mood") ;

      var moodFill = mood
				.append("rect")
					.attr("width", moodWidth)
					.attr("height", moodHeight)
					.attr("rx", moodCornerRadius)
				  .attr("ry", moodCornerRadius)
					.attr("x", moodX)
					.attr("y", moodY)
					.style("fill", moodColor) ;

      var moodHalo = mood
        .append("circle")
          .attr("cx", function(d) { return xScale(d.valence) })
          .attr("cy", function(d) { return yScale(d.arousal) })
          .style("fill", "none")
          .style("stroke", moodColor) ;






			var promptContainer = svg.append("g")
				.attr("class", "prompt") 
        .style("pointer-events", "none") ;
        
			promptContainer.append("circle")
				.attr("r", 40) ;

			promptContainer
				.append("text")
				.attr("text-anchor", "middle")
				.attr("y", -5)
				.text("plot") ;

			promptContainer
				.append("text")
				.attr("text-anchor", "middle")
				.attr("dy",".71em")
				.attr("y", 5)
				.text("mood") ;


      var axiiContainer = svg.append("g")
        .attr("class", "axii")
        .style("pointer-events", "none") ;

			var pHigh = axiiContainer.append("text")
				.attr("text-anchor", "middle")
				.attr("dy",".71em")
				.text("high energy")
				.style("pointer-events", "none") ;

			var pLow = axiiContainer.append("text")
				.attr("text-anchor", "middle")
				.text("low energy")
				.style("pointer-events", "none") ;

			var pBad = axiiContainer.append("text")
				.attr("text-anchor", "start")
				.attr("dy",".35em")
				.text("bad")
				.style("pointer-events", "none") ;

			var pGood = axiiContainer.append("text")
				.attr("text-anchor", "end")
				.attr("dy",".35em")
				.text("good")
				.style("pointer-events", "none") ;

			scope.$watch("selected", function() {

        if (!conf) return ;

				redraw() ;
			},true) ;

      scope.$watch("counts", function() {

        //console.log("counts changed") ;

        if (!conf) return ;

        if (!scope.counts) {
          redraw() ;
          return ;
        }

        var counts = _.values(scope.counts) ;

        var maxCount = _.max(counts) ;
        var minCount = 0 
        if (counts.length == 100)
          minCount = _.min(counts) ;

        //console.log(" min:" + minCount + "   max:" + maxCount) ;

        rScale.domain([minCount,maxCount]) ;
        redraw() ;

      }, true) ;

      scope.$watch("config", function() {

        //console.log(conf) ;
        
        if (!scope.config) {
          conf = defaultConfig ;
        } else {

          conf = _.clone(scope.config) ;
          _.each(defaultConfig, function(value, key) {
            if (conf[key] === null || conf[key] === undefined)
              conf[key] = value ;
          }) ;
        }

        redraw() ;
      }, true)

      function dragstarted() {
        //console.log("starting drag") ;
        d3.event.sourceEvent.stopPropagation();
      }

      function dragged() {

        if (conf.readOnly)
          return ;

        var coords = d3.mouse(this) ;

        var valence = xScale.invert(coords[0]) ;
        var arousal = yScale.invert(coords[1]) ;

        var mood = MoodData.getNearest(valence, arousal) ;

        scope.$apply(function() {
          scope.selected = mood ;
        }) ;

      }

			function clicked() {

        if (conf.readOnly)
          return ;

        if (d3.event.defaultPrevented) 
          return;

				var coords = d3.mouse(this) ;

				var valence = xScale.invert(coords[0]) ;
				var arousal = yScale.invert(coords[1]) ;

				var mood = MoodData.getNearest(valence, arousal) ;

        //console.log(mood) ;

        if (scope.selected && scope.selected.name == mood.name) {

          if (conf.toggle)
            scope.$apply(function() {
              scope.selected = undefined ;
            }) ;

        } else {
  				scope.$apply(function() {
  					scope.selected = mood ;
  				}) ;
        }
			}

      function hovered() {

        var coords = d3.mouse(this) ;

        var valence = xScale.invert(coords[0]) ;
        var arousal = yScale.invert(coords[1]) ;

        var mood = MoodData.getNearest(valence, arousal) ;

        scope.$apply(function() {
          scope.hovered = mood ;
        }) ;
      }

      function unhovered() {

        //console.log("unhovering") ;

        scope.$apply(function() {
          scope.hovered = undefined ;
        }) ;
      }

			function redraw() {

				canvas
					.attr("width", dimensions.width)
				  .attr("height", dimensions.height) ;

        if (conf.readOnly)
          canvas.style("cursor", "default") ;
        else
          canvas.style("cursor", "pointer") ;

				promptContainer
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

				moodFill
				    .transition()
				    .duration(500)
				    .attr("width", moodWidth)
					.attr("height", moodHeight)
					.attr("rx", moodCornerRadius)
				    .attr("ry", moodCornerRadius)
					.attr("x", moodX)
					.attr("y", moodY)
          .style("fill", moodColor) ;

        moodHalo
          .transition()
          .duration(500)
          .attr("r", moodHaloRadius)
          .style("stroke", moodColor) ;

				if (scope.selected || !conf.showPrompt)
          promptContainer.attr("display", "none") ;
        else
					promptContainer.attr("display", "block") ;
				
				


        if (scope.selected || !conf.showAxii)
          axiiContainer.attr("display", "none") ;
        else
          axiiContainer.attr("display", "block") ;
        
          
			}


			function moodX(mood) {

				return xScale(mood.valence) -  moodWidth(mood)/2 ;
			}

			function moodY(mood) {

				return yScale(mood.arousal) - moodHeight(mood)/2 ;
			}

			function moodWidth(mood) {

        var count = undefined ;
        if (scope.counts)
          if (scope.counts[mood.name])
            count = scope.counts[mood.name] ;
          else
            count = 0 ;




				if (scope.selected && count == undefined) {
					if (scope.selected.name === mood.name)
						return cellWidth * 0.8 ;
					else
						return cellWidth * 0.5 ;
				} else {

          if (count === undefined)
            if (conf.showSquares)
              return cellWidth ;
            else
              return cellWidth * 0.8 ;
          else
            return rScale(count) ;

				}



			}

			function moodHeight(mood) {

				return moodWidth(mood) ;
			}

			function moodCornerRadius(mood) {

				if (scope.selected || scope.counts || !conf.showSquares)
					return moodWidth(mood) ;
				else
					return 0 ;
			}

      function moodHaloRadius(mood) {

        if (scope.selected && scope.selected.name === mood.name)
          return (moodWidth(mood)/2) + 2 ;
        else
          return moodWidth(mood)/2 - 1 ;
      }

      function moodColor(mood) {

        return MoodData.getColor(mood.valence, mood.arousal, conf.background) ;
      }



		}

	}
}])


.directive('moodMatrix', ["MoodData", function (MoodData) {

  var defaultConfig = {
    readOnly : false,
    followCanvasHover: true,
    background: "light",
    inactiveColor: "#ccc"
  } ;
  
  return {
    restrict: 'E',
    scope: {
      selected:'=',
      hoveredInCanvas:'=?',
      hoveredInMatrix:'=?',
      config:'=?'
    },
    link: function (scope, element, attrs) {

      var conf = defaultConfig ;
      var hoverTimeoutId ;

      var dimensions = {width:300, height: 90} ;
      var cellDimensions = {width:dimensions.width/3, height:dimensions.height/3} ;

      var xScale = d3.scale.linear().domain([-1.2,1.2]).range([0,cellDimensions.width*12]) ;
      var yScale = d3.scale.linear().domain([-1.2,1.2]).range([cellDimensions.height*12,0]) ;

      var panX = d3.scale.linear().domain([-1, 1]).range([-cellDimensions.width*0.5, cellDimensions.width*9.5]) ;
      var panY = d3.scale.linear().domain([-1, 1]).range([cellDimensions.height*9.5, -cellDimensions.height*0.5]) ;


      var container = d3.select(element[0])
         .append("div")
         .classed("svg-container", true) ;

      var svg = container.append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
          .attr("cursor", "default")
          .attr("viewBox", "0 0 300 90")
          .classed("svg-content-responsive", true) ;

      var canvas = svg.append("rect")
          .attr("class", "canvas")
          .style("fill", "none");

      var cellContainer = svg.append("g")
        .attr("mouseout", unhover)
        .attr("transform", "translate(" + -panX(0) + "," + -panY(0) + ")") ;

      var cellData = [] ;
      var boundaryCellData = [] ;


      for (var valence=-1.1 ; valence<=1.1 ; valence = valence + 0.2) {

        for (var arousal=1.1 ; arousal>=-1.1 ; arousal = arousal -0.2) {

          if (valence > -1 && valence < 1 && arousal > -1 && arousal < 1) {
            var mood = MoodData.getNearest(valence, arousal) ;

            cellData.push(mood) ;
          } else {
            boundaryCellData.push({valence: valence, arousal: arousal}) ;
          }
        }
      }


      var moodCell = cellContainer.selectAll(".mood-cell")
        .data(cellData)
        .enter()
          .append("g")
            .attr("class", ".cell")
            .attr("transform", function(d) { return "translate(" + xScale(d.valence) + "," + yScale(d.arousal) + ")"}); 

      
      var moodRect = moodCell.append("rect")
        .attr("x", -cellDimensions.width/2) 
        .attr("y", -cellDimensions.height/2) 
        .attr("width", cellDimensions.width)
        .attr("height", cellDimensions.height)
        .on("click", click)
        .on("mouseover", hover)
        .on("mouseout",unhover)
        .style("pointer-events", "all")
        .style("fill", "none")
        .style("cursor", cursor)
        .style("stroke", "none") ;
      

      var moodText = moodCell.append("text")
        .attr("text-anchor", "middle")
        .attr("dy",".35em")
        .style("fill", fill)
        .style("stroke", stroke)
        .style("stroke-width", strokeWidth)
        .style("font-size", fontSize)
        .style("pointer-events", "none")
        .text(function(d) {return d.name}) ;


      var boundaryCell = cellContainer.selectAll(".boundary-cell")
        .data(boundaryCellData)
        .enter()
          .append("circle")
          .attr("cx", function(d) {return xScale(d.valence)})
          .attr("cy", function(d) {return yScale(d.arousal)})
          .attr("r", 2)
          .style("pointer-events", "none")
          .style("fill", conf.inactiveColor) ;


      scope.$watch("selected", function() {

        redraw() ;

      }, true) ;

      scope.$watch("hoveredInCanvas", function() {

        if (!scope.hoveredInCanvas) {

          //react immediately if suddenly not hovering anything
          redraw() ;
        } else {
          //wait for a bit before reacting to a new hover (so we don't constantly bounce around)

          if (hoverTimeoutId) {
            clearTimeout(hoverTimeoutId) ;
            hoverTimeoutId = undefined ;
          }

          hoverTimeoutId = setTimeout(function() {
            hoverTimeoutId = undefined ;
            redraw() ;
          }, 200) ;
        }
      }, true) ;

      scope.$watch("config", function() {

        if (!scope.config) {
          conf = defaultConfig ;
        } else {

          conf = _.clone(scope.config) ;
          _.each(defaultConfig, function(value, key) {
            if (conf[key] === null || conf[key] === undefined)
              conf[key] = value ;
          }) ;
        }

        redraw() ;
      }, true) ;

      function redraw() {

        var valence = 0 ;
        var arousal = 0 ;

        if (conf.followCanvasHover && scope.hoveredInCanvas) {
          valence = scope.hoveredInCanvas.valence ;
          arousal = scope.hoveredInCanvas.arousal ;
        } else if (scope.selected) {
          valence = scope.selected.valence ;
          arousal = scope.selected.arousal ;
        }

        cellContainer
          .transition()
          .duration(500)
          .ease("cubic-out")
          .attr("transform", "translate(" + -panX(valence) + "," + -panY(arousal) + ")")
          .attr("opacity", opacity) ;

        moodRect
          .style("cursor", cursor) ;
          
        moodText
          .transition()
          .duration(500)
          .style("fill", fill)
          .style("stroke", stroke)
          .style("stroke-width", strokeWidth)
          .style("font-size", fontSize) ;
          
      }


      function isSelectedOrHovered(mood) {

        if (conf.followCanvasHover && scope.hoveredInCanvas && scope.hoveredInCanvas.name == mood.name)
          return true ;

        return ((!conf.followCanvasHover || !scope.hoveredInCanvas) && scope.selected && scope.selected.name == mood.name) ;
      }

      function opacity() {
        if (scope.selected || (conf.followCanvasHover && scope.hoveredInCanvas)) 
          return 1 ;
        else
          return 0 ;
      }

      function fill(mood) {

          if (isSelectedOrHovered(mood)) 
            return MoodData.getColor(mood.valence, mood.arousal, conf.background) ;
          else
            return conf.inactiveColor ;
      }

      function stroke(mood) {

        if (isSelectedOrHovered(mood)) 
            return MoodData.getColor(mood.valence, mood.arousal, conf.background) ;
          else
            return conf.inactiveColor ;
      }

      function strokeWidth(mood) {

        if (isSelectedOrHovered(mood)) 
            return 1
          else
            return 0 ;
      }

      function fontSize(mood) {
          if (isSelectedOrHovered(mood))
            return 18 ;
          else
            return 15 ;
      }

      function cursor() {
          if (!conf || conf.readOnly)
            return "default"
          
          return "pointer"
      }

      function click(mood) {

        if (!conf || conf.readOnly)
          return ;

        scope.$apply(function() {
          scope.selected = mood ;
        }) ;
      }

      function hover(mood) {

        scope.$apply(function() {
          scope.hoveredInMatrix = mood ;
        }) ;
      }

      function unhover(mood) {

        if (!scope.hoveredInMatrix)
          return ;

        scope.$apply(function() {
          scope.hoveredInMatrix = undefined ;
        }) ;
      }

    }

    
  }
}])
