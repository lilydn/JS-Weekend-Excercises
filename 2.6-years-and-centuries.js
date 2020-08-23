// The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// Task : Given a year, return the century it is in.

function centuryFromYear(year) {
    return Math.floor(((year - 1) / 100) + 1);
}



/*
// Tests
console.log(centuryFromYear(1705)); //18
console.log(centuryFromYear(1900)); //19
console.log(centuryFromYear(1601)); //17
console.log(centuryFromYear(2000)); //20
*/