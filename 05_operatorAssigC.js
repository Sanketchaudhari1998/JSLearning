console.log(`-------------------------- TASK 1 ----------------------------`);
var interview = function (gradScore, hscScore, sscScore, candidateName) {
  var eligibility =
    gradScore >= 70 || hscScore >= 80 || sscScore >= 90
      ? "congrates you are eligible for TCS interview"
      : "Unfortunately you are not eligible for TCS interview";
  console.log(`Hello ${candidateName}, ${eligibility}`);
};
interview(80, 86, 90, "Sanket");
interview(70, 65, 55, "Pravin");
interview(60, 79, 88, "Shubham");
