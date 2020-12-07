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
  popSub.intro({
    start: 0,
    end: 1,
    text: "Subtitles\nInterviewer Lines in Red\nInterviewee Lines in Black\nTranslated by Zhaoyang Yu",
    target: "subtitle",
  });
  popSub.sub1({
    start: 1,
    end: 4,
    text: "He got a good deal for the house. 6.8 million yuan. (~1.3 million Canadian dollars)",
    target: "subtitle",
    color: "red"
  });
  popSub.sub2({
    start: 4,
    end: 8,
    text: "In other places they’d call this a townhouse.",
    target: "subtitle",
  });
  popSub.sub3({
    start: 8,
    end: 10,
    text: "Right a townhouse.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub4({
    start: 10,
    end: 12,
    text: "This house, it keeps cool when it’s really hot outside, don’t even need to open the air conditioning.",
    target: "subtitle",
  });
  popSub.sub5({
    start: 15,
    end: 16,
    text: "Really comfortable.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub6({
    start: 16,
    end: 19,
    text: "If you open the fan it’s really cool.",
    target: "subtitle",
  });
  popSub.sub7({
    start: 20,
    end: 23,
    text: "I was born here in ’54. By parents were from the north. They fought all the way to Shanghai.",
    target: "subtitle",
  });
  popSub.sub8({
    start: 25,
    end: 26,
    text: "Both my parents were retired party cadre.",
    target: "subtitle",
  });
  popSub.sub9({
    start: 27,
    end: 28,
    text: "Participated in the revolution right?",
    target: "subtitle",
    color: "red"
  });
  popSub.sub10({
    start: 29,
    end: 33,
    text: "They fought all the way to Shanghai. At the time they were a part of the Third Field Army.",
    target: "subtitle",
  });
  popSub.sub11({
    start: 38,
    end: 41,
    text: "They fought here from the north, they fought here from Hebei province.",
    target: "subtitle",
  });
  popSub.sub12({
    start: 43,
    end: 46,
    text: "These people, let me tell you about people like my parents. Very, very provincial.",
    target: "subtitle",
  });
  popSub.sub13({
    start: 47,
    end: 49,
    text: "All the way up until the time of their death, they were very, very provincial.",
    target: "subtitle",
  });
  popSub.sub14({
    start: 50,
    end: 51,
    text: "What do you mean?",
    target: "subtitle",
    color: "red"
  });
  popSub.sub15({
    start: 51,
    end: 55,
    text: "Both my parents were very provincial. For example, when I got married I had this suit made.",
    target: "subtitle",
  });
  popSub.sub16({
    start: 56,
    end: 60,
    text: "My father told me: If you wear this garment for your marriage, I’m not coming.",
    target: "subtitle",
  });
  popSub.sub17({
    start: 60,
    end: 62,
    text: "He wanted you in Chinese style dress.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub18({
    start: 62,
    end: 64,
    text: "Chinese tunic suit. (Zhongshan Suit/Mao Suit)",
    target: "subtitle",
  });
  popSub.sub19({
    start: 64,
    end: 69,
    text: "He still had traditional… He was The type that upheld traditional culture right?",
    target: "subtitle",
    color: "red"
  });
  popSub.sub20({
    start: 71,
    end: 75,
    text: "If one of their garments was torn, they’d put a patch on the tear.",
    target: "subtitle",
  });
  popSub.sub21({
    start: 75,
    end: 76,
    text: "They would patch it?",
    target: "subtitle",
    color: "red"
  });
  popSub.sub22({
    start: 76,
    end: 78,
    text: "They’d patch it all themselves.",
    target: "subtitle",
  });
  popSub.sub23({
    start: 80,
    end: 83,
    text: "Logically speaking, with such a high rank, they should have been quite wealthy right?",
    target: "subtitle",
    color: "red"
  });
  popSub.sub24({
    start: 83,
    end: 87,
    text: "Plenty of money. What’s the use of money, they were reluctant to eat, reluctant to use. (Unwilling to spend money on excess)",
    target: "subtitle",
  });
  popSub.sub25({
    start: 87,
    end: 88,
    text: "Save money, I would say, what are you saving for?",
    target: "subtitle",
  });
  popSub.sub26({
    start: 90,
    end: 94,
    text: "The cotton sweater we were talking about, when it broke and I bought him two more sets, we got into an argument over it.",
    target: "subtitle",
  });
  popSub.sub27({
    start: 94,
    end: 96,
    text: "He said, my broken clothing, I just need to fix it up a bit, do a bit of patching.",
    target: "subtitle",
  });
  popSub.sub28({
    start: 96,
    end: 99,
    text: "That generation was really frugal.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub29({
    start: 101,
    end: 102,
    text: "It really wasn’t easy.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub30({
    start: 102,
    end: 104,
    text: "If my parents were still alive, they’d be in their nineties by now.",
    target: "subtitle",
  });
  popSub.sub31({
    start: 104,
    end: 106,
    text: "They’ve left.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub32({
    start: 106,
    end: 111,
    text: "By father’s been gone for ten years now, he was eighty when he left.",
    target: "subtitle",
  });
  popSub.sub33({
    start: 111,
    end: 112,
    text: "What about your mother?",
    target: "subtitle",
  });
  popSub.sub34({
    start: 112,
    end: 116,
    text: "My mother left early, lung cancer in her forties.",
    target: "subtitle",
  });
  popSub.sub35({
    start: 116,
    end: 119,
    text: "Left early, didn’t have a chance to enjoy her fortunes.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub36({
    start: 121,
    end: 122,
    text: "The historical situation here, you’re well acquainted with it.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub37({
    start: 122,
    end: 126,
    text: "This place, you know what it used to be? It’s a kindergarten.",
    target: "subtitle",
  });
  popSub.sub38({
    start: 126,
    end: 128,
    text: "Up front there’s another kindergarten, and an elementary school.",
    target: "subtitle",
  });
  popSub.sub39({
    start: 128,
    end: 129,
    text: "Ah, there’s an elementary school in here too. (Former work unit residential area)",
    target: "subtitle",
    color: "red"
  });
  popSub.sub40({
    start: 129,
    end: 131,
    text: "When you came in just now, you didn’t see it?",
    target: "subtitle",
  });
  popSub.sub41({
    start: 131,
    end: 132,
    text: "I saw it, I saw it.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub42({
    start: 134,
    end: 137,
    text: "Right, this elementary school used to be for this place, it use to provide for this place.",
    target: "subtitle",
  });
  popSub.sub43({
    start: 137,
    end: 138,
    text: "Now it’s also open to the outside.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub44({
    start: 138,
    end: 139,
    text: "Open to the outside.",
    target: "subtitle",
  });
  popSub.sub45({
    start: 140,
    end: 143,
    text: "There’s a kindergarten around there. The kindergarten was also like this, like out elementary school.",
    target: "subtitle",
  });
  popSub.sub46({
    start: 143,
    end: 148,
    text: "We came from this kindergarten, afterwards we’d go to the (elementary) school, and after (elementary) school we’d go this middle school. ",
    target: "subtitle",
  });
  popSub.sub47({
    start: 148,
    end: 150,
    text: "It’s nearby. The middle school was nearby too.",
    target: "subtitle",
    color: "red"
  });
  popSub.sub48({
    start: 150,
    end: 157,
    text: "Do you know what this is? The Shanghai Textile Bureau, ah, it’s the cotton textile factory. TThis is the Textile Bureau’s 15th cotton textile factory’s kindergarten.",
    target: "subtitle",
  });
  popSub.sub49({
    start: 157,
    end: 162,
    text: "It’s providing for the Textile Bureau’s workers. Because a lot of the residents here are from the textile Bureau.",
    target: "subtitle",
  });
  popSub.sub50({
    start: 162,
    end: 167,
    text: "After being discharged, after fighting in the war, a lot of them went to the Textile Bureau. (Vietnam War, Korean War, etc.",
    target: "subtitle",
  });
  popSub.sub51({
    start: 167,
    end: 169,
    text: "This house used to be my aunt’s. (Sister of father)",
    target: "subtitle",
  });
  popSub.sub52({
    start: 169,
    end: 171,
    text: "This one?",
    target: "subtitle",
    color: "red"
  });
  popSub.sub53({
    start: 171,
    end: 172,
    text: "Later on they sold it.",
    target: "subtitle",
  });
  popSub.sub54({
    start: 172,
    end: 175,
    text: "Originally this house was for their grandson’s marriage. (Daughter’s son) I renovated it for them.",
    target: "subtitle",
  });
  popSub.sub55({
    start: 175,
    end: 178,
    text: "In the end, he was doing business when he had a cerebral hemorrhage.",
    target: "subtitle",
  });
  popSub.sub56({
    start: 178,
    end: 180,
    text: "He was really young, only thirty seven or eight when he left.",
    target: "subtitle",
  });
  popSub.sub57({
    start: 180,
    end: 184,
    text: "Later she (aunt) didn’t want to see this house anymore, so she sold it.",
    target: "subtitle",
  });
  popSub.sub58({
    start: 184,
    end: 188,
    text: "At the time she sold it, it was still cheap, only 2 million yuan (~390,000 dollars Canadian) when she sold it.",
    target: "subtitle",
  });
  popSub.sub59({
    start: 188,
    end: 189,
    text: "At what time?",
    target: "subtitle",
    color: "red"
  });
  popSub.sub60({
    start: 189,
    end: 190,
    text: "Four years ago.",
    target: "subtitle",
  });
  popSub.sub61({
    start: 190,
    end: 195,
    text: "Four years ago. Four years ago is 2016. It was that cheap?",
    target: "subtitle",
    color: "red"
  });
  popSub.sub62({
    start: 195,
    end: 196,
    text: "Yeah.",
    target: "subtitle",
  });
  // Change the above events to your satisfaction, and then add your own events here, before
  // the final brackets.
  // full documentation of all the Popcorn plugins is here:
  // http://popcornjs.org/popcorn-docs/plugins/
  //});
};
