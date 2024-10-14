import Report from './Report';

export default class Sorter {
  private records: {time: string; domain: string; ip?: string}[] = [];
  private previous: {
    [domain: string]: {time: string; domain: string; ip?: string};
  } = {};
  private report: Report;
  constructor(report: Report) {
    this.report = report;
  }
  sort(record: {time: string; domain: string; ip?: string}): void {
    const {domain, ip} = record;
    if (this.previous?.[domain]?.ip !== ip) {
      this.previous[domain] = record;
      this.records.push(record);
      this.report.display(record);
    }
  }
}
