const beepTimes = process.argv.slice(2);

let newArr = [];
for (let time of beepTimes) {
  newArr.push(Number(time));
}

for (let time of newArr) {
  if (time < 0 || isNaN(time)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(time))
}