function updateTime() {
  // Timbuktu
  let timbuktuElement = document.querySelector("#timbuktu");
  if (timbuktuElement) {
    let timbuktuDateElement = timbuktuElement.querySelector(".date");
    let timbuktuTimeElement = timbuktuElement.querySelector(".time");
    let timbuktuTime = moment().tz("Africa/Timbuktu");
    timbuktuDateElement.innerHTML = timbuktuTime.format("MMMM Do YYYY");
    timbuktuTimeElement.innerHTML = timbuktuTime.format(
      "h:mm:ss [<small>]A[</small>]"
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
      "h:mm:ss [<small>]A[</small>]"
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
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function changeCity(event) {
  function updateChangeTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
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
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
      " A"
    )}</small></div>
          </div>
          </div>
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
    .format("h:mm:ss [<small>]A[</small>]")}`;
}
updateCurrentTime();
setInterval(updateCurrentTime, 10);

updateTime();
setInterval(updateTime, 10);

function showLink() {
  let backLink = document.querySelector(".all-cities-link");
  backLink.innerHTML = `<a href="javascript:window.location.reload(true)"> Back to home </a> </div>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", (e) => {
  changeCity(e);
  showLink();
});
