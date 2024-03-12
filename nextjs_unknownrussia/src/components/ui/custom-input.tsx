import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type CustomInputProps = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
};

export const CustomInput = ({
  register,
  name,
  label,
  type,
  placeholder,
  required = false,
  pattern,
  errors,
}: CustomInputProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <label
        htmlFor={name}
        className="text-xs md:text-sm font-bold whitespace-nowrap"
      >
        {label}
      </label>
      <input
        type={type}
        {...register(name, {
          required: required ? "Заполните поле" : false,
          pattern: pattern || undefined,
        })}
        className={`border placeholder:text-xs bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          errors[name] ? "border-red-500" : ""
        }`}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-xs text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
