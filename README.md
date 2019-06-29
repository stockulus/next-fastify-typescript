[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://www.typescriptlang.org/) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) ![speed: blazing](https://img.shields.io/badge/speed-blazing%20%F0%9F%9A%80-brightgreen.svg)

# rsvg

Web Abo System for RSVG

## Functionality

[Confluence](https://mobilab.atlassian.net/wiki/spaces/RWS/overview)

[Current Version](https://rsvg-235817.appspot.com/)

[Style Guide](https://zpl.io/V0LynRx)

## Developer Instructions

### Requirements

- node.js (10+ recommended)
- Docker
- google-cloud-sdk

### Installation requirements on macOS

```bash
brew install node
brew cask install docker
brew cask install google-cloud-sdk
```

### Development

```bash
git clone git@github.com:mobilabsolutions/rsvg
cd rsvg
npm install
npm run db # start a local postgres DB for testing
npm run dev
open http://localhost:3000/
```

### Testing

```bash
npm run test        #all test (lint, type, jest)
npm run lint        #run eslint
npm run typescript  #run type checker
npm run jest        #run all jest test
npm run jest:watch  #run all jest test that are effected by a change
```

### Dependencies

```bash
npm run updtr       # checks for outdated dependencies, updates them if tests do not fail
```

### Docker

To run it in docker

```bash
npm run docker
npm run docker:stop # to stop
```

### Deployment

```bash
npm run deploy
```

Continues Deployment not set up at the moment

### Helpful scripts

Just run

```bash
npm run
```

to get an overview

### Build with

- [typescript](https://www.typescriptlang.org/) (Language)
- [next.js](https://nextjs.org/) (SSR Framework)
- [react](https://reactjs.org/) (View Lib)
- [styled-components](https://www.styled-components.com/) (css Lib)
- [jest](https://jestjs.io/) (Testing Framework)
- [fastify](https://www.fastify.io/) (Webserver)
- [docker](https://www.docker.com/) (alpine-node)
- [postgres](https://www.postgresql.org) (db)

### folder structure

- [/asserts](/assets) translation and styles
- [/components](/components) Home of [Atomic design structure](http://atomicdesign.bradfrost.com/table-of-contents/) of Components
- [/hooks](/hooks) react [hooks](https://reactjs.org/docs/hooks-intro.html), middleware and business logic
- [/pages](/pages) entry points for the [next.js](https://nextjs.org/) app / check next.js documentation
- [/server](/server) fastify backend (upstream, next.js, healthcheck)
- [/static](/static) static files like fonts, images and css
- [/test_utils](https://github.com/mobilabsolutions/rsvg/tree/master/test_utils) test helpers

### Database

![erm](/diagrams/out/erm.png)
