export interface LoginFromInt {
  username: string;
  password: string;
}

export class LoginData {
  form: LoginFromInt = {
    username: "",
    password: "",
  };
}
