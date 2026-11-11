# MoneyPilot frontend

Angular 22 standalone application with lazy feature routes. See the repository root README for configuration, architecture and scope.

```sh
npm ci
npm start
npm run build
npm test
```

Tests use Angular's unit-test builder with Vitest and jsdom. Route tests mock the browser matchMedia API; separate theme tests exercise system changes.
