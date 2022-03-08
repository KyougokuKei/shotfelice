const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const footerDataPath = path.join(process.cwd(), "components/footer/data.js");
const footerData = require(footerDataPath);
const headerDataPath = path.join(process.cwd(), "components/header/data.js");
const headerData = require(headerDataPath);

const postsPath = path.join(process.cwd(), "posts");
const imgPath = path.join(process.cwd(), "public/img/slider");

async function subset(id) {
  const fullPath = postsPath + "/" + id + ".md";
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
  const headerTxt = recursive(headerData, Object.keys(headerData), "");
  const footerTxt = recursive(footerData, Object.keys(footerData), "");
  let homeTxt = await subset("home");
  homeTxt = recursive(homeTxt, Object.keys(homeTxt), "");
  let reservTxt = await subset("reservation");
  reservTxt = recursive(reservTxt, Object.keys(reservTxt), "");

  const category = fs.readdirSync(imgPath);
  const imgfoldername = String(category.join(""));

  const add =
    "ヴガギグゲゴザジズゼゾダヂヅデドバビブベボ0123456789asdfghjklqertyuiopmnbvcxz";
  const result =
    reservTxt +
    homeTxt +
    imgfoldername +
    add +
    headerTxt +
    footerTxt +
    reservTxt;
  fs.writeFileSync("./public/fonts/subset.txt", result);
};

main();
