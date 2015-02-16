'use strict';

describe('myApp.greetings module', function() {

  beforeEach(module('myApp.greetings'));

  describe('greetings controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var GreetingsCtrl = $controller('GreetingsCtrl');
      expect(GreetingsCtrl).toBeDefined();
    }));

  });
});