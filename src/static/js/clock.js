const clockElement = document.getElementById("clock");


function refreshTime() {
  const timeString = new Date().toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "America/Vancouver",
  });

  const hours = Number(timeString.slice(0, 2));
  const sleeping = hours >= 22 || hours < 6;

  const statusString = sleeping ? "(zzz)" : "";
  const balanceString = "&nbsp".repeat(statusString.length);

  clockElement.innerHTML = `${balanceString} ${timeString} ${statusString}`;
}

refreshTime();
setInterval(refreshTime, 1000);

// mixing in weather since this is becoming a more general widget
const tempElement = document.getElementById("temp");
const codeElement = document.getElementById("code");

const lat = 49.1666;
const lon = -123.1336;
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`;

const weather_codes = {
  0: "sunny :D", 1: "lil sunny", 2: "lil cloudy", 3: "overcast",
  45: "foggy", 48: "rime fog",
  51: "little drizzle", 53: "little drizzle", 55: "lottle drizzle",
  56: "freezing drizzle", 57: "FREEZING DRIZZLE",
  61: "rain :/", 63: "rain :)", 65: "rain :))",
  66: "freezing rain", 67: "FREEZING RAIN",
  71: "snow :/", 73: "snow :)", 75: "snow :))",
  77: "snow grains",
  80: "showers :/", 81: "showers :)", 82: "showers :))",
  85: "snow showers :/", 86: "snow showers :))",
  95: "thunderstorm", 96: "thunderstorm", 99: "thunderstorm",
}

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    temp.innerHTML = `${data.current.temperature_2m}°C`;
    codeString = weather_codes[data.current.weather_code];
    codeElement.innerHTML = codeString ?? "??";
    
  })
  .catch(error => {
    console.error("There has been a problem with your fetch operation:", error);
  });
