const fs = require("fs-extra");
const packageObj = fs.readJsonSync("./bus.json");

function getclosesthour() {
  let usertime = "12:00";
  let userSplit = usertime.split(":");
  let userhour = parseInt(userSplit[0]);
  let userminutes = parseInt(userSplit[1]);
  let minutes, hour, split;
  let h = false;
  let m = false;
  packageObj.forEach((bus) => {
    let busTime = bus.time;
    split = busTime.split(":");
    hour = parseInt(split[0]);
    minutes = parseInt(split[1]);

    if (hour > userhour && !h) {
      h = hour;
      m = minutes;
    } else if (h && hour > userhour) {
      if (h > hour) {
        h = hour;
        m = minutes;
      } else if ((h = hour)) {
        if (m > minutes) {
          m = minutes;
        }
      }
    } else if ((hour = userhour)) {
      if (minutes > userminutes) {
        h = hour;
        m = minutes;
      }
    }
  });
  let closesthour = h + ":" + m;
  return closesthour;
}

getclosesthour();
