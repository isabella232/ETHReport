const fs = require('fs');

const file = './data/archives/interviews.json';
const targetFile = './data/archives/cleanInterviews.json';

fs.exists(file, (exists) => {
  if (exists) {
    // eslint-disable-next-line
    console.log("File found. Attempting transform");

    fs.readFile(file, (err, data) => {
      if (err) {
        // eslint-disable-next-line
        console.log(err);
      } else {
        const interviews = JSON.parse(data);
        const { length } = Object.keys(interviews);
        const betterInterviews = [];

        for (let i = 0; i < length; i++) {
          const interview = interviews[i];
          const qKeys = Object.keys(interview);
          const interviewFormatted = [];

          qKeys.forEach((key) => {
            if (key !== 'name' && interview[key] !== null && interview[key].answer !== null && interview[key].answer !== '') {
              interviewFormatted.push({
                question: key,
                answer: interview[key].answer,
              });
            }
          });

          betterInterviews.push({
            id: i + 1,
            name: interview.name,
            matchedIndex: -1,
            interview: interviewFormatted,
          });
        }

        const json = JSON.stringify(betterInterviews);
        fs.writeFile(targetFile, json);
      }
    });
  } else {
    // eslint-disable-next-line
    console.log("File does not exist. Creating empty file and exiting.")
    const interviewData = {};
    const json = JSON.stringify(interviewData);
    fs.writeFile(targetFile, json);
  }
});
