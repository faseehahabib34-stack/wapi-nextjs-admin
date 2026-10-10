import Icon from "./Icon";
import { cardClass } from "./ui";

// Friendly box shown when a list has nothing in it yet.
export default function EmptyState({ icon = "inbox", title, description, action }) {
  return (
    <div className={`${cardClass} flex flex-col items-center px-6 py-14 text-center`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h2 className="mt-4 text-base font-semibold text-slate-900">{title}</h2>
      {description && <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
