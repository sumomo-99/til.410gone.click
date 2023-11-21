---
title: "AWS Aurora ブルー/グリーンデプロイ - Blue/Green Deployment"
description: "AWS Auroraのブルー/グリーンデプロイの注意点..."
next: false
prev: false
---
# AWS Aurora ブルー/グリーンデプロイ - Blue/Green Deployment
<Badge type="info" text="AWS" />
<Badge type="info" text="RDS" />
## Aurora MySQL
[ブルー/グリーンデプロイの作成 - AWSドキュメント](https://docs.aws.amazon.com/ja_jp/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments-creating.html)
- カスタムDBクラスターパラメータグループで `binlog_formata = ROW` を設定する。
- ライターインスタンスを再起動する。