const args = process.argv.slice(2);
for (i of args) {
  if(i <= 0 || isNaN(i) === true) {
    break;
  } else {
    let seconds = i * 1000;
    setTimeout(() => {
      process.stdout.write(".");
    }, seconds);
  }
 
}