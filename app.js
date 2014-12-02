var app = angular.module('app', ["angular-mood", "hljs"])

.controller('Ctrl', function($scope, MoodData) {

  $scope.mood = undefined ;

  $scope.config = {
    readOnly: false,
    showPrompt: true,
    showAxii: true,
    background: 'light',
    followCanvasHover: true
  }

  $scope.randomizeMoodCounts = function() {

    var randomMoodCounts = {} ;

    var moodsCount = 10 + Math.floor(Math.random() * 50) ;

    for (var i=0 ; i<moodsCount ; i++) {

      var valence = (Math.random()*2) - 1 ;
      var arousal = (Math.random()*2) - 1 ;
      var randomMood = MoodData.getNearest(valence, arousal) ;

      randomMoodCounts[randomMood.name] = Math.floor(Math.random() * 100) ;
    }

    $scope.counts = randomMoodCounts ;
  }

  $scope.clearMoodCounts = function() {
    $scope.counts = undefined ;
  }

  $scope.getBodyStyle = function() {

    if ($scope.config.background == 'dark')
      return { color: '#ccc', backgroundColor: '#333'}
    else
      return { color: 'black', backgroundColor: 'white'} 
  }

  $scope.getStyleForCoords = function(valence, arousal) {

    return { color: MoodData.getColor(valence, arousal) }
  }

}) ;