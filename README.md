# React_learning
Document my experience in learning react

<link herf = "https://zh-hans.reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment">本地环境配置</link>

# 配置本地环境需要确认你的node -v >= 10.16 并且你的npm -v >= 5.6

Setup Git
Git and GitHub：

Install Git: https://git-scm.com/

Run command:

git config --global user.name "Your Name"
git config --global user.email your_email@example.com
#### Run on Windows only, no need to run on MacOS.
git config --global core.autocrlf false
You need configure SSH to GitHub, reference link: https://www.cnblogs.com/hukai46/p/5489631.html.

[Recommend] Install a Git GUI tool (For example SourceTree: https://www.sourcetreeapp.com/ )


# VSCode Extensions
Install Visual Studio Code Extensions (Paste all to run in cli):
```
code --install-extension abusaidm.html-snippets  
code --install-extension christian-kohler.path-intellisense  
code --install-extension Compulim.indent4to2  
code --install-extension dariofuzinato.vue-peek  
code --install-extension dbaeumer.vscode-eslint  
code --install-extension donjayamanne.githistory  
code --install-extension dsznajder.es7-react-js-snippets  
code --install-extension eamodio.gitlens  
code --install-extension EditorConfig.EditorConfig  
code --install-extension esbenp.prettier-vscode  
code --install-extension formulahendry.auto-rename-tag  
code --install-extension jasonnutter.search-node-modules  
code --install-extension mikestead.dotenv  
code --install-extension ms-python.python  
code --install-extension ms-vscode.vscode-typescript-tslint-plugin  
code --install-extension msjsdiag.debugger-for-chrome  
code --install-extension octref.vetur  
code --install-extension PKief.material-icon-theme  
code --install-extension Shan.code-settings-sync  
code --install-extension shardulm94.trailing-spaces  
code --install-extension shinnn.stylelint  
code --install-extension sysoev.language-stylus  
code --install-extension techer.open-in-browser  
code --install-extension vincaslt.highlight-matching-tag  
code --install-extension Zignd.html-css-class-completion  
```
**可能会遇到找不到code --指令，需要打开cmd Palette 来将code加入本地环境**

## 确认vscode配置成功后，就可以开始开发第一个属于自己的app了  
1. `npx create-react-app my-app`  
2. 删除掉新项目中 src/ 文件夹下的所有文件。  
```
cd my-app
cd src
```
# 如果你使用 Mac 或 Linux:
```
rm -f *
```
# 如果你使用 Windows:
```
del *
```
# 然后回到项目文件夹
```
cd ..  
```
3. 在 src/ 文件夹中创建一个名为 index.css 的文件
4. 在 src/ 文件夹中创建一个名为 index.js 的文件
5. 拷贝以下三行代码到 src/ 文件夹下的 index.js 文件的顶部：
``` 
import React from 'react';  
import ReactDOM from 'react-dom';  
import './index.css';  
```

cd到当前项目文件夹目录下  终端中输入`npm start`
在浏览器中访问`http://localhost:3000`


# 端口被占用了怎么办？
例如：先查找3000端口  
` sudo lsof -i :3000 `  
然后根据PID杀进程：  
` sudo kill -9 61342 `（'61342'即pid）

# how to git my commit

1. git stash
2. git checkout -b jinzeng/update-admin. //'jinzeng/update-admin' can be replaced
3. git stash pop
4. git add .
5. git commit -m "Update admin"
6. git push -u origin jinzeng/update-admin
7. Go to github to check and request one of the reviewers to review my commits(Remember to CPR)
8. Inform the reviewer to review my commits