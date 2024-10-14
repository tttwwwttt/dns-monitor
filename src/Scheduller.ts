import Monitor from './Monitor';

export default class Scheduller {
  private interval = 3000;
  private intervalId?: NodeJS.Timeout;
  private monitor: Monitor;

  constructor(monitor: Monitor) {
    this.monitor = monitor;
    this.registerCleanup();
  }
  start({errors, domains}: {errors?: string; domains: string[]}) {
    try {
      if (errors) throw new Error(errors);
      const interval = this.interval;
      const monitor = (i: string[]) => this.monitor.checkDNS(i);
      this.intervalId = setInterval(monitor, interval, domains);
    } catch (err) {
      console.error(err);
    }
  }
  private registerCleanup() {
    process.on('SIGINT', () => {
      clearInterval(this.intervalId);
      console.log('\nMonitoring stopped.');
      process.exit(0);
    });
  }
}
