import Field from "./Field";
import ImageField from "./ImageField";
import IconField from "./IconField";
import { checkboxClass } from "./ui";

// Shows the right kind of input for a field: text, long text, link, icon, image or tick-box.
export default function FieldRenderer({ field, value }) {
  const common = { label: field.label, name: field.key, defaultValue: value, hint: field.hint, tag: field.key };
  switch (field.type) {
    case "textarea":
      return <Field {...common} rows={3} />;
    case "image":
      return <ImageField {...common} />;
    case "icon":
      return <IconField {...common} />;
    case "checkbox":
      return (
        <div>
          <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
            <input type="checkbox" name={field.key} value="1" defaultChecked={value === "1"} className={checkboxClass} /> {field.label}
          </label>
          {field.hint && <p className="mt-1.5 pl-[26px] text-xs text-slate-500">{field.hint}</p>}
        </div>
      );
    case "link":
      return <Field {...common} hint={field.hint || "A page like /pricing or /#demo, or a full https:// address. # means \"nowhere\"."} />;
    default:
      return <Field {...common} />;
  }
}
