import https from 'https';

export default class DNS {
  private options: https.RequestOptions = {
    hostname: 'dns.google.com',
    port: 443,
    method: 'GET',
    timeout: 5000, // 3 seconds
  };
  async get(
    domain: string
  ): Promise<{time: string; domain: string; ip?: string}> {
    this.options.path = `/resolve?name=${domain}&type=A`;

    const resp: Promise<{Answer?: {data: string}[]}> = new Promise(
      (resolve, reject) => {
        const req = https.request(this.options, res => {
          let responseBody = '';
          res.on('data', chunk => {
            responseBody += chunk;
          });
          res.on('end', () => {
            resolve(JSON.parse(responseBody));
          });
        });

        req.on('error', err => {
          reject(err);
        });

        req.end();
      }
    );

    const data: {Answer?: {data: string}[]} = await resp;
    const ip = data?.Answer?.[0]?.data;
    return {
      time: Date().split(' ')[4],
      domain,
      ip,
    };
  }
}
