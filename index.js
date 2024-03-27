// Function to implement saturdayFun with a default activity
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun('picnicking'));

function mondayWork(task = 'go to the office') {
   return  `This Monday, I will ${task}.`;
}


mondayWork('complete the project');


function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    }
}
