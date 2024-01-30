
const returnFirstTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(arrayOfDrivers.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
  return function multiply(fare) {
    return number * fare;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
 


// const newFare = createFareMultiplier(4)
// console.log(fareTripler(newFare));

function selectDifferentDrivers(drivers, newDrivers) {
  if(newDrivers === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if(newDrivers === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }
}





