"use client";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  // const navigate = useNavigate();
  // const router = useRouter();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://127.0.0.1:3001/api/auth/signin",
        credentials
      );

      // if (res.data.isAdmin) {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      // navigate("/");
      // router.push("/");
      window.location.href = "/";
      // } else {
      //   dispatch({
      //     type: "LOGIN_FAILURE",
      //     payload: { message: "You are not allowed!" },
      //   });
      // }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <>
      <NavBar />

      <div className="w-full md:grid md:min-h-[600px] md:grid-cols-2 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:grid  xl:grid-cols-2 xl:min-h-[800px] bg-gray-100">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto w-[350px] space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your username below to login to your account
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username Or Email</Label>
                <Input
                  id="username"
                  placeholder="Re:Coded"
                  required
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    className="ml-auto inline-block text-sm underline"
                    href="#"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  required
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                className="w-full bg-[#18181b] text-white"
                type="submit"
                disabled={loading}
                onClick={handleClick}
              >
                Login
              </Button>
              <Button className="w-full bg-white" variant="outline">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  className="w-6 h-6 mx-4"
                  alt=""
                />
                <span>Login with Google</span>
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don't have an account?
              <Link className="underline" href="/signup">
                Sign up
              </Link>
            </div>
            {error && (
              <span className="block text-sm text-red-600">
                {error.message}
              </span>
            )}
          </div>
        </div>
        <div className=" hidden bg-gray-100 md:block lg:block xl:block dark:bg-gray-800">
          <img
            alt="Image"
            className="h-full w-full object-cover"
            height="1080"
            // src="https://placehold.co/600x400?text=Event+Master"
            src="https://scontent.famm12-1.fna.fbcdn.net/v/t39.30808-6/358701817_650401810444257_6439428121413427659_n.png?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFsJ05qvf2kwHBAn4NlD7lfHdIWXWr5Wiod0hZdavlaKpyM7JAGlFRfrKBiCAXTPPk9PcBGdw-1fCtenEWiVg96&_nc_ohc=sTCC-vLkq7QAX8vv9qn&_nc_ht=scontent.famm12-1.fna&oh=00_AfC45IgbFrfGEGgIbvxy2P-zaeaktUZFlZKVGxK1F_nSeg&oe=66071FF7"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width="1920"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
