// Content of Blog Posts
import { exampleBlogContent } from '../content/ExampleBlogPost'
import { blog_AI_History } from '../content/Blog_AIHistory'

// Thumbnails
import ExampleWallpaper from '../assets/blog/wallpaper.jpg';



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
        image: ExampleWallpaper,
        summary: '',
        content: blog_AI_History,
        date: '07-01-2022',
        author: 'Bastian Berle'
    }


]