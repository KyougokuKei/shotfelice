const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.join(process.cwd(), 'posts')

async function subset(id) {
    const fullPath = postsDirectory + '/' + id + '.md';
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
        ...matterResult.data
    }
}

function isDict(data) {
    return typeof data === 'object' && data !== null && !Array.isArray(data)
}

function recursive(obj, keys, r = "") {
    for (let key of keys) {
        if (isDict(obj[key])) {
            r += recursive(obj[key], Object.keys(obj[key], r))
        } else {
            r += obj[key]
        }
    }
    return r
}

const main = async () => {
    const data = await subset('home')
    const txt = recursive(data, Object.keys(data), "")
    fs.writeFileSync("./public/fonts/subset.txt", txt)
}

main()

