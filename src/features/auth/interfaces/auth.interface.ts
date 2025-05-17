import type { IUser } from "../../../shared/interfaces/user.interface";

export interface AuthState {
  authInfo?: IUser;
}

export interface IReduxAuthPayload {
  type: string;
  payload: AuthState;
}
