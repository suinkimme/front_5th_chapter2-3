import { forwardRef } from "react"

interface ITableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string
}

export const TableBody = forwardRef<HTMLTableSectionElement, ITableBodyProps>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
))

TableBody.displayName = "TableBody"
