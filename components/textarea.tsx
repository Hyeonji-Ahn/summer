interface TextAreaProps {
    label?: string;
    name?: string;
    [key: string]: any;
  }
  
  export default function TextArea({ label, name, ...rest }: TextAreaProps) {
    return (
      <div>
        {label ? (
          <label
            htmlFor={name}
            className="mb-1 block text-sm font-medium"
          >
            {label}
          </label>
        ) : null}
        <textarea
          id={name}
          className="hover:border-orange-500 transition appearance-none w-full px-3 py-2 border-gray-200 rounded-r-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          rows={4}
          {...rest}
        />
      </div>
    );
  }