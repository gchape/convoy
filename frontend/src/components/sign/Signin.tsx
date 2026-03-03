"use client";
import RightPanel from "../panel/RightPanel";
import SigninLeft from "./SigninLeft";

const SigninRight = () => <RightPanel />;

const Signin = () => (
  <div className="flex w-screen h-screen justify-center overflow-hidden font-[Syne,sans-serif]">
    <SigninLeft />
    <SigninRight />
  </div>
);

export default Signin;
