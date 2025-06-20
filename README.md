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

## Subject

    It is both:
        An Observable: others can subscribe to it
        An Observer: it can next(), error(), or complete() values

    Useful for broadcasting values manually (e.g., from services to components)

    example:

        1. message.service.ts
            import { Injectable } from '@angular/core';
            import { Subject } from 'rxjs';

            @Injectable({ providedIn: 'root' })
            export class MessageService {
            private messageSubject = new Subject<string>();

            // Observable exposed to subscribers
            message$ = this.messageSubject.asObservable();

            // Function to send message
            sendMessage(message: string) {
                this.messageSubject.next(message);
            }

        2. sender.component.ts

            import { Component } from '@angular/core';
            import { MessageService } from './message.service';

            @Component({
            selector: 'app-sender',
            template: `
                <h3>Sender</h3>
                <input [(ngModel)]="msg" placeholder="Enter message" />
                <button (click)="send()">Send</button>
            `
            })
            export class SenderComponent {
            msg = '';

            constructor(private messageService: MessageService) {}

            send() {
                this.messageService.sendMessage(this.msg);
                this.msg = '';
            }
            }

        3.  receiver.component.ts

            import { Component, OnInit } from '@angular/core';
            import { MessageService } from './message.service';

            @Component({
            selector: 'app-receiver',
            template: `
                <h3>Receiver</h3>
                <p *ngIf="message">Received: {{ message }}</p>
            `
            })
            export class ReceiverComponent implements OnInit {
            message = '';

            constructor(private messageService: MessageService) {}

            ngOnInit() {
                this.messageService.message$.subscribe(msg => {
                this.message = msg;
                });
            }
            }

}
