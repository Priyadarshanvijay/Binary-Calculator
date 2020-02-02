//first run "npm install readline-sync"
//this npm library is required to take input from command line from the user synchronously
const readline = require('readline-sync');
let recruiterCalender = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let candidateCalender = [false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let dateArr = ["29-Jan-2020", "30-Jan-2020", "31-Jan-2020"];

function convertStringToTimeIndex(curTime, offset) {
    let tm = 0;
    tm += curTime[0 + offset] - '0';
    tm *= 10;
    tm += curTime[1 + offset] - '0';
    tm *= 2;
    if (curTime[3 + offset] == '3')++tm;
    return tm;
}

function findDayStartIndex(curTime, srcTimeZone, destTimeZone) {
    let curTimeIndex = convertStringToTimeIndex(curTime, 0);
    let srcTimeZoneIndex = convertStringToTimeIndex(srcTimeZone, 1);
    let destTimeZoneIndex = convertStringToTimeIndex(destTimeZone, 1);
    if (srcTimeZone[0] == '-') srcTimeZoneIndex *= -1;
    if (destTimeZone[0] == '-') destTimeZoneIndex *= -1;
    return (curTimeIndex + destTimeZoneIndex - srcTimeZoneIndex + 48);
}
function findTimeFromIndex(index) {
    let day = index / 48;
    let time = index % 48;
    let hh = '' + parseInt(time / 2);
    if (hh.length < 2) hh = "0" + hh;
    if ((time % 2) == 1) hh = hh + ":30";
    else hh = hh + ":00";
    return {
        first: day,
        second: hh
    };
}

function findCommonSlots(noOfSlotsRequired, startIndexOfCandidate) {
    // pair<int,vector<int>> noOfFreeSlots;
    let noOfFreeSlots = {
        first: 0,
        second: []
    }
    noOfFreeSlots.first = 0;
    for (let start = 0; (startIndexOfCandidate + start < 144) && (start < 48); ++start) {
        if (candidateCalender[startIndexOfCandidate + start] && recruiterCalender[start]) {
            isAvailable = true;
            for (subStart = start; (startIndexOfCandidate + subStart < 144) && (subStart < noOfSlotsRequired); ++subStart) {
                if (candidateCalender[startIndexOfCandidate + subStart] && recruiterCalender[subStart]) continue;
                else {
                    isAvailable = false;
                    break;
                }
            }
            if (isAvailable) { ++noOfFreeSlots.first; noOfFreeSlots.second.push(start); }
        }
    }
    return noOfFreeSlots;
}

let timeZoneCandidate;
let timeZoneRecruiter;
candidateCalender[48] = true;
recruiterCalender[1] = true;
let noOfSlotsrequired = 0;
console.log(`Calenders of Candidate and Panelist are hardcoded for now :`);
console.log(`Enter time zone of candidate in this format +-hh:mm : `);
timeZoneCandidate = readline.question('');
console.log(`Enter time zone of recruiter in this format +-hh:mm : `);
timeZoneRecruiter = readline.question('');;
console.log(`Enter no of slots in multiples of half hour required: `);
noOfSlotsrequired = readline.question('');;
let dayStartTime = "00:00";
let index = findDayStartIndex(dayStartTime, timeZoneRecruiter, timeZoneCandidate);
let slotCount = findCommonSlots(noOfSlotsrequired, index);
console.log(`There are ${slotCount.first} slot(s) available.`);
if (slotCount.first)
    console.log(`For Recruiter :`);
for (let i = 0; i < slotCount.first; ++i) {
    console.log(`${i + 1}. ${findTimeFromIndex(slotCount.second[i]).second} GMT ${timeZoneRecruiter} ${dateArr[1]}`);
}
if (slotCount.first)
    console.log(`For Candidate :`);
for (let i = 0; i < slotCount.first; ++i) {
    let finalizedTime = findTimeFromIndex(slotCount.second[i] + index);
    console.log(`${i + 1}. ${finalizedTime.second} GMT ${timeZoneCandidate} ${dateArr[finalizedTime.first]}`);
}
