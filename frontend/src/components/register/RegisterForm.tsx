import { NavLink } from "react-router";

const inputClass =
  "h-10.5 bg-zinc-900 border border-white/8 rounded-[9px] px-3.5 text-[13px] text-zinc-100 placeholder-zinc-700 outline-none transition-colors duration-150 focus:border-orange-400/40 focus:shadow-[0_0_0_3px_rgba(251,146,60,0.07)] invalid:border-red-900";

const labelClass =
  "text-[11px] font-semibold text-zinc-500 uppercase tracking-widest";

const RegisterForm = () => (
  <form method="post" className="w-full">
    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="firstName" className={labelClass}>
        First name
      </label>
      <input
        required
        type="text"
        id="firstName"
        placeholder="Jane"
        className={inputClass}
      />
    </div>

    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="lastName" className={labelClass}>
        Last name
      </label>
      <input
        required
        type="text"
        id="lastName"
        placeholder="Smith"
        className={inputClass}
      />
    </div>

    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="company" className={labelClass}>
        Company name
      </label>
      <input
        required
        type="text"
        id="company"
        placeholder="Fast Courier LLC"
        className={inputClass}
      />
    </div>

    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="email" className={labelClass}>
        Email address
      </label>
      <input
        required
        type="email"
        id="email"
        placeholder="you@example.com"
        title="Please enter a valid email address."
        aria-describedby="emailHelp"
        className={inputClass}
      />
      <p id="emailHelp" className="text-xs text-zinc-500">
        Enter a valid email (e.g., you@example.com).
      </p>
    </div>

    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="password" className={labelClass}>
        Password
      </label>
      <input
        required
        id="password"
        type="password"
        placeholder="••••••••"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        title="Min. 8 characters with uppercase, number and special symbol."
        aria-describedby="passwordHelp"
        className={inputClass}
      />
      <p id="passwordHelp" className="text-xs text-zinc-500">
        Min. 8 characters with uppercase, number and special symbol.
      </p>
    </div>

    <label className="flex items-start gap-2.5 text-[12px] text-zinc-500 cursor-pointer mb-7">
      <input
        required
        defaultChecked
        type="checkbox"
        className="accent-orange-400 rounded mt-0.5 shrink-0"
      />
      <span>
        I agree to the{" "}
        <NavLink to="/terms" className="text-orange-400 hover:underline">
          Terms of Service
        </NavLink>{" "}
        and{" "}
        <NavLink to="/privacy" className="text-orange-400 hover:underline">
          Privacy Policy
        </NavLink>
      </span>
    </label>

    <button
      type="submit"
      className="w-full h-10.5 bg-orange-400 text-zinc-950 text-[12px] font-bold uppercase tracking-widest rounded-[9px] cursor-pointer transition-all duration-150 hover:opacity-90 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]"
    >
      Create account
    </button>
  </form>
);

export default RegisterForm;
