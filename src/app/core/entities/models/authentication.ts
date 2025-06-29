

export interface LoginCredentials {
  username: string;
  password: string;
  expiresInMins?: number; // Optional property
}

export interface AuthResponse {
  user: IUser;
  token: string;
  message: string;
}

export interface IUser {
  createdOn: string;
  email: string;
  fullName: string;
  organizationId: number;
  userId: number;
  userName: string;
}
