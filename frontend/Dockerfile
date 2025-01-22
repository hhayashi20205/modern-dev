# ビルドステージ
FROM node:18 AS build

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# 開発サーバー起動
CMD ["npm", "start"]

# 以下の環境変数を設定してホットリロードを有効化
ENV WATCHPACK_POLLING=true
ENV FAST_REFRESH=false

# Reactの開発サーバーのポートを指定
EXPOSE 3000
