import { Link } from "react-router";

const RegisterForm = () => (
  <form method="post" className="w-full">
    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="firstName" className="label">
        First name
      </label>

      <input
        required
        type="text"
        id="firstName"
        placeholder="Jane"
        className="input"
      />
    </div>

    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="lastName" className="label">
        Last name
      </label>

      <input
        required
        type="text"
        id="lastName"
        placeholder="Smith"
        className="input"
      />
    </div>

    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="company" className="label">
        Company name
      </label>

      <input
        required
        type="text"
        id="company"
        placeholder="Fast Courier LLC"
        className="input"
      />
    </div>

    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="email" className="label">
        Email address
      </label>

      <input
        required
        type="email"
        id="email"
        placeholder="you@example.com"
        title="Please enter a valid email address."
        aria-describedby="emailHelp"
        className="input"
      />

      <p id="emailHelp" className="text-xs text-zinc-500">
        Enter a valid email (e.g., you@example.com).
      </p>
    </div>

    <div className="flex flex-col gap-1.5 mb-5">
      <label htmlFor="password" className="label">
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
        className="input"
      />

      <p id="passwordHelp" className="text-xs text-zinc-500">
        Min. 8 characters with uppercase, number and special symbol.
      </p>
    </div>

    <label className="flex items-start gap-2.5 text-xs text-zinc-500 cursor-pointer mb-7">
      <input
        required
        defaultChecked
        type="checkbox"
        className="accent-orange-400 rounded mt-0.5 shrink-0"
      />

      <span>
        I agree to the
        <Link to="/terms" className="text-orange-400 hover:underline">
          Terms of Service
        </Link>
        and
        <Link to="/privacy" className="text-orange-400 hover:underline">
          Privacy Policy
        </Link>
      </span>
    </label>

    <button
      type="submit"
      className="w-full h-10.5 bg-orange-400 text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-[9px] cursor-pointer transition-all duration-150 hover:opacity-90 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]"
    >
      Create account
    </button>
  </form>
);

export default RegisterForm;
