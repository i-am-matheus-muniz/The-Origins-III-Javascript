//It is a number divisible by 4 but not by 100.
//It is a number divisible by 400.

leapYear = "";

for (year = 2000; year <= 3000; year++) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        leapYear += year + ";";
    }
}
console.log(leapYear);