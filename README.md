## AMD 製 CPU でのエミュレーター起動方法

### コマンドラインから起動

- SDK のエミュレーターディレクトリをカレントディレクトリにする。
- `C:\Users\sonob\AppData\Local\Android\Sdk\emulator>`
- エミュレーター一覧を取得する。
- `$ emulator -list-avds`
- エミュレーターを指定して起動する。ハードウェアアクセラレータが使用できない場合-gpu でソフトウェアアクセラレータを指定する。
- `$ emulator -avd {avd名}`
- 例：`$ emulator -avd Pixel_7_Pro_API_34 -gpu swiftshader_indirect`
- 例：`$ emulator -avd Pixel_7_Pro_API_34 -gpu guest`(ゲスト側のソフトウェア レンダリングを使用。このオプションの場合、エミュレータのグラフィック品質とパフォーマンスが最も低くなる。)
  ※ヘルプは`$ emulator --help`
  ※使用するアクセラレータに関しては Android 公式ドキュメント：https://developer.android.com/studio/run/emulator-acceleration?hl=ja#avd-gpu

## React Native での開発

### 実機デバッグ

必要なもの。

- SDK。windows の場合パスは`C:\Users\sonob\AppData\Local\Android\Sdk`。

手順

- PC との接続デバイスに USB デバッグ許可を出す。
- PC 側でコマンドプロンプトを開き、`C:\Users\sonob\AppData\Local\Android\Sdk\platform-tools`をカレントディレクトリにする。
- `$ adb devices`で接続デバイスを確認。
- unauthorized である場合、`$ adb kill-server`、`$ adb start-server`で再起動する。
- 再起動後、device になっていれば OK。
- コマンドプロンプトをもう一つ開き、create-react-native-app で作成した React Native プロジェクトのディレクトリに移動する。
- `$ npm start`（`$ npm run expo start --dev-client`）を実行。
- 起動後に「s」を押下し、Expo Go で実行できるよう切り替える。
- 「a」を押下し、実機で起動する。

その他

- 対象デバイスで VPN に接続していると Expo でのデバッグ時に接続エラー（タイムアウト）となるため VPN を切断する。

### エミュレーターでデバッグ

- コマンドプロンプトを開いて`$ create-react-native-app {アプリ名}`で生成したアプリのディレクトリに移動する。
- `$ npm expo start --dev-client`（package.json の script で start と指定されている場合`$ npm start`）でアプリをビルド。
- 「s」を押下し、「Expo Go」に切り替えて Expo でデバッグする。
- 別のコマンドプロンプトでエミュレーターを起動する。「AMD 製 CPU でのエミュレーター起動方法」を参照。
- エミュレーターが起動したら、アプリを起動しているコマンドプロンプトにて「a」を押下し、エミュレーターにてアプリを起動する。

### WebView

- Web ページの URL を埋め込んでアプリ上で Web ページを表示する。 -`$ npm install react-native-webview`
- `import { WebView } from 'react-native-webview';`
