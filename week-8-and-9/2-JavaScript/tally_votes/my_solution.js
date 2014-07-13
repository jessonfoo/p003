// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge [by myself, with:]

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

/* The name of each student receiving a vote for an office should become a property 
of the respective office in voteCount.  After Alex's votes have been tallied, 
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode

// follow the psudo code from week 7



//Initial Solution

// for (var voter in votes) {
//   var voterObj = votes[voter];
//   var pres = voterObj.president;
//   var vicePres = voterObj.vicePresident;
//   var secretary = voterObj.secretary;
//   var treas = voterObj.treasurer;

//   if (voteCount.president[pres] == null) {
//     voteCount.president[pres] = 1;
//   } else {
//     voteCount.president[pres] += 1;
//   }

//   if (voteCount.vicePresident[vicePres] == null) {
//     voteCount.vicePresident[vicePres] = 1;
//   } else {
//     voteCount.vicePresident[vicePres] += 1;
//   }

//   if (voteCount.secretary[secretary] == null) {
//     voteCount.secretary[secretary] = 1;
//   } else {
//     voteCount.secretary[secretary] += 1;
//   }

//   if (voteCount.treasurer[treas] == null) {
//     voteCount.treasurer[treas] = 1;
//   } else {
//     voteCount.treasurer[treas] += 1;
//   }
// }

// for (var position in voteCount) {
//   var max_votes = 0;
//   for (var candidate in voteCount[position]) {


//     if (voteCount[position][candidate] > max_votes) {
//       officers[position] = candidate;
//       max_votes = voteCount[position][candidate];
//     }
//   }
// }
//

// __________________________________________
// Refactored Solution
for (var voter in votes) {
  var voterObj = votes[voter];
  var pres = voterObj.president;
  var vicePres = voterObj.vicePresident;
  var secretary = voterObj.secretary;
  var treas = voterObj.treasurer;

  if (voteCount.president[pres] == null) {
    voteCount.president[pres] = 1;
  } else {
    voteCount.president[pres] += 1;
  }

  if (voteCount.vicePresident[vicePres] == null) {
    voteCount.vicePresident[vicePres] = 1;
  } else {
    voteCount.vicePresident[vicePres] += 1;
  }

  if (voteCount.secretary[secretary] == null) {
    voteCount.secretary[secretary] = 1;
  } else {
    voteCount.secretary[secretary] += 1;
  }

  if (voteCount.treasurer[treas] == null) {
    voteCount.treasurer[treas] = 1;
  } else {
    voteCount.treasurer[treas] += 1;
  }
}

for (var position in voteCount) {
  var maxVotes = 0;
  for (var candidate in voteCount[position]) {
 

    if (voteCount[position][candidate] > maxVotes) {
      officers[position] = candidate;
      maxVotes = voteCount[position][candidate];
    }
  }
}

// __________________________________________
// // Reflection

// this challenge was more of the more tedious ones. again it was was just converting ruby to javascript, but 
// the difference in syntax is very confusing. I hope to get to no both by heart by the end of the program.
// over all this challenge was fairly straight forward, ad there wasnt much to refactor.




// __________________________________________
// Driver Code:  Do not alter code below this line.


// function assert(test, message, test_number) {
//   if (!test) {
//     console.log(test_number + "false");
//     throw "ERROR: " + message;
//   }
//   console.log(test_number + "true");
//   return true;
// }

// assert(
//   (voteCount.president["Bob"] === 3),
//   "Bob should receive three votes for President.",
//   "1. "
// )

// assert(
//   (voteCount.vicePresident["Bob"] === 2),
//   "Bob should receive two votes for Vice President.",
//   "2. "
// )

// assert(
//   (voteCount.secretary["Bob"] === 2),
//   "Bob should receive two votes for Secretary.",
//   "3. "
// )

// assert(
//   (voteCount.treasurer["Bob"] === 4),
//   "Bob should receive four votes for Treasurer.",
//   "4. "
// )

// assert(
//   (officers.president === "Louise"),
//   "Louise should be elected President.",
//   "5. "
// )

// assert(
//   (officers.vicePresident === "Hermann"),
//   "Hermann should be elected Vice President.",
//   "6. "
// )

// assert(
//   (officers.secretary === "Fred"),
//   "Fred should be elected Secretary.",
//   "7. "
// )

// assert(
//   (officers.treasurer === "Ivy"),
//   "Ivy should be elected Treasurer.",
//   "8. "
// )