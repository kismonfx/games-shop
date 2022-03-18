export interface AuthData{
  token: string;
  id: string;
  username: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
}
