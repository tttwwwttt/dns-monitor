import DNS from './DNS';
import Sorter from './Sorter';

export default class Monitor {
  private dns: DNS;
  private sorter: Sorter;
  constructor(dns: DNS, sorter: Sorter) {
    this.dns = dns;
    this.sorter = sorter;
  }
  async checkDNS(domains: string[]): Promise<void> {
    for (const domain of domains) {
      const res: {time: string; domain: string; ip?: string} =
        await this.dns.get(domain);
      this.sorter.sort(res);
    }
  }
}
