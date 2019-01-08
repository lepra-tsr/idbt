this is dev version.
現在開発中です。


# idbt

idobata unofficial cli tool.

プログラマのためのSNS [Idobata](https://idobata.io/ja/home) の **非公式** CLIクライアントです。   
ターミナルソフト、各種IDE･エディタ付属のターミナルから実行し、仕事中に流し見をしやすいようにカラーリング&圧縮したタイムラインを表示します。

> Windowsのターミナルから実行した場合、いろいろ不具合が多いです……。   
> **VSCode付属のターミナルから実行する** のがわりと安全かもしれません。  
> [VisualStudioCode 統合コンソール のbash.exe でファイル名の日本語文字化け対応 - Qiita](https://qiita.com/0xmks/items/a3bb731cabfa61b18578)

## thanks for

* [初めてのnpm パッケージ公開 - Qiita](https://qiita.com/TsutomuNakamura/items/f943e0490d509f128ae2)
* [chalk/chalk: 🖍 Terminal string styling done right](https://github.com/chalk/chalk)
* [sindresorhus/cli-spinners: Spinners for use in the terminal](https://github.com/sindresorhus/cli-spinners)
* [SBoudrias/Inquirer.js: A collection of common interactive command line user interfaces.](https://github.com/SBoudrias/Inquirer.js)
* [domchristie/turndown: 🛏 An HTML to Markdown converter written in JavaScript](https://github.com/domchristie/turndown)
* [yargs/yargs: yargs the modern, pirate-themed successor to optimist.](https://github.com/yargs/yargs)


## インストール

```
## ユーザディレクトリ配下に `idobata_cli` ディレクトリを作成し、そこにインストールする場合の例
$ mkdir -p ~/idobata_cli
$ cd ~/idobata_cli
$ npm install idbt

## aliasコマンドを使用してエイリアスを定義しておくと便利かも
# $(npm bin)は、カレントディレクトリに最も近い node_modules/.bin の絶対パスを返します
$ echo "alias idbt='node $(npm bin)/idbt'" >> ~/.bashrc
$ source ~/.bashrc
```

## アンインストール

```
# インストールしたディレクトリを削除してください。
rm -rf ~/idobata_cli

# ユーザディレクトリ配下に設定ファイルを作成しますので、削除してください
$ rm -rf ~/.idbt
```

# 使用例

> 前述の `idbt` にエイリアスを作成した場合のコマンドを記載します。

## トークンとチャンネル情報の取得

idobata APIへのアクセスにはトークンが必要です。   
トークンはID(e-mail)とパスワードを使用し、Token APIから取得します。

```
$ idbt init
```

画面の指示に従い、IDとパスワードを入力し、矢印キーでチャンネルを選択してください。   
ユーザディレクトリの直下に、設定ファイル `~/.idbt` を作成します。   
IDと取得したトークン、選択したチャンネルを設定ファイルに格納し、パスワードは保存しません。

> 選択したチャネルは **カレントチャンネル** として設定ファイルに格納し、タイムライン読み出し･投稿の際に参照します。

> 新しいチャンネルに参加した場合などは、再度 `idbt init` コマンドを実行してチャンネル情報を再取得してください。

## タイムラインの表示

カレントチャンネルのタイムラインを表示します。   
HTML形式のidobata APIのレスポンスをMarkdownへパースして空行などを圧縮、   
画像やリンク等のコンテンツをマークアップして表示します。   
上記の仕様上、表示する内容をそのまま再投稿しても、正しいMarkdown記法としてパースされない場合があります。

```
$ idbt list 

# shorthand
$ idbt l
```

> ページングの追跡は未実装です……。

## チャンネル切り替え

カレントチャンネルの切り替えを行うことができます。

```
$ idbt channel

# shorthand
$ idbt c
```

## メッセージの投稿

```
# use stdin
$ idbt post "hello idobata."

# open vim. post[:wq], abort[:q!] 
$ idbt post 

# open emacs. post[x-S x-C], abort[x-C]
$ idbt post --emacs


# shorthand
$ idbt p "hello idobata."
$ idbt p 
$ idbt p --emacs
```

## show config values

現在の設定を確認できます。   

```
$ idbt config
```

## help

`--help` オプションが使用できます。

```
$ idbt --help
$ idbt l --help 
$ idbt p --help 
```

# もくひょう

* 各種WIP
* ドラフト(下書き)機能
* Emoji対応
* watchモード ($ tail -f しながら投稿もできる的なモード)