# Chen-Chen Zong — Academic Homepage

这是一个为 GitHub Pages 精简后的学术个人主页。网站只保留：

- 首页（个人简介、研究方向、新闻、精选论文）
- 完整论文列表（带搜索）
- Services & Honors

CV、博客、示例文章、项目、书架、仓库展示、Docker 和模板维护文件均已移除。

## 最常见的更新

### 更新个人信息

编辑 `_data/profile.yml`。姓名、邮箱、地址、个人链接、简介和研究方向都集中在这里。

### 添加新闻

编辑 `_data/news.yml`，在文件最上方添加：

```yaml
- date: 2026-11-22
  text: Your news here.
```

### 添加论文

编辑 `_data/publications.yml`，在对应年份的位置添加：

```yaml
- year: 2026
  title: Paper title
  authors: Author One, Chen-Chen Zong, and Author Three
  venue: Conference or Journal
  image: preview.png
  pdf: https://example.com/paper
  code: https://github.com/example/repo  # 没有代码可删除此行
  selected: true                        # 仅精选论文需要此行
```

将论文配图放到 `assets/img/publications/`，文件名与 `image` 一致。

### 更新 Services & Honors

编辑 `_data/services.yml`。每个分组包含一个 `title` 和若干 `items`。

## 发布

1. 用本目录内容替换 `chenchenzong.github.io` 仓库中的旧文件。
2. 提交并推送到 `main` 分支。
3. 在仓库 **Settings → Pages → Build and deployment** 中将 **Source** 设为 **GitHub Actions**。
4. 等待 `Deploy to GitHub Pages` 工作流完成。

日常更新只需修改 `_data/` 中的 YAML 文件并推送；无需安装 Ruby、Node.js 或 Docker。

