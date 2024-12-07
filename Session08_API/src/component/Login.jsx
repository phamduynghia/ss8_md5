import React, { useState } from "react";
import Header from "./Header";
import { Button, Input } from "antd";
import { baseUrl } from "../apis/instant";
import { Cookies } from "react-cookie";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const resetUser = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = async () => {
      try {
        const response = await baseUrl.post(
          "api.myService.com/v1/auth/sign-in",
          user,
          {
            headers: {
              Authorization: "",
            },
          }
        );
        const cookie = new Cookies();
        cookie.set("data", response.data);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    login();
    resetUser();
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setUser((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <div>
      <Header />

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-[400px] h-[250px] border m-auto mt-[150px] flex flex-col gap-5 text-center p-5"
      >
        <div>
          <label>Username</label>
          <Input
            name="username"
            value={user.username}
            onChange={(e) => handleChangeValue(e)}
          />
        </div>

        <div>
          <label>Password</label>
          <Input.Password
            name="password"
            value={user.password}
            onChange={(e) => handleChangeValue(e)}
          />
        </div>

        <Button className="w-[100px] m-auto" type="primary" htmlType="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
