import React from "react"
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Control, FieldValues } from "react-hook-form"

interface FormFieldTextInput {
  control: Control<FieldValues>
  name: string
  label: string
  placeholder: string
}

const FormFieldTextInput = ({
  control,
  name,
  label,
  placeholder,
}: FormFieldTextInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default FormFieldTextInput
