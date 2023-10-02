function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  function mondayWork(job = "go to the office") {
    return `This Monday, I will ${job}.`;
  }

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }

  const saturdayFunFunction = saturdayFun();
console.log(saturdayFunFunction); 

const customSaturdayFunFunction = saturdayFun("play soccer");
console.log(customSaturdayFunFunction); 

const mondayWorkFunction = mondayWork();
console.log(mondayWorkFunction); 

const customMondayWorkFunction = mondayWork("work from home");
console.log(customMondayWorkFunction); 

const wrapFlair = wrapAdjective("!!!");
const wrappedAdjective = wrapFlair("awesome");
console.log(wrappedAdjective);