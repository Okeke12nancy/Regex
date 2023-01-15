function masterCard(card) {
  var pattern = /^5[1-5][0-9]{14}$/;
  /** Explanaton for the Regex pattern
    ^5 means must srart with the number 5
    [1-5] means 1-5 matches a single character in the range between 1 and 5
    [0-9] 0-9 matches a single character in the range between 0 and 9
    {14} matches the previous token exactly 14 times
    $ asserts position at the end of a line
    **/
  var isMasterCard = pattern.test(card);

  if (isMasterCard === true) {
    console.log("It is a MasterCard");
  } else {
    console.log("Not a MasterCard");
  }
  return isMasterCard;
}

masterCard(5199111279725234);
masterCard(3124767990435667);
