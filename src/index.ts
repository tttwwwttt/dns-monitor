#!/usr/bin/env node

import CLI from './CLI';
import Scheduller from './Scheduller';
import Monitor from './Monitor';
import DNS from './DNS';
import Sorter from './Sorter';
import Report from './Report';

const cli = new CLI();
const dns = new DNS();
const report = new Report();
const sorter = new Sorter(report);
const monitor = new Monitor(dns, sorter);
const scheduler = new Scheduller(monitor);

scheduler.start(cli.getDomains());
