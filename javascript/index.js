function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );

  let africaElement = document.querySelector("#africa-time");
  let africaDateElement = africaElement.querySelector(".date");
  let africaTimeElement = africaElement.querySelector(".time");
  let africaTime = moment().tz("Africa/Accra");

  africaDateElement.innerHTML = africaTime.format("MMMM Do YYYY");
  africaTimeElement.innerHTML = africaTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1);
