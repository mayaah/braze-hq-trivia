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
    		'wrong_answers' : ['Leanplum', 'Appboi'],
    		'answer' : 'Appboy'
    	},
        {
            'q' : 'Who is NOT one of Braze\'s customers?',
            'wrong_answers' : ['Postmates', 'OkCupid'],
            'answer' : 'Leanplum'
        },
        {
            'q' : 'What city do we NOT have an office in?',
            'wrong_answers' : ['London', 'San Francisco'],
            'answer' : 'Seattle'
        },
        {
            'q' : 'Which notable Braze engineer, winner of last year\'s "Best Dashboard Tech Lead" award, is bidding farewell to Braze this Friday? :\'(',
            'wrong_answers' : ['Nick Willet-Jeffries', 'Matt Willet-Jeffries'],
            'answer' : 'Dylan Petro'
        },
        {
            'q' : 'Who used to be CEO of Appboy?',
            'wrong_answers' : ['Mark Hamill', 'Marc Loli'],
            'answer' : 'Mark Ghermezian'
        },
    	{
    		'q' : 'What\'s the name of Bill\'s dog?',
    		'wrong_answers' : ['Beyonce', 'Barney'],
    		'answer' : 'Brooklyn'
    	},
    	{
    		'q' : 'What street has our HQ office NOT been on?',
    		'wrong_answers' : ['37th', '38th'],
    		'answer' : '40th'
    	},
    	{
    		'q' : 'According to Forrester, Braze is a leader in what?',
    		'wrong_answers' : ['Crytocurrency Technologies', 'Lifecycle Engagement'],
    		'answer' : 'Mobile Engagement Automation'
    	},
    	{
    		'q' : 'In Saas business such as ours, what is ACV?',
    		'wrong_answers' : ['Air Conditioning Vents', 'Accumulated Cash Value'],
    		'answer' : 'Annual Contract Value'
    	},
    	{
    		'q' : 'What does GDPR stand for, in the context of Braze?',
    		'wrong_answers' : ['Granulated Domino\'s Pure Raisins', 'Global Data Privacy Regulation'],
    		'answer' : 'General Data Protection Regulation'
    	},
        {
            'q' : 'What now-discontinued, absurdly caffeinated, non-FDA-approved supplement famously helped to fuel Appboy’s bleary-eyed early years?',
            'wrong_answers' : ['Nawgan', 'Body Globe Surge Tropical Berry'],
            'answer' : 'Kymera'
        },
        {
            'q' : 'Before being called Obi-wan Cannoli, that meeting room used to be called:',
            'wrong_answers' : ['Darth Tater', 'Bowser’s Castle'],
            'answer' : 'Marketing 4'
        }
    ];

    self.highlights = [
      {
        'to' : 'Liann',
        'from' : 'Annie',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-liann.jpg?alt=media&token=94516189-140e-431d-a1bf-2eeaaa59e68d'
      },
      {
        'to' : 'The People Team',
        'from' : 'Anonymous',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-people.png?alt=media&token=c8d8a997-7068-4b57-86a9-12482908b1a1'
      },
      {
        'to' : 'all of you playing, trivia on!',
        'from' : 'your friendly neighborhood zebras',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/fzwBb.gif?alt=media&token=de98cf20-2cd8-4c48-a0e0-eb3774a3af2d'
      },
      {
        'to' : 'Katie Zinman',
        'from' : 'Anonymous',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-katie.jpg?alt=media&token=434f69f6-cc16-4743-b2d7-754378b87af8'
      },
      {
        'to' : 'all you #braze-HQties',
        'from' : 'your friendly neighborhood zebras',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/giphy.gif?alt=media&token=57ddff6b-f227-4c72-a133-7a3e37fdb57c'
      },
      {
        'to' : 'Matt Hicks',
        'from' : 'Liann',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-matt-hicks.jpg?alt=media&token=3b86380b-bd63-4e5b-bf22-bed7008c4837'
      },
      {
        'to' : 'those who dream',
        'from' : 'your idealistic neighborhood zebras',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/tenor.gif?alt=media&token=ed251009-204f-4d68-b354-f50a1d678a14'
      },
      {
        'to' : 'Erek C',
        'from' : 'Anonymous',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-erek.jpg?alt=media&token=df46d95b-3e95-4adf-b0b0-089fa806ca5a'
      },
      {
        'to' : 'Jesse',
        'from' : 'Georgia',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-jesse.jpg?alt=media&token=48c676fc-f97c-4f16-8718-5b9797374832'
      },
      {
        'to' : 'the party that lives on',
        'from' : '#youknowusbynow',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/zebra-party.gif?alt=media&token=359275f4-7d1f-47fe-b617-38955e362b7d'
      },
      {
        'to' : 'James M',
        'from' : 'Anonymous',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-james-m.jpg?alt=media&token=9c6eacfb-8ec9-46f6-ba0a-d97a127d61b2'
      }
    ]

    self.getHighlights = function(){
      return self.highlights
    }

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
