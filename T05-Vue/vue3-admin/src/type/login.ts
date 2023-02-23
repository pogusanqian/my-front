export interface LoginFromInt {
  username: string;
  password: string;
}

export class LoginData {
  ruleForm: LoginFromInt = {
    username: "",
    password: "",
  };
}
