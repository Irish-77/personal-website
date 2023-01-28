// Content of Blog Posts
import { exampleBlogContent } from '../content/ExampleBlogPost'
import { blog_AI_History } from '../content/Blog_AIHistory'

// Thumbnails
import ExampleWallpaper from '../assets/blog/wallpaper.jpg';
import ChessWallpaper from '../assets/blog/chess.jpg';


export const BlogList = [
    {
        title: 'Example Blog Post',
        image: ExampleWallpaper,
        summary: '',
        content: exampleBlogContent,
        date: '07-01-2022',
        author: 'Bastian Berle'
    },
    {
        title: 'Künstliche Intelligenz in Brettspielen',
        image: ChessWallpaper,
        summary: '',
        content: blog_AI_History,
        tags: 'AI, Schach, Go, Brettspiele',
        published: '07-01-2022',
        lastChange: '07-01-2022',
        author: 'Bastian Berle'
    }
]