function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss:SS [<small>]A[</small>]"
    );
  }

  // Timbuktu
  let timbuktuElement = document.querySelector("#timbuktu");
  if (timbuktuElement) {
    let timbuktuDateElement = timbuktuElement.querySelector(".date");
    let timbuktuTimeElement = timbuktuElement.querySelector(".time");
    let timbuktuTime = moment().tz("Africa/Timbuktu");
    timbuktuDateElement.innerHTML = timbuktuTime.format("MMMM Do YYYY");
    timbuktuTimeElement.innerHTML = timbuktuTime.format(
      "h:mm:ss:SS [<small>]A[</small>]"
    );
  }

  // Cairo
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    let cairoTime = moment().tz("Africa/Cairo");
    cairoDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
    cairoTimeElement.innerHTML = cairoTime.format(
      "h:mm:ss:SS [<small>]A[</small>]"
    );
  }

  // Lagos
  let lagosElement = document.querySelector("#lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");
    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss:SS [<small>]A[</small>]"
    );
  }
}

function changeCity(event) {
  function updateChangeTime() {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities-list");
    citiesElement.innerHTML = `
      <div class="default-cities">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div>
      <div class="time">${cityTime.format(
        "h:mm:ss:SS"
      )}<small>${cityTime.format(" A")}</small></div>
          </div>
          </div>
        <div class="all-cities-link">
      <a href="https://carringtons-world-clock.netlify.app/"> Back to home </a> </div>
    `;
  }
  updateChangeTime();
  setInterval(updateChangeTime, 10);
}

function updateCurrentTime() {
  let currentPosition = moment.tz.guess();
  let cityPositionName = document.querySelector("#name");
  let cityPositionDate = document.querySelector("#date");
  let cityPositionTime = document.querySelector("#time");
  cityPositionName.innerHTML = currentPosition.replace("_", " ").split("/")[1];
  cityPositionDate.innerHTML = `${moment()
    .tz(currentPosition)
    .format("MMMM Do YYYY")}`;
  cityPositionTime.innerHTML = `${moment()
    .tz(currentPosition)
    .format("h:mm:ss:SS [<small>]A[</small>]")}`;
}
updateCurrentTime();
setInterval(updateCurrentTime, 10);

updateTime();
setInterval(updateTime, 10);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", changeCity);
