//process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
    process.stdout.write('\r| asha  ');
  }, 100);
  
  setTimeout(() => {
    process.stdout.write('\r/ is  ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r- great  ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\ !!  '); 
  }, 700);