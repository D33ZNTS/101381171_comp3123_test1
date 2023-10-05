const fs = require('fs');
const path = require('path');

// Function to remove log files and the Logs directory if it exists
const removeLogFiles = () => {
  const logsDirectory = path.join(__dirname, 'Logs');
  if (fs.existsSync(logsDirectory)) {
    console.log('Files to delete:');
    const files = fs.readdirSync(logsDirectory);
    files.forEach(file => {
      const filePath = path.join(logsDirectory, file);
      console.log(file);
      fs.unlinkSync(filePath);
    });
    fs.rmdirSync(logsDirectory);
    console.log('Logs directory removed.');
  } else {
    console.log('Logs directory does not exist.');
  }
};

// Function to create log files and write some text into them
const createLogFiles = () => {
  const logsDirectory = path.join(__dirname, 'Logs');
  if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
  }

// Change the current working directory to Logs
  process.chdir(logsDirectory); 
  console.log('Created log files:');
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(logsDirectory, fileName);
    fs.writeFileSync(filePath, `This is log file ${i}.`);
    console.log(fileName);
  }
// Change back to the original working directory
  process.chdir(__dirname); 
};

// Remove log files and directory (if exists)
removeLogFiles();

// Create log files
createLogFiles();
