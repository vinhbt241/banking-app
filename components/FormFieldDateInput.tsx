import React from "react"
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form"

import { cn } from "@/lib/utils"
import { Popover, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { PopoverContent } from "@radix-ui/react-popover"
import { Calendar } from "./ui/calendar"
import { Control, FieldValues } from "react-hook-form"

interface FormFieldTextInput {
  control: Control<FieldValues>
  name: string
  label: string
}

const FormFieldDateInput = ({ control, name, label }: FormFieldTextInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item justify-end">
          <FormLabel>{label}</FormLabel>
          <div className="flex w-full flex-col">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[185px] pl-3 text-left font-normal border border-gray-300",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "dd-MM-yyyy")
                    ) : (
                      <span className="text-gray-600">DD-MM-YYYY</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={1950}
                  toYear={new Date().getFullYear() + 100}
                />
              </PopoverContent>
            </Popover>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default FormFieldDateInput
