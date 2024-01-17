//Implement an alarm clock / timer which will beep after a specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments
//beep = process.stdout.write('\x07');

//edge cases:
//no numbers are provided = it should not beep at all and end immediately
//an input is a negative number = Ignore / skip all negative nums
//an input is not a number = Ignore / skip as well.


const beep = () => process.stdout.write('\x07');

const setAlarm = (seconds) => {
  if (seconds === undefined || seconds < 0 || isNaN(seconds)) {
    return;
  }

  setTimeout(() => {
    beep();
  }, seconds * 1000);
};

const args = process.argv.slice(2);

if (args.length > 0) {
  args.forEach((arg) => {
    const seconds = parseInt(arg);
    setAlarm(seconds);
  });
} else {
  console.log("Invalid entries.");
}