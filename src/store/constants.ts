
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './index';

export const HOST = `https://dog.ceo/api`;

export const LIMIT = 10;
export interface ApiResponse {
    message: string[],
    status: boolean
}

export type ApiThunk<ReturnType = void> = ActionCreator<ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>>;