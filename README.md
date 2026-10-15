# 原神标准队伍 DPS 视频榜

枫丹及之后的幽境危战常见主 C 队伍 B 站视频索引。每位主 C 只列一支队伍，五星角色均为零命，四星命座不限，全队不携带五星武器。四星纪行武器可用，但会单独标注。数字只收录视频能够支持的零能量冷启动、120 秒循环成绩；其他队伍在同一列表展示，但不编造 DPS 或名次。

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

该域名已关联 Pages 项目。DNS 中的 CNAME `dps` 指向 `genshin-team-dps-btu.pages.dev`（在 `efficientsystem.org` 区域内）。
