
// Switch case
let now = new Date();
console.log(now);

let day = now.getDay();
switch (day) {
    case 0:
        console.log(`It's Sunday`);
        break;
    case 6:
        console.log(`It's Saturday`);
        break;
    case 1:
        console.log(`It's Monday`);
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a weekday`);
        break;
    //optional - if theres no match, and no default, switch does nothing 
    default:
        console.log(`Invalid range`);
        break;
}
