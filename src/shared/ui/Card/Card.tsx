import { forwardRef } from "react"

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card = forwardRef<HTMLDivElement, ICardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
))

Card.displayName = "Card"
