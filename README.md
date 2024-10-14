DNS Monitor
-----------

Purpose:
=======

This command-line application is designed to continuously monitor DNS records on Google DNS servers. It tracks changes in IP addresses and logs any modifications.


Usage:
=====

1. Installation:

    - Ensure you have Node.js and npm installed.
    - Clone this repository or download the project files.    
    - In your terminal, navigate to the project directory and run:

```bash
    npm install
```

2. Configuration:

    - The configuration is primarily handled through command-line arguments.
    - Provide a space-separated list of domains to monitor.

3. Execution:

    - Run the script:

```bash
    node dist/index.js domain1.com domain2.com ...
```

    - To stop the script press CTRL+C


Development
===========

1. Source file are locate in src/ directory.
2. To compile the source files run:

```bash
    npm run compile
``` 



