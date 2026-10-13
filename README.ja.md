# AnkiでFreedoomを遊ぶ

AnkiのカードのなかでFreedoomを遊べるデッキです(Windows版のAnki向け)。

[English](README.md)

## 1. Ankiをインストールする(Windows、winget)

PowerShellかWindowsターミナルを開いて、次を実行します。

```powershell
winget install -e --id Anki.Anki
```

wingetが入れるバージョンを確認したいときは、次を実行します。

```powershell
winget show Anki.Anki
```

Ankiは新しいバージョンが必要です(23.10以降を推奨)。
[公式サイト](https://apps.ankiweb.net/)のインストーラーを使うこともできます。

## 2. デッキとアドオンを入れる

1. [Releases](../../releases)から、`doom.apkg`と`doom_keys.ankiaddon`をダウンロードします。
2. アドオンを入れます。「ツール」→「アドオン」→「ファイルからインストール」で`doom_keys.ankiaddon`を選び、Ankiを再起動します。
   このアドオンは、DOOMのカードを表示している間、SpaceやEnterなどのキーがAnkiに取られないようにします。
3. デッキを読み込みます。「ファイル」→「インポート」で`doom.apkg`を選びます。
4. DOOMのカードを開いて、起動ボタンを押します。

## 操作

WASDまたは矢印キー: 移動、Ctrl: 撃つ、Space: ドアなどを開ける、Shift: 走る

## 注意

- ノートに`Files`というフィールドがあります。ゲームのファイルをデッキに同梱するためのもので、消さないでください。
- このデッキには約28MBのメディアが含まれます。AnkiWebで同期する場合、上りの回線が遅いと時間がかかります。

## 同梱しているもの

- Chocolate Doom(GPL v2)をWebAssemblyにビルドしたもの
  ビルド元: https://github.com/OscarRevollo/doom-wasm (コミット b114de68a4ae4971803aeb1c6051f11c3a96c447)
- Freedoom Phase 2(修正BSDライセンス): https://freedoom.github.io/
- ランチャースクリプト`doom-launcher.js`と`addon/`内のアドオン: GPL v2

市販のDOOMのデータは含まれていません。ライセンス全文は、`LICENSE`と`licenses/`にあります。
