import { Link } from "react-router";
import { useUser } from "../../features/context/UserContext";
import { items } from "../constants";

const UserSettings = () => {
  const { currentUser } = useUser();

  return (
    <div
      className="dropdown-enter tracking-wide absolute top-[calc(100%+10px)] right-0 w-56 rounded-xl border border-white/10 bg-zinc-900 overflow-hidden z-50"
      style={{ boxShadow: "0 20px 60px rgba(0,0,0,.6)" }}
    >
      <div className="px-4 py-3 border-b border-white/10 bg-orange-400/5">
        <p className="text-[14px] text-zinc-100">{currentUser?.name}</p>
        <p className="text-[12px] text-zinc-500 mt-0.5">{currentUser?.email}</p>
      </div>

      <div className="p-1.5">
        {items.map((entry, index) =>
          "sep" in entry ? (
            <div key={index} className="my-1.5 h-px bg-white/10" />
          ) : (
            <Link
              key={entry.label}
              to={"/" + entry.label.toLowerCase()}
              className={[
                "flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg",
                "text-sm text-left border-none bg-transparent cursor-pointer ",
                "transition-colors duration-150",
                entry.danger
                  ? "text-zinc-400 hover:text-red-400 hover:bg-red-500/10"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5",
              ].join(" ")}
            >
              <span className="opacity-50">{entry.icon}</span>
              {entry.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default UserSettings;
