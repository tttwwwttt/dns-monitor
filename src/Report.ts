export default class Report {
  display(record: {time: string; domain: string; ip?: string}): void {
    const {time, domain, ip} = record;
    console.log(`${time}  ${domain}  ${ip}`);
  }
}
