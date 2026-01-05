import * as React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CaretSortIcon,
} from "@radix-ui/react-icons";

/**
 * Domain selector built on top of Radix Select.
 * Controlled via external state to keep selection logic decoupled from UI.
 */
const SelectDemo = ({ domain, setDomain }) => {
  return (
    <Select.Root value={domain} onValueChange={setDomain}>
      <Select.Trigger
        className="w-64 h-12 bg-black backdrop-blur-sm 
                 border border-gray-200 rounded-xl
                 px-5 text-gray-500 font-medium
                 flex items-center justify-between
                 shadow-sm hover:shadow-md
                 transition-all duration-300
                 hover:border-blue-400 hover:scale-[1.02]
                 active:scale-[0.99]
                 focus:outline-none focus:ring-2 focus:ring-blue-500/30
                 data-[placeholder]:text-gray-400
                 mt-16
                 text-center
                 m-auto
                 group"
        aria-label="Select domain"
      >
        <Select.Value
          placeholder={
            <span className="text-gray-300 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Select a domain...
            </span>
          }
        />
        <Select.Icon className="text-gray-400 group-hover:text-blue-500 transition-colors">
          <CaretSortIcon className="w-4 h-4" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        {/* Portal is used to avoid clipping and stacking context issues */}
        <Select.Content
          className="w-[var(--radix-select-trigger-width)] 
                   overflow-hidden rounded-xl bg-white
                   border border-gray-100 shadow-xl
                   animate-in fade-in-80 zoom-in-95
                   duration-200 origin-top"
          position="popper"
          sideOffset={4}
        >
          <Select.ScrollUpButton className="h-6 flex items-center justify-center bg-gradient-to-b from-white to-transparent">
            <ChevronUpIcon className="w-4 h-4 text-gray-500" />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-1">
            <Select.Group>
              <SelectItem value="frontend">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                    <img
                      className="rounded-xl w-4 h-4"
                      src="/public/front-end.png"
                      alt="Frontend"
                    />
                  </div>
                  <span className="text-gray-500">Front end</span>
                </div>
              </SelectItem>

              <SelectItem value="backend">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
                    <img
                      className="w-4 h-4"
                      src="/public/Backend.png"
                      alt="Backend"
                    />
                  </div>
                  <span className="text-gray-500">Backend</span>
                </div>
              </SelectItem>

              <SelectItem value="security">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                    <img
                      className="w-4 h-4"
                      src="/public/Security.png"
                      alt="Security"
                    />
                  </div>
                  <span className="text-gray-500">Security</span>
                </div>
              </SelectItem>

              <SelectItem value="ai">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                    <img className="w-4 h-4" src="/public/Ai.png" alt="AI" />
                  </div>
                  <span className="text-gray-500">Artificial intelligence</span>
                </div>
              </SelectItem>

              <SelectItem value="devops">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-100 to-amber-50 flex items-center justify-center">
                    <img
                      className="w-4 h-4"
                      src="/public/Devops.png"
                      alt="DevOps"
                    />
                  </div>
                  <span className="text-gray-500">DevOps</span>
                </div>
              </SelectItem>
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton className="h-6 flex items-center justify-center bg-gradient-to-t from-white to-transparent">
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

/**
 * Reusable Select item abstraction.
 * Forwarding ref is required for Radix keyboard navigation and accessibility.
 */
const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        ref={forwardedRef}
        className={classnames(
          "relative flex items-center h-10 px-3 rounded-lg",
          "text-sm text-gray-600 cursor-default select-none",
          "outline-none",
          "data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-600",
          "transition-colors duration-150",
          className
        )}
        {...props}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute right-3">
          <CheckIcon className="w-4 h-4 text-blue-500" />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

export default SelectDemo;
