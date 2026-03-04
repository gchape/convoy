import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../logo/Logo";
import LeftPanelBg from "../panel/LeftPanelBg";
import SocialSignin from "../social/SocialSignin";
import SigninForm from "./SigninForm";

const SigninLeft = () => (
  <div className="relative flex flex-col items-center justify-center w-full lg:w-1/2 lg:min-w-105 px-8 lg:px-16 py-12 bg-[#09090b] overflow-x-hidden">
    <LeftPanelBg />

    <div className="relative z-10 w-sm">
      <span className="flex items-center gap-2.5 mb-12 no-underline">
        <Logo />
      </span>

      <h1 className="text-3xl text-zinc-100 tracking-tight leading-tight font-bold mb-2">
        Sign in to
        <br />
        your account
      </h1>

      <p className="text-sm text-zinc-500 mb-10">
        No account?{" "}
        <Link
          to="/register"
          className="text-orange-400 font-semibold hover:underline"
        >
          Register for free
        </Link>
      </p>

      <SigninForm />

      <div className="flex items-center gap-3 mb-5">
        <span className="flex-1 h-px bg-white/[0.07]" />

        <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider whitespace-nowrap">
          Or continue with
        </span>

        <span className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <SocialSignin icon={<FaFacebook />} title={"facebook"} />
        <SocialSignin icon={<FaGoogle />} title={"google"} />
      </div>
    </div>
  </div>
);

export default SigninLeft;
