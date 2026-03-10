"use client";
import RightPanel from "../panel/RightPanel";
import SigninLeft from "./SigninLeft";

const SigninRight = () => <RightPanel />;

const Signin = () => (
  <div className="flex w-screen min-h-screen lg:h-screen lg:overflow-hidden">
    <SigninLeft />
    <SigninRight />
  </div>
);

export default Signin;
