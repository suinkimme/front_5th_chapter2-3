import { forwardRef } from "react"

interface ITableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  className?: string
}

export const TableCell = forwardRef<HTMLTableCellElement, ITableCellProps>(({ className, ...props }, ref) => (
  <td ref={ref} className={`p-2 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />
))

TableCell.displayName = "TableCell"
