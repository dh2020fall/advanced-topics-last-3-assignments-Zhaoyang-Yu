// define a new function that pauses media when required

// everything in this file happens inside the window.on(load) function
// it runs when the rest of the window has been loaded
//$(window).on('load', function() {
var loadPopcornSub = function () {
  // Create a popcporn instance by calling Popcorn("#id-of-the-media-element")
  // the "pop" object has the full power of the popcorn framework
  var popSub = Popcorn("#media", {pauseOnLinkClicked: true});


  // popcorn events are accomplished with plugins.
  // "footnote" is a somewhat misleading name. It actually just
  // pops up some text, starting at 30 seconds
  popSub.footnote({
    start: 0,
    end: 50,
    text: "Testing!",
    target: "subtitle"
  });

  // Change the above events to your satisfaction, and then add your own events here, before
  // the final brackets.
  // full documentation of all the Popcorn plugins is here:
  // http://popcornjs.org/popcorn-docs/plugins/
  //});
};
