// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`

}
function wrapAdjective(highlight = "*"){
    return function(special="special"){
        return `You are ${highlight}${special}${highlight}!`
    }

}