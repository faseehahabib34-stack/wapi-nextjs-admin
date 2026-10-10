import Icon from "./Icon";
import { inputClass } from "./ui";

// A search box. It is a normal GET form: typing + Enter reloads the page with ?q=your-words.
//   action  = the page address, e.g. "/admin/leads"
//   hidden  = other values to keep in the address, e.g. { filter: "new" }
export default function SearchBox({ action, q = "", placeholder = "Search...", hidden = {} }) {
  return (
    <form action={action} method="get" role="search" className="relative w-full sm:max-w-xs">
      {Object.entries(hidden).map(([name, value]) => (value ? <input key={name} type="hidden" name={name} value={value} /> : null))}
      <label htmlFor="admin-search" className="sr-only">
        {placeholder}
      </label>
      <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input id="admin-search" name="q" type="search" defaultValue={q} placeholder={placeholder} maxLength={100} className={`${inputClass} pl-9`} />
    </form>
  );
}
