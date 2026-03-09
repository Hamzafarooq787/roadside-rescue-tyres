// components/SocialIcons.tsx
import { Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex space-x-2", className)}>
      <Button variant="ghost" size="icon" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-music"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </a>
      </Button>
    </div>
  )
}