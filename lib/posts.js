import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";

const postsDirectory = path.join(process.cwd(), "posts");
const imgeDirectory = path.join(process.cwd(), "public/img/slider");

export async function getImgPaths() {
  // fs.readdirSyncでディレクトリの中身のフォルダ名のみを取得
  const category = fs
    .readdirSync(imgeDirectory, "utf8")
    .filter((imagePath) => imagePath !== ".DS_Store");
  const imgPath = {};
  for (const categoryName of category) {
    const categoryImgPath = [];
    const image = fs
      .readdirSync(path.join(imgeDirectory, categoryName), "utf8")
      .filter((imagePath) => imagePath !== ".DS_Store");
    for (const imageName of image) {
      categoryImgPath.push(path.join("/img/slider/", categoryName, imageName));
    }
    imgPath[categoryName] = categoryImgPath;
  }

  return imgPath;
}

export async function getPostDatas(ids) {
  const posts = await Promise.all(
    ids.map(async (id) => {
      const fullPath = postsDirectory + "/" + id + ".md";
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        ...matterResult.data,
      };
    })
  );
  // postsリストの要素である辞書型を連結
  return Object.assign({}, ...posts);
}

export async function getPostData(id) {
  const fullPath = postsDirectory + "/" + id + ".md";
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return {
    ...matterResult.data,
  };
}

export async function subset(id) {
  const fullPath = postsDirectory + "/" + id + ".md";
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return {
    ...matterResult.data,
  };
}

export async function loadYaml(p) {
  const yamlPath = path.join(process.cwd(), "posts", p);
  const obj = yaml.load(fs.readFileSync(yamlPath, "utf-8"));
  return obj;
}

export async function loadYamls(list) {
  const yamlPaths = list.map((p) => path.join(process.cwd(), "posts", p));
  const objs = await Promise.all(
    yamlPaths.map((p) => {
      return yaml.load(fs.readFileSync(p, "utf-8"));
    })
  );
  return Object.assign({}, ...objs);
}
