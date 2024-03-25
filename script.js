const questions = [
    {
        question: "Question 1: Years of business experience",
        options: [
          { text: "1-5", weightage: 0 },
          { text: "5-10", weightage: 1 },
          { text: "10-20", weightage: 2 },
          { text: "20+", weightage: 3 }
        ]
    },
    {
        question: "Question 2: Experience in this business sector",
        options: [
          { text: "1-5", weightage: -2 },
          { text: "5-10", weightage: 1 },
          { text: "10-20", weightage: 2 },
          { text: "20+", weightage: 3 }
        ]
    },
    {
        question: "Question 3: Experience as a CEO",
        options: [
          { text: "0-5", weightage: -2 },
          { text: "1-5", weightage: 0 },
          { text: "5-7", weightage: -1 },
          { text: "7+", weightage: 3 }
        ]
    },
    {
        question: "Question 4: Part of the team",
        options: [
          { text: "COO", weightage: 2.000001 },
          { text: "CTO", weightage: 2.000002 },
          { text: "CFO", weightage: 2.000003 },
          { text: "Product Manager", weightage: 1.000001 },
          { text: "Sales", weightage: 1.000002 }
        ],
        isMultipleChoice: true 
    },
    {
        question: "Question 5: Experience as COO, CTO, CFO combined",
        options: [
          { text: "1-5", weightage: -1 },
          { text: "5-10", weightage: 0 },
          { text: "10-20", weightage: 2 },
          { text: "20+", weightage: 3 }
     
        ]
    },  
    {
        question: "Question 6: CEO willingness to step aside for an experienced CEO",
        options: [
          { text: "No", weightage: -2 },
          { text: "yes in 2-3", weightage: 2 },
          { text: "yes in 3-5", weightage: 1 }
     
        ]
    },
    {
        question: "Question 7: Rate the founder’s coachability (likert scale)",
        options: [
            { text: "uncoachable", weightage: -2},
            { text: "Open to Advisors", weightage: 1},
            { text: "Wants coaching in areas outside of experience", weightage: 1},
            { text: "Coachable", weightage: 2},
            { text: "Highly Coachable with active mentorship", weightage: 3}
        ]
    },
    {
        question: "Question 8: How much of the team is in place?",
        options: [
            { text: "Founder only", weightage: -1},
            { text: "One other leader firmly in place", weightage: 0},
            { text: "Team identified but mostly on the sidelines", weightage: 1},
            { text: "Experienced team in place and active", weightage: 4}
        ]
    },
    {
        question: "Question 9: Size of the target market in total sales potential",
        options: [
            { text: "Less than $50M", weightage: -2},
            { text: "$50M - $100M", weightage: 1},
            { text: "More than $100M", weightage: 3}
        ]
    },
    {
        question: "Question 10: Potential for annual revenue of company in five years",
        options: [
            { text: "Less than $20M", weightage: -2},
            { text: "$20M - $50M", weightage: 0},
            { text: "$50M - $100M", weightage: 1},
            { text: "More than $100M", weightage: 3}
        ]
    },
    {
        question: "Question 11: Annual Revenue to date",
        options: [
            { text: "Pre-Revenue", weightage: -1},
            { text: "Less than $100K", weightage: 0},
            { text: "$100K - $500K", weightage: 1},
            { text: "More than $500K", weightage: 3}
        ]
    },
    {
        question: "Question 12: To what extend is the product defined and developed",
        options: [
            { text: "Considering various prototypes", weightage: -2},
            { text: "Well defined, prototype shows UVP", weightage: 0},
            { text: "Product in Beta with Customer Feedback", weightage: 2},
            { text: "Orders and sales with Product", weightage: 4}
        ]
    },
    {
        question: "Question 13: Is the product compelling to customers?",
        options: [
          { text: "It is interesting as a benefit", weightage: -2 },
          { text: "It is essential for a significant pain point", weightage: 1},
          { text: "Is it essential and has few barriers to adoption", weightage: 3 }
        ]
    },
    {
        question: "Question 14: Can your product be duplicated by others?",
        options: [
          { text: "Other similar products are on the market place", weightage: -1 },
          { text: "Easily copied, no IP, so racing to be first", weightage: 0},
          { text: "Duplication would be difficult", weightage: 1 } ,
          { text: "Product is protected by trade secrets and/or patented.", weightage: 3 }
        ]
    },
    {
        question: "Question 15: Strength of competitors in this marketplace",
        options: [
          { text: "Dominated by a single large player", weightage: -2 },
          { text: "Dominated by several players", weightage: 0},
          { text: "Fractured, many small players", weightage: 2} ,
          { text: "New market all together", weightage: -1 }
        ]
    },
    {
        question: "Question 16: Strength of competitive products",
        options: [
          { text: "Competitive products range in quality from excellent to poor", weightage: -2 },
          { text: "Competitive products are weak", weightage: 1},
          { text: "Few competitive products but need is evident", weightage: 3} ,
          { text: "New market without a defined product", weightage: -1 }
        ]
    },
    {
        question: "Question 17: Strength of brand",
        options: [
          { text: "We have not yet developed our company/product branding and messaging", weightage: -2 },
          { text: "We have an early brand presence that we hope to evolve and improve", weightage: 0},
          { text: "We have a strong brand with clear brand guidelines, messaging platform and product materials", weightage: 2}
        ]
    },
    {
        question: "Question 18: Sales Channel",
        options: [
          { text: "Haven't started building sales channels yet", weightage: -2 },
          { text: "We have a GTM plan, but have not started yet", weightage: 0 },
          { text: "We have beta testers in use", weightage: 1 },
          { text: "Channel secure, with trial orders started", weightage: 3 }
        ]
    },
    {
        question: "Question 19: Strategic Partners",
        options: [
          { text: "No strategic partners identified", weightage: -1 },
          { text: "Negotiations with strategic partners underway", weightage: 1 },
          { text: "Strategic partner(s) contracted", weightage: 2 }
        ]
    },
    {
        question: "Question 20: Funding to date",
        options: [
          { text: "Owner and investor capital under $1M", weightage: 0 },
          { text: "Owner and investor capital $1M-$2.5M", weightage: 2 },
          { text: "Owner and investor capital above $2.5M", weightage: 3 }
        ]
    },
    {
        question: "Question 21: Funding Now",
        options: [
          { text: "Not actively seeking funding", weightage: 1 },
          { text: "Seeking <$1M", weightage: 1 },
          { text: "Seeking $1M-$3M", weightage: 2 },
          { text: "Seeking >$3M", weightage: 3 }
        ]
    },
    {
        question: "Question 22: Funding Stage",
        options: [
          { text: "None", weightage: -1 },
          { text: "Angel", weightage: 0 },
          { text: "Pre-Seed", weightage: 0 },
          { text: "Seed", weightage: 2 },
          { text: "Series A", weightage: 3 }
        ]
    },
    {
        question: "Question 23: Future Funding",
        options: [
          { text: "We expect revenue to sustain our growth", weightage: 1 },
          { text: "<6 months until next round", weightage: 0 },
          { text: "6-18 months until next round", weightage: 1 },
          { text: ">18 months until next round", weightage: 3 }
        ]
    }
  ];

// Define global variables
let currentQuestionIndex = 0;
let questionResponses = new Array(questions.length).fill(null);

// Function to display current question
function displayCurrentQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionsContainer = document.getElementById('questionsContainer');
  questionsContainer.innerHTML = '';

  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');
  questionDiv.innerHTML = `<p>${currentQuestion.question}</p>`;
  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('options');
  
  currentQuestion.options.forEach(option => {
    const input = document.createElement('input');
    input.type = currentQuestion.isMultipleChoice ? 'checkbox' : 'radio';
    input.name = 'q' + currentQuestionIndex;
    input.value = option.weightage;
    input.id = option.text.replace(/\s+/g, '-').toLowerCase();

    // Check if the response for this question index exists and is not null
    if (questionResponses[currentQuestionIndex] !== null) {
      if (Array.isArray(questionResponses[currentQuestionIndex])) {
        if (questionResponses[currentQuestionIndex].includes(option.weightage)) {
          input.checked = true;
        }
      } else {
        if (questionResponses[currentQuestionIndex] === option.weightage) {
          input.checked = true;
        }
      }
    }

    input.addEventListener('change', function() {
      if (!questionResponses[currentQuestionIndex]) {
        questionResponses[currentQuestionIndex] = [];
      }
      if (currentQuestion.isMultipleChoice) {
        if (this.checked) {
          questionResponses[currentQuestionIndex].push(option.weightage);
        } else {
          const index = questionResponses[currentQuestionIndex].indexOf(option.weightage);
          if (index !== -1) {
            questionResponses[currentQuestionIndex].splice(index, 1);
          }
        }
      } else {
        questionResponses[currentQuestionIndex] = parseInt(this.value);
      }
    });
    
    const label = document.createElement('label');
    label.setAttribute('for', input.id);
    label.textContent = option.text;
    label.appendChild(input);
    optionsDiv.appendChild(label);
  });

  questionDiv.appendChild(optionsDiv);
  questionsContainer.appendChild(questionDiv);
}

// // Function to calculate total score
// function calculateTotalScore() {
//   let totalScore = 0;
//   questionResponses.forEach((response, index) => {
//     if (response !== null) {
//       totalScore += response;
//     }
//   });
//   return totalScore;
// }

// Function to calculate total score
function calculateTotalScore() {
  let totalScore = 0;
  questionResponses.forEach((response, index) => {
    if (response !== null) {
      if (Array.isArray(response)) {
        // For checkbox-type questions, sum all selected weights
        totalScore += response.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      } else {
        // For single-choice questions, directly add the weight
        totalScore += response;
      }
    }
  });
  return totalScore;
}

// // Function to handle going to the next question
// function goNext() {
//   const form = document.getElementById('surveyForm');
//   const formData = new FormData(form);
//   let selectedValue = null;
//   for (const entry of formData.entries()) {
//     if (entry[0] === 'q' + currentQuestionIndex) {
//       selectedValue = parseInt(entry[1]);
//       break;
//     }
//   }
//   if (selectedValue !== null) {
//     questionResponses[currentQuestionIndex] = selectedValue;
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       displayCurrentQuestion();
//     } else {
//       showResult();
//     }
//   } else {
//     alert('Please select an option before proceeding.');
//   }
// }
function goNext() {
  const form = document.getElementById('surveyForm');
  const formData = new FormData(form);
  let selectedValues = [];

  // Collect all selected values for the current question
  for (const entry of formData.entries()) {
    if (entry[0] === 'q' + currentQuestionIndex) {
      selectedValues.push(parseInt(entry[1]));
    }
  }

  if (selectedValues.length > 0) {
    questionResponses[currentQuestionIndex] = selectedValues;
  } else {
    // Show warning message if no option is selected
    alert('Please select an option before proceeding to the next question.');
    return; // Stop execution if no option is selected
  }
  
  // Log total score to console
  console.log('Total Score:', calculateTotalScore());
  
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayCurrentQuestion();
  } else {
    showResult();
  }
}

// // Function to handle going to the next question
// function goNext() {
//   const form = document.getElementById('surveyForm');
//   const formData = new FormData(form);
//   let selectedValues = [];

//   // Collect all selected values for the current question
//   for (const entry of formData.entries()) {
//     if (entry[0] === 'q' + currentQuestionIndex) {
//       selectedValues.push(parseInt(entry[1]));
//     }
//   }

//   if (selectedValues.length > 0) {
//     questionResponses[currentQuestionIndex] = selectedValues;
//   } else {
//     questionResponses[currentQuestionIndex] = null;
//   }

//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     displayCurrentQuestion();
//   } else {
//     showResult();
//   }
// }

// Function to handle going back to the previous question
function goBack() {
  if (currentQuestionIndex > 0) {
    const form = document.getElementById('surveyForm');
    const formData = new FormData(form);
    const selectedValues = [];

    // Collect all selected values for the current question
    for (const entry of formData.entries()) {
      if (entry[0] === 'q' + currentQuestionIndex) {
        selectedValues.push(parseInt(entry[1]));
      }
    }

    // Update questionResponses for checkbox questions
    questionResponses[currentQuestionIndex] = selectedValues;

    // Log total score to console
    console.log('Total Score:', calculateTotalScore());
    currentQuestionIndex--;
    displayCurrentQuestion();
  }
}


// Function to display the result
function showResult() {
  const totalScore = calculateTotalScore();
  const totalScoreSpan = document.getElementById('totalScore');
  totalScoreSpan.textContent = totalScore;
  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('surveyForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });

  displayCurrentQuestion();
});
