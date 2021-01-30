
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './index';

export const HOST = `https://dog.ceo/api`;

export interface ApiResponse {
    message: string[],
    status: boolean
}

export type ApiThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>