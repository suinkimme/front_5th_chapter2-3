import { forwardRef } from "react"

interface ICardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string
}

export const CardTitle = forwardRef<HTMLHeadingElement, ICardTitleProps>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
))
CardTitle.displayName = "CardTitle"
