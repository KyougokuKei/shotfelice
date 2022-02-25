const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "posts");
const imgeDirectory = path.join(process.cwd(), "public/img/slider");

async function subset(id) {
  const fullPath = postsDirectory + "/" + id + ".md";
  const fileContents = fs.readFileSync(fullPath);
  const matterResult = matter(fileContents);
  return {
    ...matterResult.data,
  };
}

function recursive(obj, keys, r = "") {
  for (let key of keys) {
    if (isDict(obj[key])) {
      r += recursive(obj[key], Object.keys(obj[key], r));
    } else {
      r += obj[key];
    }
  }
  return r;
}

function isDict(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}

const main = async () => {
  let home_txt = await subset("home");
  home_txt = recursive(home_txt, Object.keys(home_txt), "");

  const category = fs.readdirSync(imgeDirectory);
  const imgfoldername = String(category.join(""));

  const add =
    "ヴガギグゲゴザジズゼゾダヂヅデドバビブベボ0123456789asdfghjklqertyuiopmnbvcxz";
  const result = home_txt + imgfoldername + add;
  fs.writeFileSync("./public/fonts/subset.txt", result);
};

main();
