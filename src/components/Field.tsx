import { inputCls } from "../ui";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
}

export function Field({ label, name, type = "text" }: FieldProps) {
  return (
    <label className="block">
      {label}
      <input>
        {" "}
        name={name} type={type} required className={inputCls}
      </input>
    </label>
  );
}
