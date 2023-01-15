//Question//
/** Write a Javascript program to validate a credit card number. You can indicate the credit card type you are validating. For example Visa Card, Mastercard etc.
 */

// Solution //

/** There are many card types, but for test purposes, our function will only be validating 4 card types which are;
 *  1. MasterCard
 * 2. America Express card (Amex Card)
 * 3. Visa Card
 * 4. Union Pay Card *
 */
cardValidation = function creditCardValidation(card) {
  /** Here,
   ** The validation works by checking if a given text input matches a particular pattern;
-To validate a Mastercard, it must be 16 digits, startng with 51 through 55
-To validate an Amex Card, it must be 15 digits starting with 34 or 37
-To validate a visa Card,it must be either 13 0r 16 digits and starts with 4
-To validate a Union Pay card, it must have 16 digits and starts with 62
*/

  var masterCard = /^5[1-5][0-9]{14}$/;
  var amexCard = /^3[47][0-9]{13}$/;
  var visaCard = /^4[0-9]{12}(?:[0-9]{3})?$/;
  var unionPayCard = /^(62[0-9]{14,17})$/;

  // Here, we are validating the credit cardnumber of 4 cards
  var isMasterCard = masterCard.test(card);
  var isAmexCard = amexCard.test(card);
  var isVisaCard = visaCard.test(card);
  var isUnionPayCard = unionPayCard.test(card);

  // Here, we wrote our if statements
  if (isMasterCard === true) {
    console.log("This is a MasterCard Number");
  } else if (isAmexCard === true) {
    console.log("This is an Amex Card Number");
  } else if (isVisaCard === true) {
    console.log("This is a Visa Card Number");
  } else if (isUnionPayCard === true) {
    console.log("This is a Union Pay Card Number");
  } else {
    console.log("This is not a credit card Number");
  }
  return cardValidation;
};

// Here we tested our code to know if it works.
cardValidation(5112345756329028);
cardValidation(347456786523345);
cardValidation(4123678902345);
cardValidation(6212345677923467);
cardValidation(12345678);
cardValidation(371449635398431);
cardValidation(4242424242424242);
cardValidation(5555555555544444);

// In conclusion, Our code runs, lol...
