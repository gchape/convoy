import RightPanel from "../panel/RightPanel";
import RegisterLeft from "./RegisterLeft";

const RegisterRight = () => <RightPanel />;

const Register = () => (
  <div className="flex w-screen min-h-screen lg:h-screen lg:overflow-hidden font-[Syne,sans-serif]">
    <RegisterLeft />
    <RegisterRight />
  </div>
);

export default Register;
