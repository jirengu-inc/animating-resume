# 一个会动的简历模板

> This is my resume

[预览](https://jirengu-inc.github.io/animating-resume/dist/)

## 使用方法

``` bash
git clone git@github.com:jirengu-inc/animating-resume.git
cd animating-resume
npm install
npm run dev
```

## 部署方法


1. 编辑 config/index.js，修改第 10 行的 assetsPublicPath，值为 `项目名/dist`。如果你没有修改项目名 animating-resume，则可跳过此步骤。

2. 编译、上传
    ``` bash
    npm run build
    git add .
    git commit -m "update"
    git push
    ```

3. 开启 GitHub Pages 功能

