import { NavigateFunction } from "react-router-dom";
import { create } from "zustand";
import Cookies from "js-cookie";

import { TOKEN } from "../constants";
import { request } from "../request";
import { userLogin } from "../types";
import { message } from "antd";

type AuthTypes = {
  isAuthenticated: boolean;
  login: (data: userLogin, navigate: NavigateFunction) => void;
  logout: () => void;
};

type RegisterTypes = {
  isRegisterAuthenticated: boolean;
  register: (data: userLogin, navigate: NavigateFunction) => void;
};

export let userData;

export const useAuth = create<AuthTypes>((set) => ({
  isAuthenticated: !!Cookies.get(TOKEN),
  login: async (data, navigate) => {
    try {
      const res = await request.post("auth/login", data);
      Cookies.set(TOKEN, res.data.token);
      userData.set(res.data);
      console.log(userData)
      set({ isAuthenticated: true });
      navigate("/dashboard");
    } catch (err) {
      message.error("Username or password is wrong !");
    }
  },
  logout: () => {
    Cookies.remove(TOKEN);
    set({ isAuthenticated: false });
  },
}));

export const registerAuth = create<RegisterTypes>((set) => ({
  isRegisterAuthenticated: !!Cookies.get(TOKEN),
  register: async (data, navigate: NavigateFunction) => {
    try {
      const req = await request.post("auth/register", data);
      Cookies.set(TOKEN, req.data.token);
      userData.set(req.data);
      set({ isRegisterAuthenticated: true });
      navigate("/dashboard")
    } catch (err) {
      message.error('Register error!');
    }
  }

}))