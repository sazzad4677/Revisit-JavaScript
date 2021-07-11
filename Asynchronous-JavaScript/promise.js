const hasMeeting = false;

const meeting = new Promise(function (resolve, reject) {
  if (!hasMeeting) {
    const meetingDetails = {
      name: " Tech Meeting ",
      location: "google meet",
      time: "10:00 AM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting Already Schedule"));
  }
});

const addToCalendar = function (meetingDetails) {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at time ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalendar)
  .then((res) => {
    //resolve data
    console.log(res);
  })
  .catch((err) => {
    // rejected data
    console.log(err.message);
  });

// Promise.all

const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`);
  }, 3000);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});

// Promise.race
const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`);
  }, 3000);
});

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
