import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: string
  readTime: string
  image: string
  description: string
  content: string
  relatedPosts?: {
    title: string
    category: string
    image: string
    slug: string
  }[]
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Create content directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Convert markdown to HTML
        const processedContent = await remark().use(html).process(content)
        const contentHtml = processedContent.toString()

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString().split('T')[0],
          author: data.author || 'Anonymous',
          category: data.category || 'Uncategorized',
          readTime: data.readTime || '5 min read',
          image: data.image || '/placeholder.svg?height=400&width=600',
          description: data.description || '',
          content: contentHtml,
          relatedPosts: data.relatedPosts || [],
        } as BlogPost
      })
  )

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'Anonymous',
      category: data.category || 'Uncategorized',
      readTime: data.readTime || '5 min read',
      image: data.image || '/placeholder.svg?height=400&width=600',
      description: data.description || '',
      content: contentHtml,
      relatedPosts: data.relatedPosts || [],
    } as BlogPost
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}
