import bmi from './bmi';

// The following will cause a 15 point debit
//   * A hit on DEPRESSION, ANXIETY
//   * A BMI below 18.5

// * The following will cause a 25 point debit
//   * A hit on SURGERY
//   * Being a smoker
//   * BMI above 25.0
//   * Alcohol consumption above 10 drinks per week

// * The following will cause a 30 point debit
//   * A hit on HEART
//   * BMI above 30.0
//   * Alcohol consumption above 25 drinks per week

//TODO: not sure about the criteria is it a AND or OR for the cause?
  const calculate = (person: any) => {
      const bmiScore = bmi.calculate(person.weight, person.height);
      let totalScore = 0;
      const healthArray = person.health.split(/\W+/);
      if (healthArray.includes('DEPRESSION') || healthArray.includes('ANXIETY') || bmiScore < 18.5) {
          totalScore = totalScore + 15;
      };
      if (healthArray.includes('SURGERY') || person.smoker === 'S' || (bmiScore > 25 && bmiScore < 30) || (person.alcohol > 10 && person.alcohol < 25)) {
          totalScore = totalScore + 25;
      }
      if (healthArray.includes('HEART') || bmiScore > 30 || person.alcohol > 25) {
          totalScore = totalScore + 30;
      }
      return totalScore;
  }

  const score = {
      calculate
  };

  export default score;
