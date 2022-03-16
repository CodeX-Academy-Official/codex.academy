import moment from "moment";

function getLastMondayOfMonth(): moment.Moment {
  const m = moment()
    .utc()
    .endOf("month")
    .startOf("isoWeek");

  return m;
}

function getNextMonday(m: moment.Moment = moment()): moment.Moment {
  const today = m.isoWeekday();
  let daysToAdd = 8 - today;
  const nextMonday = m.add(daysToAdd, "days");

  return nextMonday;
}
export function getNextDeadline(): Date | moment.Moment {
  const m = getNextMonday();
  m.set({ hour: 8 });
  return m;
}

export function getNextDeadlineAfter(afterDate: any): moment.Moment {
  var m = moment(afterDate);
  return getNextMonday(m);
}

export function getNextDeadlineFormatted() {
  return formatted(getNextDeadline());
}

export function formatted(d: Date | moment.Moment) {
  if (!d) return "";

  const iso = d.toISOString() || "2020-06-01"; //just temporary
  const formatted = iso.split("T")[0];
  return formatted;
}

export function today() {
  return moment();
}

export function centuryAgo() {
  return moment().subtract(100, "years");
}

export function getNextMondayV2(anyDate: Date) {
  var dayOfWeek = anyDate.getDay();
  var aux = dayOfWeek ? 1 : -6;
  var nextMonday = new Date(anyDate);
  nextMonday.setDate(anyDate.getDate() - dayOfWeek + aux + 7);
  return nextMonday;
}
export function getNextMondays() {
  let d = new Date("2022-03-24");
  d.setDate(d.getDate() + 1);
  let nextThreeMondays = [];
  for (let a = 0; a < 3; a++) {
    let nextMonday = getNextMondayV2(d);
    if (a === 0) {
      for (let b = 0; b < 5; b++) {
        if (d.getDay() == nextMonday.getDay()) {
          nextMonday = getNextMondayV2(d);
        }
        d.setDate(d.getDate() + 1);
      }
      nextThreeMondays.push(
        nextMonday.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      d = nextMonday;
    } else {
      nextThreeMondays.push(
        nextMonday.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      d = nextMonday;
    }
  }
  return nextThreeMondays;
  //startDate = nextThreeMondays[0];
}
