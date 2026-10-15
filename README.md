# 原神战舰 DPS 视频榜

幽境危战常见主 C 队伍的 B 站视频索引。每位主 C 保留一支代表队；主榜仅列视频注明零能量冷启动、120 秒循环的数据。各作者的测试条件不完全一致，排名仅作原视频导航。

## 本地预览

```sh
python3 -m http.server 8765 --directory dist
```

## 部署

静态文件位于 `dist/`。当前 Pages 项目采用 Wrangler Direct Upload，发布命令：

```sh
wrangler pages deploy dist --project-name genshin-team-dps --branch main
```

GitHub 仓库用于保存源代码；推送代码后需运行上面的命令更新线上站点。

正式域名：`dps.efficientsystem.org`。

该域名已关联 Pages 项目。DNS 中还需添加 CNAME：名称 `dps`，目标 `genshin-team-dps-btu.pages.dev`（在 `efficientsystem.org` 区域内）。
