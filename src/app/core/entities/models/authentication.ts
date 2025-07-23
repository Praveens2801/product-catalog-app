

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

export interface IUserRegisteration {
  userId: number,
  organizationId: number,
  userName: string,
  password: string,
  confirmPassword: string,
  fullName: string,
  email: string,
  createdOn: string
}
