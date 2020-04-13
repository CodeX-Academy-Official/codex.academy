import moment from "moment";

function getLastMondayOfMonth(): moment.Moment {
  const m = moment()
    .utc()
    .endOf("month")
    .startOf("isoWeek");

  return m;
}

function getNextMonday(): moment.Moment {
  const m = moment();
  const today = m.isoWeekday();
  let daysToAdd = 8 - today;
  const nextMonday = m.add(daysToAdd, "days");

  return nextMonday;
}
export function getNextDeadline() {
  const m = getNextMonday();
  m.set({ hour: 8 });
  return m;
}

export function getNextDeadlineFormatted() {
  const d = getNextDeadline();
  const formatted = d.toISOString().split("T")[0];
  return formatted;
}
