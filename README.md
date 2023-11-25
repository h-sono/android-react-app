## AMD製CPUでのエミュレーター起動方法
### コマンドラインから起動
- SDKのエミュレーターディレクトリをカレントディレクトリにする。
- ```C:\Users\sonob\AppData\Local\Android\Sdk\emulator>```
- エミュレーター一覧を取得する。
- ```$ emulator -list-avds```
- エミュレーターを指定して起動する。ハードウェアアクセラレータが使用できない場合-gpuでソフトウェアアクセラレータを指定する。
- ```$ emulator -avd {avd名}```
- 例：```$ emulator -avd Pixel_7_Pro_API_34 -gpu swiftshader_indirect```
- 例：```$ emulator -avd Pixel_7_Pro_API_34 -gpu guest```(ゲスト側のソフトウェア レンダリングを使用。このオプションの場合、エミュレータのグラフィック品質とパフォーマンスが最も低くなる。)
※ヘルプは```$ emulator --help```
※使用するアクセラレータに関してはAndroid公式ドキュメント：https://developer.android.com/studio/run/emulator-acceleration?hl=ja#avd-gpu

## React Nativeでの開発
### 実機デバッグ
必要なもの。
- SDK。windowsの場合パスは```C:\Users\sonob\AppData\Local\Android\Sdk```。

手順
- PCとの接続デバイスにUSBデバッグ許可を出す。
- PC側でコマンドプロンプトを開き、```C:\Users\sonob\AppData\Local\Android\Sdk\platform-tools```をカレントディレクトリにする。
- ```$ adb devices```で接続デバイスを確認。
- unauthorizedである場合、```$ adb kill-server```、```$ adb start-server```で再起動する。
- 再起動後、deviceになっていればOK。
- コマンドプロンプトをもう一つ開き、create-react-native-appで作成したReact Nativeプロジェクトのディレクトリに移動する。
- ```$ npm start```（```$ npm run expo start --dev-client```）を実行。
- 起動後に「s」を押下し、Expo Goで実行できるよう切り替える。
- 「a」を押下し、実機で起動する。

### エミュレーターでデバッグ
- コマンドプロンプトを開いて```$ create-react-native-app {アプリ名}```で生成したアプリのディレクトリに移動する。
- ```$ npm expo start --dev-client```（package.jsonのscriptでstartと指定されている場合```$ npm start```）でアプリをビルド。
- 「s」を押下し、「Expo Go」に切り替えてExpoでデバッグする。
- 別のコマンドプロンプトでエミュレーターを起動する。「AMD製CPUでのエミュレーター起動方法」を参照。
- エミュレーターが起動したら、アプリを起動しているコマンドプロンプトにて「a」を押下し、エミュレーターにてアプリを起動する。
