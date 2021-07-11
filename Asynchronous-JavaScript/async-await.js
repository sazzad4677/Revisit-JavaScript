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

// meeting
//   .then(addToCalendar)
//   .then((res) => {
//     //resolve data
//     console.log(res);
//   })
//   .catch((err) => {
//     // rejected data
//     console.log(err.message);
//   });

async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calender = await addToCalendar(meetingDetails);
    console.log(calender);
  } catch (error) {
    console.log(error.message);
  }
}
myMeeting();
