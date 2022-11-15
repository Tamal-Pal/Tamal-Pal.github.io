(function (window){
    var byeSpeaker = {};
    var speakWord = "GoodBye";
    
    byeSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
     
     window.byeSpeaker = byeSpeaker;
    })(window);