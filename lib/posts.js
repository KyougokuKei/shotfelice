import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostData(id) {
    const fullPath = postsDirectory + '/' + id + '.md';
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
        ...matterResult.data
    }
}

export async function subset(id) {
    const fullPath = postsDirectory + '/' + id + '.md';
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
        ...matterResult.data
    }
}

