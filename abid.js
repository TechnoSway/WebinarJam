document.addEventListener('DOMContentLoaded', function() {
    var apiKey = '900f217b-6445-4a72-b570-13d9305d1147';
    var webinarId = '180';

    fetch('https://api.webinarjam.com/webinarjam/webinar?api_key=' + apiKey + '&webinar_id=' + webinarId, {
        method: 'POST', // Ensure the method is GET
    })
    .then(response => {
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); /* Log the entire response to the console */
        var eventDate = data.webinar.schedules[0].date; /* Adjust this based on the actual structure of the response */
        document.getElementById('webinar-date').innerText = 'Event Date: ' + eventDate;
    })
    .catch(error => {
        console.error('Error fetching event date:', error);
    });
});
