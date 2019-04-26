import csv from 'csv-parser';
import fs from 'fs';
import readline from 'readline';

const parseInput = async (): Promise<any> => {
    const result: any = [];
    const readPromise = new Promise((resolve) => {
        const lineReader = readline.createInterface({
            input: fs.createReadStream('input.csv')
        });
        lineReader.on('line', function (line) {
            if(line) {
                const arr = line.split(/,(?![^\(\[]*[\]\)])/g);
                if(arr[0] === 'name') {
                    return;
                }
                const person: any = {};
                person.name = arr[0];
                person.age = arr[1];
                person.gender = arr[2];
                person.smoker = arr[3];
                person.email = arr[4];
                person.height = arr[5];
                person.weight = arr[6];
                person.health = arr[7];
                person.alcohol = arr[8];
                person.postalcode = arr[9];
                person.policyrequested = arr[10];
                result.push(person);
            }
        });
        lineReader.on('close', function() {
            resolve(result);
        });
    })

    return readPromise;
}

const csvParser = {
    parseInput
};

export default csvParser;
