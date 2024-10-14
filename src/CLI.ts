export default class CLI {
  domains: string[];
  errors?: string;
  constructor() {
    this.domains = process.argv.splice(2);
    this.validate();
  }
  getDomains(): {errors?: string; domains: string[]} {
    return {errors: this.errors, domains: this.domains};
  }
  private validate(): void {
    if (this.domains.length === 0) {
      this.errors = 'Add a space separated list of domains';
    }
  }
}
