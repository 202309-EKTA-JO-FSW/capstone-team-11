"use client";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Signup() {
  return (
    <>
      <NavBar />
      <div className="w-full md:grid md:min-h-[600px] md:grid-cols-2 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:grid  xl:grid-cols-2 xl:min-h-[800px] bg-gray-100">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto w-[350px] space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your information to create an account
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Ammar" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Sammour" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Re:Coded"
                  required
                  type="text"
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
                <Input id="password" required type="password" />
              </div>
              <Button className="w-full bg-[#18181b] text-white" type="submit">
                Sign Up
              </Button>
              <Button className="w-full" variant="outline">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  class="w-6 h-6 mx-4"
                  alt=""
                />
                <span>Sign up with Google</span>
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?
              <Link className="underline" href="/login">
                Login
              </Link>
            </div>
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
