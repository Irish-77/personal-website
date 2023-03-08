// Content of Blog Posts
// import { exampleBlogContent } from '../content/ExampleBlogPost'
import { blog_AI_History } from '../content/Blog_AIHistory'
import { blog_SwarmIntelligence } from '../content/Blog_SwarmIntelligence'

// Thumbnails
// import ExampleWallpaper from '../assets/blog/wallpaper.jpg';
import ChessWallpaper from '../assets/blog/chess.jpg';
import SwarmWallpaper from '../assets/blog/swarm.jpg';


export const BlogList = [
    // {
    //     title: 'Example Blog Post',
    //     image: ExampleWallpaper,
    //     summary: '',
    //     content: exampleBlogContent,
    //     date: '07-01-2022',
    //     author: 'Bastian Berle'
    // },
    {
        title: 'Künstliche Intelligenz in Brettspielen',
        image: ChessWallpaper,
        summary: '',
        content: blog_AI_History,
        tags: 'AI, Schach, Go, Brettspiele',
        published: '2022-02-27',
        lastChange: '2023-01-31',
        author: 'Bastian Berle',
        language: 'German'
    },
    {
        title: 'Schwarmintelligenz',
        image: SwarmWallpaper,
        summary: '',
        content: blog_SwarmIntelligence,
        tags: 'Schwarmintelligenz',
        published: '2022-02-27',
        lastChange: '2023-01-31',
        author: 'Bastian Berle',
        language: 'German'
    }

]