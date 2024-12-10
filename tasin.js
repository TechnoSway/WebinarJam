const apiUrl = "https://api.webinarjam.com/webinarjam/webinar";

const requestData = {
  api_key: "900f217b-6445-4a72-b570-13d9305d1147",
  webinar_id: 180
};

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
	date = data.webinar.schedules[0].comment
    console.log(date)
	document.querySelector(".date").innerHTML = date
  })
  .catch((error) => {
    console.error("Error With POST request:", error);
  });
