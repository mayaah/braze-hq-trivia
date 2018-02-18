'use strict';

/**
 * @ngdoc service
 * @name brazeHqTriviaApp.Host
 * @description
 * # Host
 * Service in the brazeHqTriviaApp.
 */
angular.module('brazeHqTriviaApp')
  .service('Host', function (fbutil, Trivia) {
    var self = this, _so;

    self.init = function(PIN) {
    	self.syncObject = fbutil.syncObject('games/' + PIN);
    	_so = self.syncObject;
    	return self.syncObject.$loaded();
    };

    self.setupGame = function() {
    	if(! _so.data.hasOwnProperty('questions')) {
    		_so.data.questions = Trivia.getQuestions();
    		_so.data.currentQuestion = 0;
    	}
      if (! _so.data.hasOwnProperty('highlights')) {
        _so.data.highlights = Trivia.getHighlights();
    		_so.data.currentHighlight = -1;
      }
    	return _so.$save();
    };

    self.getCurrentQuestion = function() {
        return _so.data.questions[_so.data.currentQuestion];
    };

    self.getCurrentHighlight = function() {
      console.log(_so.data.currentHighlight);
      console.log(_so.data.highlights);
        return _so.data.highlights[_so.data.currentHighlight];
    };

    self.setGameState = function(state) {
        _so.data.state = state;
        return _so.$save();
    };

    self.nextQuestion = function() {
        _so.data.state = 'preQuestion';
        _so.data.currentQuestion++;
        return _so.$save();
    }

    self.nextHighlight = function() {
        _so.data.state = 'highlight';
        _so.data.currentHighlight++;
        return _so.$save();
    }

  });
