# ETHReport

This repository hosts the website that serves the data drawn from interviews with over 100 of the most well known developers in Ethereum.

The idea is to make it easily accessible so that anyone, within or just joining the Ethereum community, can understand at a few glances where the biggest hurdles and obstacles currently are and what the biggest opportunities are to improve the network and tools around it for everyone.

More information about next steps for this project can be found [here](https://medium.com/@cryptowanderer/the-ethprize-report-2018-831de9a9280f).

## Setting up

- `git clone git@github.com:status-im/ETHPrize.git`
- `npm install`
- `npm run dev` runs the site at `localhost:3000`
- `yarn lint` runs the eslinter

## Deploy

- `npm run prod-build` to build to the `out` directory
- `npm run gh-publish` to deploy to GitHub Pages
- This pushes the compiled code to the `gh-pages` branch
- View staging Github page at: https://status-im.github.io/ETHReport/
