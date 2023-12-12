// initialise calculations array
let calculations = [];

// function to store a calculation by combining the "calc" and "res" global state and setting it to local storage
// also updates the local calculations array above
export const storeCalculation = (calc, res) => {
  const calculation = `${calc} = ${res}`;
  calculations.push(calculation);

  const string = JSON.stringify(calculations);
  localStorage.setItem("calculations", string);
};

// function to get the calculations array in local storage and return it
export const getCalculations = () => {
  const string = localStorage.getItem("calculations");
  const calculations = JSON.parse(string);

  return calculations;
};

// function to clear both the calculations array in local storage and the local variable above
export const clearCalculations = () => {
  calculations = [];
  localStorage.clear();
};

// if there are calculations in local storage set the local calculations variable to that
// avoids any errors and bugs on page refresh
if (getCalculations()) {
  calculations = getCalculations();
}
