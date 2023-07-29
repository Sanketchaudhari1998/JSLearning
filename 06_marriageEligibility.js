function maleMarriageEligibility(gender, age) {
  if (gender == "Other") {
    console.log(
      `You provide your gender is ${gender}, Please provide valid data`
    );
  } else {
    if ((gender == "Male" && age >= 21) || (gender == "Female" && age >= 18)) {
      console.log(
        `Your gender is ${gender} and age is ${age}, you are eligible for marriage`
      );
    } else {
      console.log(
        `Your gender is ${gender} and age is ${age}, you are not eligible for marriage`
      );
    }
  }
}
maleMarriageEligibility("Male", 17);
maleMarriageEligibility("Male", 25);
maleMarriageEligibility("Female", 28);
maleMarriageEligibility("Female", 16);
maleMarriageEligibility("Other", 35);
maleMarriageEligibility("Other", 41);
