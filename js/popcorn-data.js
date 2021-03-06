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
    end: 1,
    text: "<p>Subtitles</br>Interviewer Lines in Red</br>Interviewee Lines in Black</br>Translated by Zhaoyang Yu</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 1,
    end: 4,
    text: "<p style=\"color:red\">He got a good deal for the house. 6.8 million yuan. (~1.3 million Canadian dollars)<p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 4,
    end: 8,
    text: "In other places they’d call this a townhouse.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 8,
    end: 10,
    text: "<p style=\"color:red\">Right a townhouse.</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 10,
    end: 15,
    text: "This house, it keeps cool when it’s really hot outside, don’t even need to open the air conditioning.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 15,
    end: 16,
    text: "<p style=\"color:red\">Really comfortable.</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 16,
    end: 19,
    text: "If you open the fan it’s really cool.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 19,
    end: 24,
    text: "I was born here in ’54. By parents were from the north. They fought all the way to Shanghai.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 24,
    end: 27,
    text: "Both my parents were retired party cadre.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 27,
    end: 29,
    text: "<p style=\"color:red\">Participated in the revolution right?</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 29,
    end: 37,
    text: "They fought all the way to Shanghai. At the time they were a part of the Third Field Army.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 37,
    end: 42,
    text: "They fought here from the north, they fought here from Hebei province.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 42,
    end: 45,
    text: "These people, let me tell you about people like my parents. Very, very provincial.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 45,
    end: 50,
    text: "All the way up until the time of their death, they were very, very provincial.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 50,
    end: 51,
    text: "<p style=\"color:red\">What do you mean?</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 51,
    end: 56,
    text: "Both my parents were very provincial. For example, when I got married I had this suit made.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 56,
    end: 61,
    text: "My father told me: If you wear this garment for your marriage, I’m not coming.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 61,
    end: 62,
    text: "<p style=\"color:red\">He wanted you in Chinese style dress.</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 62,
    end: 64,
    text: "Chinese tunic suit. (Zhongshan Suit/Mao Suit)",
    target: "subtitle",
  });
  popSub.footnote({
    start: 64,
    end: 71,
    text: "<p style=\"color:red\">He still had traditional… He was The type that upheld traditional culture right?</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 71,
    end: 74,
    text: "If one of their garments was torn, they’d put a patch on the tear.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 74,
    end: 76,
    text: "<p style=\"color:red\">They would patch it?</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 76,
    end: 79,
    text: "They’d patch it all themselves.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 79,
    end: 83,
    text: "<p style=\"color:red\">Logically speaking, with such a high rank, they should have been quite wealthy right?</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 83,
    end: 87,
    text: "Plenty of money. What’s the use of money, they were reluctant to eat, reluctant to use. (Unwilling to spend money on excess)",
    target: "subtitle",
  });
  popSub.footnote({
    start: 87,
    end: 89,
    text: "Save money, I would say, what are you saving for?",
    target: "subtitle",
  });
  popSub.footnote({
    start: 89,
    end: 94,
    text: "The cotton sweater we were talking about, when it broke and I bought him two more sets, we got into an argument over it.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 94,
    end: 97,
    text: "He said, my broken clothing, I just need to fix it up a bit, do a bit of patching.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 97,
    end: 100,
    text: "<p style=\"color:red\">That generation was really frugal.</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 100,
    end: 102,
    text: "<p style=\"color:red\">It really wasn’t easy.</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 102,
    end: 105,
    text: "If my parents were still alive, they’d be in their nineties by now.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 106,
    end: 107,
    text: "<p style=\"color:red\">They’ve left.</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 106,
    end: 111,
    text: "By father’s been gone for ten years now, he was eighty when he left.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 111,
    end: 112,
    text: "What about your mother?",
    target: "subtitle",
  });
  popSub.footnote({
    start: 112,
    end: 117,
    text: "My mother left early, lung cancer in her forties.",
    target: "subtitle",
  });
  popSub.footnote({
    start: 117,
    end: 120,
    text: "<p style=\"color:red\">Left early, didn’t have a chance to enjoy her fortunes.</p>",
    target: "subtitle",
  });
  popSub.footnote({
    start: 120,
    end: 122,
    text: "<p style=\"color:red\">The historical situation here, you’re well acquainted with it.</p>",
    target: "subtitle"
  });
  popSub.footnote({
    start: 122,
    end: 126,
    text: "This place, you know what it used to be? It’s a kindergarten.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 126,
    end: 129,
    text: "Up front there’s another kindergarten, and an elementary school.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 129,
    end: 130,
    text: "<p style=\"color:red\">Ah, there’s an elementary school in here too. (Former work unit residential area)</p>",
    target: "subtitle"
  });
  popSub.footnote({
    start: 130,
    end: 131,
    text: "When you came in just now, you didn’t see it?",
    target: "subtitle"
  });
  popSub.footnote({
    start: 131,
    end: 132,
    text: "<p style=\"color:red\">I saw it, I saw it.</p>",
    target: "subtitle"
  });
  popSub.footnote({
    start: 133,
    end: 137,
    text: "Right, this elementary school used to be for this place, it use to provide for this place.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 137,
    end: 138,
    text: "<p style=\"color:red\">Now it’s also open to the outside.</p>",
    target: "subtitle"
  });
  popSub.footnote({
    start: 138,
    end: 140,
    text: "Open to the outside.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 140,
    end: 143,
    text: "There’s a kindergarten around there. The kindergarten was also like this, like out elementary school.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 143,
    end: 148,
    text: "We came from this kindergarten, afterwards we’d go to the (elementary) school, and after (elementary) school we’d go this middle school. ",
    target: "subtitle"
  });
  popSub.footnote({
    start: 148,
    end: 150,
    text: "<p style=\"color:red\">It’s nearby. The middle school was nearby too.</p>",
    target: "subtitle"
  });
  popSub.footnote({
    start: 150,
    end: 157,
    text: "Do you know what this is? The Shanghai Textile Bureau, ah, it’s the cotton textile factory. This is the Textile Bureau’s 15th cotton textile factory’s kindergarten.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 157,
    end: 162,
    text: "It’s providing for the Textile Bureau’s workers. Because a lot of the residents here are from the textile Bureau.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 162,
    end: 167,
    text: "After being discharged, after fighting in the war, a lot of them went to the Textile Bureau. (Vietnam War, Korean War, etc.)",
    target: "subtitle"
  });
  popSub.footnote({
    start: 167,
    end: 169,
    text: "This house used to be my aunt’s. (Sister of father)",
    target: "subtitle"
  });
  popSub.footnote({
    start: 169,
    end: 170,
    text: "<p style=\"color:red\">This one?</p>",
    target: "subtitle"
  });
  popSub.footnote({
    start: 170,
    end: 172,
    text: "Later on they sold it.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 172,
    end: 175,
    text: "Originally this house was for their grandson’s marriage. (Daughter’s son) I renovated it for them.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 175,
    end: 178,
    text: "In the end, he was doing business when he had a cerebral hemorrhage.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 178,
    end: 180,
    text: "He was really young, only thirty seven or eight when he left.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 180,
    end: 184,
    text: "Later she (aunt) didn’t want to see this house anymore, so she sold it.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 184,
    end: 188,
    text: "At the time she sold it, it was still cheap, only 2 million yuan (~390,000 dollars Canadian) when she sold it.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 188,
    end: 189,
    text: "<p style=\"color:red\">At what time?</p>",
    target: "subtitle"
  });
  popSub.footnote({
    start: 189,
    end: 190,
    text: "Four years ago.",
    target: "subtitle"
  });
  popSub.footnote({
    start: 190,
    end: 195,
    text: "<p style=\"color:red\">Four years ago. Four years ago is 2016. It was that cheap?</p>",
    target: "subtitle"
  });
  popSub.footnote({
    start: 195,
    end: 196,
    text: "Yeah.",
    target: "subtitle"
  });
  // Change the above events to your satisfaction, and then add your own events here, before
  // the final brackets.
  // full documentation of all the Popcorn plugins is here:
  // http://popcornjs.org/popcorn-docs/plugins/
  //});
};
