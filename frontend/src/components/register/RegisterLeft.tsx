import { Link } from "react-router";
import Logo from "../logo/Logo";
import LeftPanelBg from "../panel/LeftPanelBg";
import RegisterForm from "./RegisterForm";

const RegisterLeft = () => (
  <div className="relative flex flex-col items-center justify-center w-full lg:w-1/2 lg:min-w-105 px-8 lg:px-16 py-12 bg-[#09090b] overflow-x-hidden">
    <LeftPanelBg />

    <div className="relative z-10 w-sm">
      <span className="flex items-center gap-2.5 mb-12 no-underline">
        <Logo />
      </span>

      <h1 className="text-3xl font-bold text-zinc-100 tracking-tight leading-tight mb-2">
        Create your
        <br />
        account
      </h1>

      <p className="text-sm text-zinc-500 mb-10">
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
