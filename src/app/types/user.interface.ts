export interface User {
  email: string;
  accessToken: string;
  username: string;
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  image: string; // JWT accessToken (for backward compatibility) in response and cookies
  refreshToken: string; // refreshToken in response and cookies
}
