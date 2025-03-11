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
