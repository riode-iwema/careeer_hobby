function suggestCareerBasedOnHobby(hobby) {
    let career;
  
    if (hobby === 'painting' || hobby === 'drawing' || hobby === 'music') {
      career = 'Arts';
    } else if (hobby === 'coding' || hobby === 'experimenting' || hobby === 'reading') {
      career = 'Science';
    } else if (hobby === 'building' || hobby === 'inventing' || hobby === 'designing') {
      career = 'Engineering';
    } else {
      career = ' the best fit for your interest is currently not available, Explore more!';
    }
  
    return `Based on your hobby, you might enjoy a career in ${career}.`;
  }
  
//   // Example usage:
  const studentHobby = 'building'; // Replace with the student's actual hobby
  const careerSuggestion = suggestCareerBasedOnHobby(studentHobby);
  console.log(careerSuggestion);