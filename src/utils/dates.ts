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
  const formatted = d.toISOString().split("T")[0];
  return formatted;
}

export function today() {
  return moment();
}

export function centuryAgo() {
  return moment().subtract(100, "years");
}
