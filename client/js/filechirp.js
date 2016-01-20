if (Meteor.isClient) {
  Template.hello.rendered = function () {
    
  };
  Template.hello.events({
    'click #swag': function () {
      var audctx = new (window.AudioContext || window.webkitAudioContext)();
      var osc = audctx.createOscillator();
      osc.type = 'square';
      osc.frequency.value = 3000;
      osc.connect(audctx.destination);
      osc.start(0);
    }
  });
};