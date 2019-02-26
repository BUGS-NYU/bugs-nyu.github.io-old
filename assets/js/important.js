/*
* This code sets the value in the important banner
*/
const today = Date.now();
const FOUR_WEEKS = 2419200000;
// https://stackoverflow.com/questions/7346563/loading-local-json-file
$.getJSON("{{ site.baseurl }}/../../calendar/data/", (events) => {
  let final_date = today;
  let final_event, date, temp, formatted_date;

  for (let i = 0, len = events.length; i < len; i++) {

    date = new Date(events[i].start);
    temp = new Date(events[i].start);
    // modify the date variable so the banner message goes away at the end of the day (EST Time)
    date.setDate(date.getDate() + 1);
    date.setHours(date.getHours() + 5);
    // convert the date to milliseconds
    date = date.getTime();

    //if event already happened or is 4 weeks away,
    if (date < today || (date - today) >= FOUR_WEEKS) {
      continue;
    }

    //once we reach the next event end the loop
    if (date >= final_date) {
      final_event = events[i];
      final_date = temp;
      final_date.setDate(final_date.getDate() + 1);
      break;
    }
  }

  if (final_event) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
    let options = {year: 'numeric', month: 'long', day: 'numeric' };
    formatted_date =  new Intl.DateTimeFormat('en-US', options).format(final_date);
  }
  // add the event to the top of the index.html page
  document.getElementById("important").innerHTML = (final_event ? `Upcoming: <a href="${final_event.url}">${final_event.title}</a> on ${formatted_date} in ${final_event.location} at ${final_event.time}` : "No events upcoming, keep being awesome!");
});
