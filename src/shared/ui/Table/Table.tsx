import { forwardRef } from "react"

interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string
}

export const Table = forwardRef<HTMLTableElement, ITableProps>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table ref={ref} className={`table-fixed w-full caption-bottom text-sm ${className}`} {...props} />
  </div>
))

Table.displayName = "Table"
