import React, { useId } from "react";
import { forwardRef } from "react";

const Input = forwardRef(
  (function Input ({ lable, type = "text", className, ...props }, ref) {
    const Id = useId();
    return (
      <div className="w-full">
        {lable && (
          <label className="inline-block mb-1 pl-1" htmlFor={Id}>
            {lable}
          </label>
        )}

        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          {...props}
          id={Id}
          ref={ref}
        />
      </div>
    );
  })
);

export default Input;
