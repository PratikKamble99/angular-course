# Install Angular globally

```bash
npm install -g @angular/cli
```

# Create new project

```bash
ng new project-name
```

# Generate compoenent in specific folder

```bash
ng generate component components/header
```

Syntax: ng generate component <path>/<component-name>

# concepts

## observables

    An observable is wrappeR around asyncronous data. we use observable to handle asyncronous data.

    Promis vs observable
    Promise : can not handle steam of async data. It always retuns only single value
    Observable: can handle data in chunks. It will return only data if someone is going to use it. ( asynchronous and event-based programs )

    | Use Case                      | Use Observable? | Why                                       |
    | ----------------------------- | --------------- | ----------------------------------------- |
    | HTTP Requests                 | ✅ Yes           | Async data stream, supports operators     |
    | User Input Tracking           | ✅ Yes           | Real-time feedback                        |
    | Route Changes                 | ✅ Yes           | Respond to dynamic params                 |
    | One-Time Async Operation      | ❌ Maybe         | Promise might suffice                     |
    | Inter-Component Communication | ✅ Yes           | Reactive shared service pattern           |
    | Real-Time Data (WebSocket)    | ✅ Yes           | Continuous data stream                    |
    | Complex Async Logic           | ✅ Yes           | RxJS operators like debounce, retry, etc. |
