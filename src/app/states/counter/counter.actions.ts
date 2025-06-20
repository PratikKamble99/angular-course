import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment'); // This should be unique for every action
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
