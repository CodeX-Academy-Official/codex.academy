import moment from "moment";

export function getNextDeadline() {
  const m = moment()
    .endOf("month")
    .startOf("isoWeek");

  m.set({ hour: 10 });

  return m;
}
export function getNextDeadlineFormatted() {
  const d = getNextDeadline();
  const formatted = d.toISOString().split("T")[0];
  return formatted;
}
