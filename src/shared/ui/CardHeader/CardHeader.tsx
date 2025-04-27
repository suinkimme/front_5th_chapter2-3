import { forwardRef } from "react"

interface ICardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const CardHeader = forwardRef<HTMLDivElement, ICardHeaderProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
))

CardHeader.displayName = "CardHeader"
