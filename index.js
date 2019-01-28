// Code your solution in this file.

function lowerCaseDrivers(drivers, names){
  return drivers.map(function(driver){
    return driver.toLowerCase();
  })
};

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let firstName = driver.split(' ')[0];
    let lastName = driver.split(' ')[1];
    return { firstName: firstName, lastName: lastName}
  });
};

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
