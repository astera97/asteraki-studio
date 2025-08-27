"use client";
import { Button } from "@/components/ui/button"
import { Share2, Twitter, Facebook, Linkedin } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import type { BlogPost } from '@/lib/blog'

interface ShareButtonsProps {
  post: BlogPost
}

export default function ShareButtons({ post }: ShareButtonsProps) {
  const { toast } = useToast()

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Découvrez cet article : ${post.title}`

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case "facebook":
        shareUrl = `  https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `  https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        // Copier dans le presse-papiers
        navigator.clipboard.writeText(url)
        toast({
          title: "Lien copié",
          description: "Le lien de l'article a été copié dans votre presse-papiers.",
        })
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank")
    }
  }

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent"
          onClick={() => handleShare("twitter")}
        >
          <Twitter className="h-4 w-4 mr-1" />
          Partager
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent"
          onClick={() => handleShare("facebook")}
        >
          <Facebook className="h-4 w-4 mr-1" />
          Partager
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent"
          onClick={() => handleShare("linkedin")}
        >
          <Linkedin className="h-4 w-4 mr-1" />
          Partager
        </Button>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent"
        onClick={() => handleShare("clipboard")}
      >
        <Share2 className="h-4 w-4 mr-1" />
        Partager
      </Button>
    </div>
  )
}