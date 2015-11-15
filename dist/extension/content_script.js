/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$keys = __webpack_require__(8)['default'];

	var _interopRequireDefault = __webpack_require__(6)['default'];

	__webpack_require__(2);

	var _data = __webpack_require__(7);

	var _data2 = _interopRequireDefault(_data);

	var senderNameElements = document.getElementsByClassName('sender_name');

	var regexp = RegExp('\\b(' + _Object$keys(_data2['default']).join('|') + ')\\b', 'g');

	function hookStuff() {
	  var _loop = function (i) {
	    var fullName = senderNameElements[i].innerHTML;
	    var temp = senderNameElements[i].innerHTML;
	    var showPseudonym = function showPseudonym() {
	      senderNameElements[i].innerHTML = fullName.replace(regexp, function (_, word) {
	        return _data2['default'][word];
	      });
	    };
	    var showRealName = function showRealName() {
	      senderNameElements[i].innerHTML = temp;
	    };

	    senderNameElements[i].setAttribute("data-name", fullName);
      senderNameElements[i].parentNode..parentNode.addEventListener("mouseout", showRealName);
	  };

	  for (var i = 0; senderNameElements[i]; i++) {
	    _loop(i);
	  }
	}

	window.setInterval(hookStuff, 1000);

	_Object$keys(_data2['default']).map(function (name) {
	  if (name !== "None") {
	    var cssQuery = ''.concat('a[data-name*="', name, '"]');
	    var sideListElement = document.querySelector(cssQuery);

	    if (sideListElement) {
	      sideListElement.innerHTML = _data2['default'][name];
	    }
	  }
	});

	var observer = new MutationObserver(function (mutations) {
	  mutations.forEach(function (mutation) {
	    var newVal = $(mutation.target).prop(mutation.attributeName);
	    console.log(mutation.type);
	    if (mutation.attributeName === "class") {
	      console.log("MutationObserver class changed to", newVal);
	    } else if (mutation.attributeName === "id") {
	      console.log("MutationObserver id changed to", newVal);
	    }
	  });
	});

	// configuration of the observer:
	var config = { attributes: true, childList: true, characterData: true };

	// pass in the target node, as well as the observer options
	observer.observe(document, config);

	// This is to get the json data from pseudo.recurse.com (Thanks Sher Minn)
	// var pseudo = document.getElementsByClassName('pseudonym');
	// var leJSON = {};
	// for(var i = 0; i < pseudo.length; i++) {
	//   var realName  = pseudo[i].nextElementSibling.innerHTML;
	//   var pseudonym = pseudo[i].innerHTML;
	//   leJSON[realName] = pseudonym;
	// }

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = { "David Albert": "None", "Zach Allaun": "Cent Plasterboard", "David Anderson": "Tongue Price", "Nick Bergson-Shilcock": "None", "Benjamin Cohen": "Currency Peen", "Mary Cook": "Shape Sparrow", "Andrew Desharnais": "Loss Money", "Catherine Elder": "Credit Perfume", "Jackie Gu": "Aluminium Slope", "Allie Jones": "Low Trick", "Mark Karavan": "Pain Botany", "Frantisek Kocun": "Quartz Pencil", "Max McCrea": "Hell Icebreaker", "Michael Nielsen": "None", "Sandeep Singh": "Lyre Title", "Sonali Sridhar": "None", "Lin Taylor": "Karate Airplane", "Nancy Thomas": "None", "Gregory Thompson": "Albatross Gander", "Javier Valencia Romero": "Dish Bankbook", "Rachel Vincent": "None", "Daniel Weinstein": "Leek Lake", "John Workman": "None", "Sai Yeung": "Waitress Trowel", "Tim Abbott": "None", "Khalid Ali": "Position Keyboard", "Andrew Armenante": "Honey Bandana", "David Atkinson": "Find Deposit", "Darius Bacon": "Loaf Egypt", "Ralph Barton": "Turn Ping", "Salomao Becker": "Blouse Acoustic", "Diego Berrocal": "Spandex Reindeer", "Chip Broze": "Linen Believe", "Gonzalo Bulnes Guilpain": "Guarantee Grenade", "Nikolas Burk": "Wren Nail", "Jesse DuMond": "Duck Segment", "Rachel Ehrlich": "Crayon Mask", "Matthias Elliott": "Cake Trip", "David Farrell": "Boot Oyster", "Benjamin Gilbert": "Titanium Sail", "Jesse Gonzalez": "Blouse Port", "Veronica Hanus": "Flight Witch", "David Hargat": "Muscle Cabbage", "Marijn Haverbeke": "None", "Kacy James": "Wine Millimeter", "Michael Leff": "Police Napkin", "Andy Liang": "Zipper Xylophone", "Lauren Long": "Girdle Punch", "Kara McNair": "Platinum Plate", "Tom Murphy": "Nitrogen Burma", "Duncan Regan": "Sand Lace", "Miles Robinson": "Underclothes Sphere", "Kyle Schiller": "Soup Chess", "Miriam Shiffman": "Direction Biology", "Carrie Smith": "Kitten Calculator", "Ezekiel Smithburg": "February Icon", "Nemanja Stanarevic": "Work Deficit", "Leah Steinberg": "Rat Craftsman", "Frank Tan": "Condition Snowman", "Harry Truong": "Pelican Meter", "Anjana Vakil": "Spandex Governor", "Abass Bayo-Awoyemi": "Bit Crown", "Ilona Brand": "Voice Stick", "Barak Chamo": "Guatemalan Second", "Sher Minn Chong": "Divorced Journey", "Jake Hickey": "Chief Stick", "Shad Hopson": "Clarinet Seashore", "Lindsey Jacks": "Fireplace Care", "Martin Kleppmann": "None", "David Lechón Quiñones": "Feature Walrus", "James Lee": "Trapezoid Seaplane", "Kristin Linn": "Anatomy Closet", "Caroline Liu": "Spleen Consonant", "Cornel Punga": "Salary Peanut", "Prabhakar Ragde": "None", "Star Simpson": "None", "Jasdev Singh": "Development Friday", "Alicia Singham Goodwin": "Fountain Blanket", "Alex Takata": "Detail Pair", "Dazhong Xia": "Beginner Hovercraft", "Martin Allen": "Quart Face", "Ranjit Bhatnagar": "None", "Greg Brockman": "Encyclopedia Composition", "Jamal Carvalho": "Bagel Slope", "Charles Chamberlain": "Chord Orange", "James Coglan": "None", "Jonathan Edwards": "None", "Andrey Fedorov": "Weed Level", "Madelyn Freed": "Equipment Health", "Panya Gupta": "Armenian Pizza", "Peter Kurpiewski": "Knowledge Illegal", "Richard Layte": "Door Bean", "Haoyi Li": "None", "Leo Martel": "Kangaroo Deer", "Jeffrey Maxim": "Hubcap Peru", "Smitha Milli": "Backbone Magician", "Julie Qiu": "Pea Poison", "David Rico": "Caption Ophthalmologist", "Seth Samelson": "Slash Cormorant", "Elizabeth Sander": "Veil Retailer", "Brian Schroeder": "Book January", "Stephen Tu": "None", "David Turner": "None", "Benoit Vallon": "Wax Customer", "Aagje van der Meer": "Seeder Gender", "Liene Verzemnieks": "Cafe Digestion", "Wes Vial": "Development Feet", "Lais Vital": "Dew Den", "Cong Xiu": "Cheese Voyage", "Codanda Appachu": "Ocean Possibility", "Bradley Boccuzzi": "Instrument Home", "Laura Bochenek": "Bomb Kitty", "Eleanor Chambers": "Goat Responsibility", "Frank Chen": "Pruner Pie", "Kevin Cooper": "Database Addition", "Ashoka Finley": "Bottle Gondola", "Eden Full": "Euphonium Pint", "David Gold": "Brick Asia", "Samantha Goldstein": "Clam City", "Ann Harter": "License Detective", "Kate Heddleston": "None", "Juan Carlos Jara Loayza": "Maraca Whistle", "Joe Jean": "Worm Reason", "Kirsten Korevaar": "Tights Wax", "Nicole Lehrer": "Columnist Bar", "Philip Lewis": "Whistle Button", "Q Liu": "Carbon Editorial", "Michael Malis": "Pencil British", "Kamal Marhubi": "House Periodical", "April Neal": "Mascara Self", "Brady Neal": "Journey Foot", "Caroline Nunes": "Cabbage Oatmeal", "Ben Orenstein": "None", "Alice Pote": "Schedule Oak", "Sophie Rapoport": "Reward Graphic", "Rahul Sabbineni": "Spandex Duck", "Tim Sell": "Cobweb Donald", "Jess Sorrell": "Team Racing", "Wei Tang": "Turret Slice", "Christian Thomas": "Head Stove", "Raquel Vélez": "None", "Daniel Zhang": "Deal Cooking", "Ahmed Abdalla": "Question Window", "Mudit Ameta": "Cord Dressing", "Mehmet Apaydin": "Clerk Sound", "Chris Ball": "Pajama Discussion", "Jesse Chen": "Foundation Bench", "Paul Chiusano": "None", "Erisa Dervishi": "Map Processing", "Noella D'sa": "Rectangle Chimpanzee", "Carlos Flores": "Index Actor", "Brian Glusman": "Shears Policeman", "Jorge González": "Sweatshop Astronomy", "John Hergenroeder": "Card Glove", "Karl Higley": "Tenor Decimal", "Olivia Jack": "Handball Comfort", "Heidi Kasemir": "Judo Algeria", "Dakota Killpack": "Gallon Belgian", "Luna Lunapiena": "Increase Climb", "Nathan Marz": "None", "Emmanouil Matsis": "Health Orange", "Steven McCarthy": "Message Equipment", "Pietro Menna": "Female Frown", "Cole Murphy": "Veterinarian Head", "Yuta Okazaki": "Soil Panda", "Allison Parrish": "None", "Karen Peng": "Turkish Preface", "Ken Pratt": "Fall Cattle", "Rahul Sharma": "Ear Brace", "Mykola Smith": "Nitrogen Bracket", "Aishwarya Subramanian": "Scorpio Stamp", "Alexandra Taipale": "Fiberglass Dogsled", "Arsén Tumanyan": "Bread Ikebana", "Frank Wang": "None", "Nat Welch": "Utensil Downtown", "Nikki Bee": "Chinese Deal", "Agustín Benassi": "Stage Maraca", "Anthony Burdi": "Skirt Jam", "Joel Burget": "Tights Barometer", "Damien Delabesse": "Dragonfly Bite", "Cory Dominguez": "Screwdriver Probation", "Mark Dominus": "None", "Andrew Drozdov": "Baritone Property", "Evan Farrar": "Verdict Oak", "Geoffrey Gilmore": "Capricorn Bassoon", "Sarah Groff-Palermo": "Ferry Birch", "Eric Hambro": "Cattle Millennium", "Deanna Hood": "Christmas Trousers", "Libby Horacek": "Case Cook", "Jenna Howe": "Block Beauty", "Emma Jablonski": "Dentist Cobweb", "Christopher Kim": "Backbone Swiss", "Grzegorz Kossakowski": "None", "Robert Lefkowitz": "None", "Robert Malko": "Accountant Lute", "Karthik Mallavarapu": "Heaven Swan", "Gonçalo Morais": "Virgo Pea", "Stephen Morrison": "Space Romanian", "Aditya Mukerjee": "Sleet Bangladesh", "Michael Mulley": "Landmine Raincoat", "Lyn Nagara": "Llama Cirrus", "Neha Narula": "None", "Catherine Ojo": "Drill Clipper", "Serena Peruzzo": "Fly Felony", "Serban Porumbescu": "Hedge Palm", "Ilari Scheinin": "Pet Arrow", "Pam Selle": "Self School", "Viraj Sinha": "Park Fight", "Michelle Steigerwalt": "Growth Kilogram", "Jonathan Tan": "Revolver Stop", "Alex Zhu": "Call Foxglove", "Joseph Ahn": "Charles Biplane", "Jamie Brandon": "Door Thunderstorm", "Gloria Chou": "Farmer Cupboard", "Paul Cohn": "Cuban Illegal", "Marín Córdova": "Harmonica Library", "Jelena Cvitanovic": "Chick Lizard", "Chris Drane": "Tune Soup", "Wilhelmina Drengwitz": "Mice Insurance", "Patrick Dubroy": "None", "Noah Ennis": "Vessel Specialist", "Nathan Epstein": "Screen Bengal", "Nathaniel Foster": "Client Riddle", "David Gomez-Urquiza": "Mistake Staircase", "Chris Granger": "None", "Will Martino": "Lawyer Time", "Max McDonnell": "Sardine Toenail", "Colin McEnearney": "Imprisonment Physician", "Emil Ng": "Rainbow Musician", "Nancy Organ": "Inventory East", "Keyan Pishdadian": "Message Blood", "Jon Poler": "Order Methane", "Abdullah Rashed Ahmed": "Odometer Software", "Mateo Rodriguez": "Eye Seal", "Timothy Roy": "Sailor November", "Jim Shields": "Thistle Seat", "Ray Sohn": "Girl Drug", "Sam Tobin-Hochstadt": "None", "Claire Treyz": "Workshop Trail", "Lisa van Gelder": "Antarctica Christmas", "Martino Visintin": "Tractor Crocodile", "Scott Vokes": "None", "Bocheng Zhou": "Scarf Dash", "Fernando Andrade": "Methane Perfume", "Tansy Arron-Walker": "Men Frame", "Marie Clemessy": "Confirmation Plant", "Alexander Condello": "Pakistan Game", "Alice Duarte Scarpa": "Throat Dew", "Cody Duval": "Session Gate", "Agata Filho": "Female Feast", "Austin Guest": "Felony Rugby", "Irvin Hwang": "Foxglove Shock", "David Karapetyan": "Libra Withdrawal", "James Keene": "Father Army", "Libby Kent": "Revolve Throat", "Rok Krulec": "Decision Lumber", "Michael Lee": "None", "Matt Might": "None", "Nikita Moiseyev": "Brass Tortellini", "Mary Mokuolu": "Gander Uzbekistan", "Amanda Pickering": "France Surprise", "Casey Rodarmor": "Alloy Hearing", "Thomas Schneider": "Backbone Process", "Tyler Simko": "Cloudy Nut", "Alan Wang": "Jacket Santa", "Florian Breunig": "Library Ice", "Kuan Butts": "Replace Cowbell", "Nicholas Cassleman": "Detective Gosling", "Nicholas Chammas": "Arm Textbook", "Alan Cohen": "Octagon Sphere", "Agustin Diaz": "Aftermath Plier", "Michael Ford": "Bamboo Treatment", "Adrien Guillo": "Salmon Monkey", "Julia Hansbrough": "Italian Sideboard", "Greg Hendershott": "Coin Mouth", "Cerek Hillen": "Children Satin", "Muriel Holzer": "Missile Cymbal", "Tyler Jarjoura": "Bugle Sturgeon", "Devora Krasnianski": "Wound Deficit", "Sammy Krieger": "Vacuum Regret", "Chase Lambert": "Walk Puppy", "Vito LaVilla": "Grease Thrill", "John Loeber": "None", "Leta Montopoli": "Softdrink Fat", "Rob Moore": "Maple Replace", "Matthew Parker": "Freighter Text", "Waldemar Quevedo Salinas": "Citizenship Tanzania", "Lindsey Raymond": "Slope Love", "Patrick Renschler": "Croissant Development", "Stan Schwertly": "Dictionary Success", "Geoff Shannon": "Tyvek Minister", "Marcin Skirzynski": "Oatmeal Roast", "Margo Smith": "Advantage Broccoli", "Liz Starin": "Pantry Kiss", "Sean Ting": "License Slip", "Julia Tufts": "Stopsign Column", "Pedro Yamada": "Editor Pet", "Jean Yang": "None", "Alex Alekseyev": "Rake Bee", "Max Blum": "Shell Swedish", "Sharell Bryant": "Paperback Man", "Alyssa Carter": "Celery Rock", "Eunsong Choi": "Brother Sound", "Alan Chusuei": "Scorpio Sort", "Carlos De la Guardia": "Fiberglass Blizzard", "Victor Felder": "Attraction Stomach", "Ashley Glidden": "Spade Criminal", "Sarah Kuehnle": "Product Finger", "Crista Lopes": "None", "Jesse Luehrs": "Timer Beach", "Surendran Mahendran": "Salary Jewel", "Connor Osborn": "Basket Sundial", "Nathaniel Parrott": "Touch Booklet", "Stephanie Samson": "Modem Jeans", "Joe Schwartz": "Fibre Cloakroom", "Tanoy Sinha": "Japanese Otter", "Susan Steinman": "Twist Dirt", "Lynn Vaughan": "Hallway Mercury", "Madhumitha Viswanathan": "Soil Geology", "Adam Watters": "Front Shoe", "Brent Atkinson": "Eggplant Dipstick", "Amit Bansil": "Deadline Sleet", "Alice Chen": "Rowboat Meat", "Jonathan Dahan": "Pink Grouse", "Sophia Davis": "Uncle Invention", "Michael Detmold": "Reminder Swamp", "Noam Finkelstein": "Ethiopia Lamb", "Tristan Fisher": "Trail Blow", "Brian Graham": "Couch Knee", "Brian Haines": "Burma Beam", "Westley Hennigh": "Archeology Fireman", "Leigh Honeywell": "None", "Matthew Huebert": "Grouse Experience", "Miriam Lauter": "Shock Node", "Giorgio Leveroni": "Protocol Plant", "Stephanie Losi": "Probation Gladiolus", "Maia McCormick": "Pediatrician Mouse", "Andrew Mulholland": "Prosecution Wind", "Liuda Nikolaeva": "Throat Gym", "Daniel Parton": "Jail November", "Idris Raja": "Invention Action", "Jacob Schonberg": "Alcohol Ophthalmologist", "Carlos Serrano": "Swedish Fir", "Sindhu Sundar": "Kilometer Mouth", "José Valim": "None", "Marina Wahl": "Copyright Dime", "Sam Whitmore": "Laborer Blouse", "Michael Arntzenius": "Pillow Venezuelan", "Nava Balsam": "Example Pie", "Victor Baybekov": "Caution Propane", "Kyle Beyer": "Spain Advice", "Ryan Case": "Gliding Buffet", "Patricia Castellanos": "Society Purple", "Puneeth Chaganti": "Piccolo Cherry", "Denise Fernandez": "Porcupine Click", "Sean Garborg": "Europe Hat", "Nick Hamann": "Soldier Lasagna", "Songtao Hei": "Korean Prison", "Jorge Izquierdo": "Bibliography Wrench", "Alex Jose": "Cereal Frost", "Daria Jung": "Math Knight", "Rachel King": "Rhinoceros Scorpion", "Georgi Knox": "Relation Arithmetic", "Minnie Lai": "Rock Museum", "Marcus Malka": "Tile Flock", "Samer Masterson": "Yarn Eyeliner", "Costa Michailidis": "Litter Scorpion", "Bert Muthalaly": "Drizzle Iraq", "Sarah Parker": "Building Cycle", "Danielle Pham": "Cucumber Baby", "Arya Popescu": "Bowl Purpose", "Marisa Reddy": "Paste Chicory", "Brian Ruslim": "Basketball Wool", "Ethan Sherbondy": "Tuba Shoemaker", "Eric Shyong": "Racing Population", "Laura Skelton": "Island Shark", "Dana Sniezko": "Novel Multimedia", "Nick Sweeting": "Door Transport", "Paul Tagliamonte": "None", "Max Veytsman": "Crib Puppy", "Amber Wilcox-O'Hearn": "Antelope Credit", "Sahat Yalkabov": "Polyester Sandra", "Jasmine Yan": "Pendulum Soybean", "Raymond Zeng": "Department Pin", "Rose Ames": "Pot Rutabaga", "Fredrik Antell": "Badger Cry", "Matthew Avant": "Century Toothbrush", "Ralf Becker": "Deadline Pie", "Laura Bledaite": "Soybean Cuticle", "David-P Branner": "January Chin", "Lita Cho": "Lyocell Capricorn", "Mel Chua": "None", "Decky Coss": "Coke System", "Evan Czaplicki": "None", "David Dalrymple": "Panty Unit", "Andreas Dewes": "Zoo Lawyer", "Katrina Ellison Geltman": "Fox Basement", "Patricia Estridge": "Shoulder Law", "Andrea Fey": "Panty Cellar", "J.J. (Joel) Fliegelman": "Fountain Reward", "Jeff Fowler": "Secure Marimba", "Maja Frydrychowicz": "Trout Deer", "Amy Hanlon": "Knife Kiss", "Justin Huang": "Seagull Sister", "Ville Juutilainen": "Start Capital", "Damian Kao": "Retailer Motorcycle", "Suraj Kapoor": "Capricorn Sushi", "Stefan Karpinski": "None", "Brian Kim": "Voice Hacksaw", "Mirko Klukas": "Tiger Lobster", "Lindsey Kuper": "None", "Sean Lawrence": "Hurricane Cord", "Paul-Jean Letourneau": "Slave Bandana", "Chen Lin": "Title Teller", "Bhushan Lodha": "Squirrel Decrease", "Matthew Long": "Snowstorm East", "Robert Lord": "Manager Answer", "Kevin Lynagh": "None", "Zachary Markin": "Twine Forehead", "Jessica McKellar": "None", "Victor Miclovich": "Size Interactive", "Andrée Monette": "Attraction Skill", "Sean Murphy": "Furniture Oatmeal", "Lucas Newman": "Actor Silk", "Will Orzo": "Ronald Stranger", "Gayane Petrosyan": "Myanmar Garlic", "Jeffrey Polanco": "Polish Mitten", "Mindy Preston": "Equipment Bar", "Greg Price": "None", "Patrick Redmond": "Segment Cheese", "Christopher Ryan": "Sunshine Hacksaw", "Mark Samman": "Grass Plasterboard", "Stuart Sandine": "Castanet Bangle", "Gina Schmalzle": "Panties Carnation", "Riley Shaw": "Scooter Angora", "Jacob Skelcy": "Tanzania Connection", "Zach Smith": "Reason Pantry", "Robert Sokolowski": "Visitor Tie", "William Sommers": "Tuna Aftermath", "Pablo Torres": "Invention Trowel", "Carl Vogel": "Banker Person", "Neeraj Wahi": "Request Lyocell", "Alex Whitney": "Miniskirt Wallet", "Benjamin Wigoder": "Roast Norwegian", "Lea Albaugh": "Push Fuel", "Zunayed Ali Morsalin": "Random Gliding", "Anna Andresian": "Author Eyebrow", "Pierre-Yves Baccou": "Cathedral Agreement", "Rebecca Bainbridge": "Tree Bassoon", "Katerina Barone-Adesi": "Question Punch", "Moshe Bildner": "Claus Shirt", "Jeff Blagdon": "Hall Society", "Will Byrd": "None", "Will Chapin": "Orchid Shoe", "Jonas De Vuyst": "Hamster Graphic", "Brian Dignan": "Music Look", "Fei Dong": "Power Maraca", "Gideon Dresdner": "Pruner Ellipse", "Nadia Elfarnawani": "Vegetable Test", "Julia Evans": "Close Slime", "Denis Garcia": "Crow Structure", "Rishi Ghosh": "Snowflake Napkin", "Polina Giralt": "Lentil Step", "Liam Griffiths": "Stopsign Window", "Philip Guo": "None", "Solveig Hakestad Hansen": "Beech Month", "Sumana Harihareswara": "Frame Beetle", "Stephen Katz": "Competitor Test", "Andrew Kelley": "Archer Support", "Leslie Klein": "Science Teeth", "Vlad Kozin": "Improvement Cloth", "Daphne Larose": "Wax Drill", "Brian Le": "Hate Eggplant", "Glyph Lefkowitz": "None", "Fabian Lischka": "Study Appeal", "Kyle Littler": "Diamond Bathroom", "Marcus Ljungblad": "Rest Sousaphone", "Mehul Mandania": "Ease Input", "Ashton McCrate": "Wrecker Physician", "Ron Minsky": "None", "Lyndsey Moulds": "Harmony Passive", "John Mumm": "Colombia Physician", "Kate Murphy": "Candle Citizenship", "David Nolen": "None", "Maria Pacana": "Grass Scorpion", "Adam Pash": "Cheese Seeder", "Anton Podviaznikov": "Smoke Goat", "Smita Purekar": "Male Freeze", "Timur Ridjanovic": "Index Accelerator", "Amy Roberts": "Helicopter Mustard", "Alex Rudnick": "None", "Alex Segura": "Feature Zipper", "Stacey Sern": "Waste Shape", "Rupa Shankar": "Juice Cheese", "Anna Sheaffer": "Justice Sardine", "Nancy Shen": "Dryer Dredger", "Rob Sicurelli": "Grenade Temple", "Katie Silverio": "Twine Rule", "Emily Sommer": "Description Jewel", "Jari Takkala": "Girdle Foxglove", "Karan Tamhane": "Treatment Squash", "Travis Thieman": "Sky Scanner", "Monica Toth": "Purpose Crime", "Filippo Valsorda": "Europe Texture", "Ryan Vergeront": "Police Cultivator", "Mike Walker": "Measure Celery", "Paul Wang": "Oak Ketchup", "Stewart Watts": "Surfboard Language", "Joe Wilner": "Kamikaze Siberian", "Sunil Abraham": "Hot Blood", "Muhaimin Ahsan": "Soccer Hacksaw", "Sulaiman Alkhaled": "Saxophone Crawdad", "Nada Amin": "None", "Sebastian Bauersfeld": "Pentagon Sampan", "Derek Bikoff": "File Report", "Tom Buchok": "German Spinach", "Robert Buonpastore": "Desert Cross", "Alex Clemmer": "Octopus Beautician", "Matthew Davis": "Castanet Clipper", "Joe Del": "End Yew", "James Ferguson": "Spain Sparrow", "Peter Fraenkel": "Sail Forest", "Peter France": "Milk Bomb", "Alyssa Frazee": "Pike Stocking", "Richard Harrington": "Join Secretary", "Nabil Hassein": "Believe Hot", "Matthew Isabel": "Hubcap Pencil", "Ed Kelley": "Olive Quarter", "George King": "Nylon Pheasant", "Dan Koslow": "Tablecloth Canvas", "Thomas Lahr": "Wrench Bass", "Rebecca Langer": "Jute Ball", "Michael Lauria": "Ray Encyclopedia", "Julie Lavoie": "Drawbridge Money", "Amandine Lee": "History Peony", "Jimmy Li": "Armchair Toe", "David Lichtenberg": "Afterthought Engineering", "Laura Lindzey": "Random Spider", "Yin Liu": "Hook Point", "Zack Maril": "Japan Suit", "Travis McDemus": "Message Panty", "Jade Misenas": "Pine Plier", "Willson Mock": "Starter Nerve", "Alice Monday": "Circulation Mask", "Sarah Moore": "Person Temple", "Paolo Moretti": "Bolt Shell", "Pedro Moura": "Community Leek", "Dan Na": "Zipper Timpani", "Bella Norvig": "Look Swamp", "Peter Norvig": "None", "Javier Olaechea": "Vibraphone Middle", "Alisa Palson": "Drake Quill", "Alex Payne": "None", "Tomislav Pesut": "Kettle Diaphragm", "James Porter": "Instrument Sunshine", "Sam Post": "Algebra Mailman", "Robert Pozoga": "Red Attention", "Brandon Rhodes": "None", "Doron Roberts-Kedes": "Gallon Bike", "Brian Rubinton": "Purchase Pruner", "Carl Sednaoui": "Prison Fiber", "Erik Seidel": "Dugout Lynx", "Alex Skryl": "Furniture Soil", "Lauren Sperber": "Grease Engineer", "Paige Stoermer": "Protest Cafe", "Xiayun Sun": "Purchase Deer", "Erik Taubeneck": "Missile Button", "Martin Törnwall": "Interest Alto", "James Wang": "Shell Yacht", "Ericka Ward": "Collar Air", "Simon Weber": "Blood Temple", "Eric Weinstein": "Pastor Glass", "Jay Weisskopf": "Pet Baboon", "John White": "None", "Ian Whitlock": "Transport Wind", "MacLane Wilkison": "Dinner Dentist", "Alex Wilson": "Athlete Cell", "Aki Yamada": "Plantation Donkey", "Katherine Ye": "Cork Sofa", "Nadia Yudina": "Hamster Billboard", "Nina Zakarenko": "Border Mexican", "Maggie Zhou": "Female Chinese", "Shuxiu Zhou": "Perch Spandex", "Damon Zucconi": "Mind Silica", "Bill Abresch": "Pencil Hose", "Santiago Albo": "Teacher Pair", "Greg Altman": "Pot Animal", "Neha Batra": "Stone Celsius", "Alexandre Beaulne": "Aquarius Lobster", "Be Birchall": "Jogging Croissant", "Thomas Boyt": "Select Quality", "Nathan Brei": "Bomb Beggar", "Richard Burton": "Bulldozer Crab", "Jin Chung": "Country Winter", "Jennifer Clark": "Timbale Sousaphone", "Nick Collins": "Opera Alarm", "Christopher Edgemon": "Chill Sauce", "Daniel Espeset": "Existence Dinosaur", "Patrick Estabrook": "Eye Locust", "Scott Feeney": "Engine Babies", "Adam Fraser": "Potato Creature", "Chuck Ha": "Plasterboard Vacuum", "Einas Haddad": "East Perfume", "Leah Hanson": "Client Cloth", "Sae Rom Hong": "Sentence Guide", "Raúl Jara": "Oxygen Volcano", "Feivel Jellyfish": "Tongue Processing", "Jacob Kaplan-Moss": "None", "Margo Kulkarni": "Birch Mallet", "Sasha Laundy": "Schedule Reaction", "Lushi Li": "Gong Brazil", "Becca Liss": "Moat Innocent", "David Lundgren": "Llama Revolve", "Dan Luu": "Authorization Balloon", "Marek Majkowski": "Playground Toad", "Sean McGovern": "Chemistry Eye", "Clint Newsom": "Parallelogram Beret", "Angela Panfil": "Grey Spain", "Colin Regan": "Window Pansy", "Omar Rizwan": "Attempt Sausage", "Eric Romano": "Circle Greece", "Dom Roselli": "Invention Bubble", "Daniel Schobel": "Arm Nest", "Russell Smith": "Potato Tortoise", "Leocadio Tiné": "Barber Bangladesh", "Hasen Ahmad": "Cathedral Hawk", "Senthil Arivudainambi": "Pyramid Time", "Vid Ayer": "Nail Rugby", "Edie Beer": "Greek Calculator", "Angus Burton": "Hospital Desire", "Betsy Cannon": "Place Pair", "Ruby Childs": "Loss Friction", "Alejandro Ciniglio": "Harp Gorilla", "Pieter De Vlieger": "Kettle Banker", "Zach Dexter": "Danger Guide", "Leo Franchi": "Drug Way", "Chad Jablonski": "Kitty Doubt", "Blake Johnson": "Pleasure Venezuelan", "Dwayne Jones": "Summer Copy", "Ryan Koven": "Tire Gymnast", "Ted Lee": "Perch Shelf", "Sandra Lombardi": "Libra Swim", "Corey Lynch": "Accelerator Plantation", "Myf Ma": "None", "Aria Moraine": "Revolve Shrimp", "Paul Nichols": "Sardine Nerve", "Vincent Ohprecio": "Slave Crack", "Nimrod Omer": "Supply Sampan", "Sitong Peng": "Quality October", "Conner Petzold": "Rate Country", "Sharadha Ramakrishnan": "Bike Case", "Kisha Richardson": "Olive Jewel", "Erick Rivas": "Ukraine Disadvantage", "Tyler Robertson": "Clarinet Modem", "Stan Rozenraukh": "Deal Rectangle", "Josh Schneier": "Weather Faucet", "Peter Seibel": "None", "James Shieh": "Geometry Charles", "Holger Sindbaek": "Colt Bomb", "Kenya Stewart": "Tea Walrus", "Julie Swoope": "Parent Structure", "Oskar Thorén": "Ethernet Dock", "Huyen Tran": "Stage Bus", "Robert Tunney": "Place Salmon", "Kristen Widman": "Blade System", "Matthew Wieler": "Yak Sign", "Jenna Zeigen": "Hallway Laborer", "Shirmung Bielefeld": "Sousaphone Bike", "Ben Brittain": "Surprise Male", "David Campbell": "Sandra Street", "Ingrid Cheung": "Snowboarding Loss", "Alexander Clare": "Anethesiologist Suit", "Jackie Cohen": "Bath Cappelletti", "Dominik Dabrowski": "Bottle Nerve", "Pepijn de Vos": "Node Twine", "Sean DuBois": "Jewel Haircut", "Amy Dyer": "Select Geranium", "Loftie Ellis": "Supply Granddaughter", "Yael Elmatad": "Teacher Drake", "Julien Fantin": "Boat Dinosaur", "Eric Fode": "Siberian Verdict", "Dillon Forrest": "Lace Work", "Timnit Gebru": "Korean Dime", "Dustin Getz": "News Baboon", "Martha Girdler": "Case Flock", "Sarah Gonzalez": "Objective Active", "Nathan Hoffman": "Methane June", "Allison Kaptur": "Planet Goldfish", "Jason Laster": "Grouse Garlic", "Beverly Lau": "Dust Shame", "Trey Lawrence": "Divorced Badge", "David Leibovic": "Quartz Waitress", "Derrick Lin": "Syria Bookcase", "Bethany Macri": "Football Botany", "Govind Manian": "Spy Preface", "Dennis Martensson": "Niece Level", "Victoria Mo": "Motion Trail", "Leila Muhtasib": "Crush Traffic", "Lisa Neigut": "Bamboo Geometry", "David Peter": "Click Attention", "Trucy Phan": "Antelope Feast", "Bill Ramsey": "Inventory Hygienic", "Miles Sandlar": "Case Stock", "Stefanie Schirmer": "Twist Education", "Linnea Shin": "Hat Path", "Six Silberman": "Imprisonment Outrigger", "Arjan Singh": "Mallet Vacation", "Ceri Stagg": "Development Description", "Greg Stearns": "Dance Leaf", "Sunah Suh": "Scent Panties", "Jane Wang": "Quarter Delivery", "Vera Yin": "Form Piano", "Zain Allarakhia": "None", "Xavier Antoviaque": "None", "Tom Ballinger": "None", "Josh Bronson": "None", "Estevo Castro": "None", "Andrew Chen": "None", "Lucas Chi": "None", "Steven Ciraolo": "None", "John Connolly": "None", "Isaac Gonzalez": "None", "Kevin Kerr": "None", "Colin Marc": "None", "Dave McKenna": "None", "Nathan Michalov": "None", "Brendan Nee": "None", "Sidney San Martín": "None", "Gregory Schwedock": "None", "Danielle Sucher": "None", "Ben Beecher": "None", "Lev Berlin": "None", "Sam Epstein": "None", "Karl Gusner": "None", "John Krauss": "None", "Kristian Kristensen": "None", "Seth Murphy": "None", "Jordan Orelli": "None", "Clint Sieunarine": "None", "Julian Connor": "None", "James Dennis": "None", "Alan O'Donnell": "None", "Artem Titoulenko": "None", "Test User": "None", "Kyle Wanamaker": "None" };
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);
	module.exports = __webpack_require__(16).Object.keys;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(11);

	__webpack_require__(13)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(16)
	  , fails   = __webpack_require__(19);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }
/******/ ]);
