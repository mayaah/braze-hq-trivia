'use strict';

/**
 * @ngdoc service
 * @name brazeHqTriviaApp.Trivia
 * @description
 * # Trivia
 * Service in the brazeHqTriviaApp.
 */
angular.module('brazeHqTriviaApp')
  .service('Trivia', function (_) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;

    self.questions = [
    	{
    		'q':'What was Braze formerly known as?',
    		'wrong_answers' : ['Leanplum', 'Appboi', 'ExactTarget'],
    		'answer' : 'Appboy'
    	},
    	{
    		'q' : 'What\'s the name of Bill\'s dog?',
    		'wrong_answers' : ['Bronx', 'Barney', 'Beyonce'],
    		'answer' : 'Brooklyn'
    	},
    	{
    		'q' : 'What street has our HQ office not been on?',
    		'wrong_answers' : ['37th', '38th', '39th'],
    		'answer' : '40th'
    	},
    	{
    		'q' : 'What city is our office not located in?',
    		'wrong_answers' : ['London', 'Singapore', 'New York'],
    		'answer' : 'Seattle'
    	},
    	{
    		'q' : 'What word can you form from mixing up all the letters in Braze?',
    		'wrong_answers' : ['era', 'zerba', 'bar'],
    		'answer' : 'zebra'
    	},
    	{
    		'q' : 'Who used to be CEO of Appboy?',
    		'wrong_answers' : ['Mark Hamill', 'Marc Loli', 'Mark Zuckerberg'],
    		'answer' : 'Mark Ghermezian'
    	},
    	{
    		'q' : 'According to Forrester, Braze is a leader in what?',
    		'wrong_answers' : ['Marketing Performance Ecosystems', 'Crytocurrency Technologies', 'Lifecycle Engagement'],
    		'answer' : 'Mobile Engagement Automation'
    	},
    	{
    		'q' : 'In Saas business such as ours, what is ACV?',
    		'wrong_answers' : ['Air Conditioning Vents', 'Annual Commitment Velocity', 'Accumulated Cash Value'],
    		'answer' : 'Annual Contract Value'
    	},
    	{
    		'q' : 'What does GDPR stand for?',
    		'wrong_answers' : ['Granulated Domino\'s Pure Raisons', 'GDP Regulations', 'Global Data Privacy Regulation'],
    		'answer' : 'General Data Protection Regulation'
    	},
    	{
    		'q' : 'Which notable Braze engineer, winner of last year\'s "Best Dashboard Tech Lead" award, is bidding farewell to Braze this Friday? :\'(',
    		'wrong_answers' : ['Granulated Domino\'s Pure Raisons', 'GDP Regulations', 'Global Data Privacy Regulation'],
    		'answer' : 'General Data Protection Regulation'
    	}
    ];

    self.getQuestions = function(){
    	return self.questions
    };

    self.getPossibleAnswers = function(question) {
    	return _.shuffle([question.answer].concat(question.wrong_answers))
    };

    self.checkAnswer = function(questionText, answer) {
        console.log('Checking:');

    	var question = _.find(self.questions, function(q) {
    		return q.q == questionText;
    	});
        console.log(questionText, answer, question.answer == answer);
    	return question.answer == answer;
    }


  });
