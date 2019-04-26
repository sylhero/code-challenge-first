const calculate = (weight: number, height: number) => {
	const result =  weight / Math.pow(height/100, 2);
    return parseFloat(result.toFixed(1));
};

const bmi = {
	calculate
};

export default bmi;
