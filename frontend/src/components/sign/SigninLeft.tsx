import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../logo/Logo";
import LeftPanelBg from "../panel/LeftPanelBg";
import SigninForm from "./SigninForm";
import SocialButton from "../social/SocialButton";

const SigninLeft = () => (
  <div className="relative flex flex-col justify-center w-1/2 min-w-105 px-16 py-14 bg-[#09090b] overflow-hidden">
    <LeftPanelBg />

    <div className="relative z-10 max-w-sm w-full">
      <Link to="/" className="flex items-center gap-2.5 mb-12 no-underline">
        <Logo />
      </Link>

      <h1 className="text-[28px] font-bold text-zinc-100 tracking-tight leading-tight mb-2">
        Sign in to
        <br />
        your account
      </h1>

      <p className="text-[13px] text-zinc-500 mb-10">
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

        <span className="text-xs text-zinc-600 uppercase tracking-widest whitespace-nowrap">
          Or continue with
        </span>

        <span className="flex-1 h-px bg-white/[0.07]" />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <SocialButton icon={<FaFacebook />} title={"facebook"} />
        <SocialButton icon={<FaGoogle />} title={"google"} />
      </div>
    </div>
  </div>
);

export default SigninLeft;
