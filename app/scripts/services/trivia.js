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
    		'q' : 'In SaaS business such as ours, what is ACV?',
    		'wrong_answers' : ['Air Conditioning Vents', 'Accumulated Cash Value'],
    		'answer' : 'Annual Contract Value'
    	},
    	{
    		'q' : 'What does GDPR stand for, in the context of Braze?',
    		'wrong_answers' : ['Granulated Domino\'s Pure Raisins', 'Global Data Privacy Regulation'],
    		'answer' : 'General Data Protection Regulation'
    	},
      {
          'q' : 'Before being called Backstreet Appboy, that meeting room used to be called:',
          'wrong_answers' : ['Golden Gate', 'Thriving Ivory'],
          'answer' : 'Unicorn'
      },
      {
          'q' : 'What now-discontinued, absurdly caffeinated, non-FDA-approved supplement famously helped to fuel Appboy’s bleary-eyed early years?',
          'wrong_answers' : ['Nawgan', 'Body Globe Surge Tropical Berry'],
          'answer' : 'Kymera'
      }
    ];

    self.highlights = [
      {
        'to' : 'Jenny',
        'from' : 'Patrick',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-jenny.jpg?alt=media&token=178e6827-ec76-49e4-8c4b-290e93295056'
      },
      {
        'to' : 'Ali',
        'from' : 'Justin',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-ali.jpg?alt=media&token=c2e18e08-840e-41ca-97ad-8f011bbd38bb'
      },
      {
        'to' : 'Mitch',
        'from' : 'Dylan',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-mitch.jpg?alt=media&token=b62f01b1-ffc0-4e4d-9738-1cf9bc8ca9a4'
      },
      {
        'to' : 'Caroline ',
        'from' : 'Anonymous',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-caroline.jpg?alt=media&token=0ca3a010-4327-4e57-aca5-6c08ce649b8d'
      },
      {
        'to' : 'all of you playing, trivia on!',
        'from' : 'your friendly neighborhood zebras',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/zebra-party.gif?alt=media&token=359275f4-7d1f-47fe-b617-38955e362b7d'
      },
      {
        'to' : 'Paul',
        'from' : 'Katie',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-paul.jpg?alt=media&token=2f448f32-06ee-49f5-bf53-0ec9dad9a8d7'
      },
      {
        'to' : 'Jena',
        'from' : 'Jenny',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-jena.jpg?alt=media&token=914e5a71-83fc-42aa-b4a5-fc4e53f3ea93'
      },
      {
        'to' : 'Jackie',
        'from' : 'Brad E',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-jackie.jpg?alt=media&token=24f65850-1146-4f6d-9fd9-7e853e4b0803'
      },
      {
        'to' : 'Aziz',
        'from' : 'Christina',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-aziz.jpg?alt=media&token=aeb67157-6ea7-4950-beab-606e9f626d3d'
      },
      {
        'to' : 'all you #braze-HQties',
        'from' : 'your friendly neighborhood zebras',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/fzwBb.gif?alt=media&token=de98cf20-2cd8-4c48-a0e0-eb3774a3af2d'
      },
      {
        'to' : 'Trevor',
        'from' : 'Jackie',
        'image' : 'https://firebasestorage.googleapis.com/v0/b/braze-hq-trivia.appspot.com/o/highlights-trevor.jpg?alt=media&token=42f3560f-4060-4ed0-b83c-b9d3c9b7121b'
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
