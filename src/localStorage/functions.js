let calculations = [];

export const storeCalculation = (calc, res) => {
  const calculation = `${calc} = ${res}`;
  calculations.push(calculation);

  const string = JSON.stringify(calculations);
  localStorage.setItem("calculations", string);
};

export const getCalculations = () => {
  const string = localStorage.getItem("calculations");
  const calculations = JSON.parse(string);

  return calculations;
};

export const clearCalculations = () => {
  calculations = [];
  localStorage.clear();
};
