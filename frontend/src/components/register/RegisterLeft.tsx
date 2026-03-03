import { Link } from "react-router";
import LeftPanelBg from "../panel/LeftPanelBg";
import Logo from "../logo/Logo";
import RegisterForm from "./RegisterForm";

const RegisterLeft = () => (
  <div className="relative flex flex-col justify-center w-full lg:w-1/2 lg:min-w-105 px-8 sm:px-16 pt-24 pb-12 bg-[#09090b] overflow-y-hidden overflow-x-hidden">
    <LeftPanelBg />

    <div className="relative z-10 max-w-sm w-full mx-auto lg:mx-0">
      <Link to="/" className="flex items-center gap-2.5 mb-12 no-underline">
        <Logo />
      </Link>

      <h1 className="text-[28px] font-bold text-zinc-100 tracking-tight leading-tight mb-2">
        Create your
        <br />
        account
      </h1>

      <p className="text-[13px] text-zinc-500 mb-10">
        Already have one?{" "}
        <Link
          to="/sign-in"
          className="text-orange-400 font-semibold hover:underline"
        >
          Sign in
        </Link>
      </p>

      <RegisterForm />
    </div>
  </div>
);

export default RegisterLeft;
