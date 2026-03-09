// components/ServiceCard.tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceCardProps {
  title: string
  description: string
  imageUrl?: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden border-0 bg-secondary/50 backdrop-blur">
      <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary" />
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href="tel:03331234567">BOOK NOW</a>
        </Button>
      </CardFooter>
    </Card>
  )
}