import { forwardRef } from "react"

interface ITableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string
}

export const TableHeader = forwardRef<HTMLTableSectionElement, ITableHeaderProps>(({ className, ...props }, ref) => (
  <thead ref={ref} className={`[&_tr]:border-b ${className}`} {...props} />
))

TableHeader.displayName = "TableHeader"
