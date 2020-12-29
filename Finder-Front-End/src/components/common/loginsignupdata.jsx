const Login = [
  {
    id: 1,
    icon: "user",
    placeholder: "Email",
    userId: "email",
    type: "text",
  },
  {
    id: 2,
    icon: "lock",
    placeholder: "Password",
    userId: "password",
    type: "password",
  },
];

const SignUp = [
  {
    id: 1,
    icon: "user",
    placeholder: "Username",
    userId: "username",
    type: "text",
  },
  {
    id: 2,
    icon: "envelope",
    placeholder: "Email",
    userId: "email",
    type: "text",
  },
  {
    id: 3,
    icon: "lock",
    placeholder: "Password",
    userId: "password",
    type: "password",
  },
];

export function logindata() {
  return Login;
}

export function signupdata() {
  return SignUp;
}
