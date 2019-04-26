import csvParser from './csvParser';
import score from './score';

//TODO: loop through the parse result and calculate the final score for each person
csvParser.parseInput().then((data) => {
    console.log('this is the correctly parsed file: ', data);
});
