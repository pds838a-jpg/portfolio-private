# HTMLの続きとCSSを復習

前回はHTMLの基本構造を整理したので、今回はその続きからCSSまでを復習してみようと思う。保存してある授業のファイルを見ながら、タグの使い方やページの見た目を変える方法をまとめておく。

## HTMLで内容を入れる

HTMLでは、内容に合わせてタグを選ぶ。見出しは`h1`〜`h6`、段落は`p`、順序のない一覧は`ul`、順序のある一覧は`ol`を使う。一覧の一つひとつの項目は`li`で囲む。

```html
<h1>공부할 내용</h1>
<p>웹 페이지를 만드는 방법을 복습하고 있습니다.</p>
<ul>
  <li>HTML로 내용 넣기</li>
  <li>CSS로 모양 바꾸기</li>
</ul>
```

見出しの数字は、文字をどれくらい大きくするかではなく、内容の階層で考える。文字の大きさはCSSでも変えられる。`strong`は重要な内容、`em`は強調を表す。

表は`table`の中に行の`tr`を書き、その中に見出しセルの`th`やデータセルの`td`を入れる。`rowspan`は行方向、`colspan`は列方向にセルをまとめるときに使う。

ページ全体のまとまりには`header`、`nav`、`main`、`section`、`footer`なども使える。何でも`div`にするより、どんな役割の部分なのかを考えてタグを選んでおきたい。

## 画像とリンク、入力欄

画像は`img`、リンクは`a`で入れる。`src`は画像の場所、`href`はリンク先を指定する。画像の`alt`には、画像の内容や役割が伝わる文章を書く。装飾だけの画像なら空にできる。

```html
<img src="images/study.jpg" alt="책상 위에 펼쳐 놓은 HTML 교재">
<a href="review.html">복습 페이지 보기</a>
```

この例の`images/study.jpg`は、HTMLファイルから見た画像の場所になる。画像が表示されないときは、ファイル名だけでなくフォルダーの位置も確認する。音声や動画には`audio`や`video`を使い、`controls`を付けると再生操作が表示される。

入力フォームでは`form`、`input`、`select`、`textarea`などを使う。`input`は`type`によって文字入力、チェックボックス、ラジオボタンなどに変わる。

```html
<label for="name">이름</label>
<input type="text" id="name" name="name" required>
```

`label`の`for`と`input`の`id`を同じにすると、ラベルと入力欄がつながる。`name`は送信するデータの項目名。`required`で必須入力にできるけれど、入力欄を作るだけでデータが保存されるわけではない。

## CSSで見た目を変える

HTMLで内容を入れたら、CSSで色や大きさ、余白などを指定する。基本の形は「セレクターに対して、プロパティと値を書く」と覚えておく。

```css
p {
  color: #333;
  font-size: 16px;
  line-height: 1.7;
}
```

この例では段落の文字色、大きさ、行間を指定している。文字の種類は`font-family`、太さは`font-weight`、配置は`text-align`で変えられる。

CSSはHTMLの`style`属性や`style`要素にも書ける。別のファイルにまとめる場合は、`head`の中で読み込む。

```html
<link rel="stylesheet" href="style.css">
```

セレクターには`p`のような要素名のほかに、`.クラス名`や`#ID名`がある。複数の指定が重なったときは、いつでも最後の指定が勝つわけではない。同じ出所・レイヤー・重要度などの条件なら、詳細度が高い指定が優先され、詳細度も同じなら後の指定が使われる。

親の文字色などを子が引き継ぐこともある。ただし、余白や幅まで全部引き継ぐわけではない。CSSが思ったように反映されないときは、クラス名や読み込み先と、どの指定が実際に使われているかを確認したい。

## paddingとmarginを分けて覚える

要素の箱は、内容、内側の余白、枠線、外側の余白に分けて考える。`padding`は内容と枠線の間、`margin`は枠線の外側。

```css
.card {
  width: 200px;
  padding: 20px;
  border: 2px solid #ccc;
  margin: 16px;
  box-sizing: border-box;
}
```

`box-sizing: border-box`なら、200pxの中にpaddingとborderを含める。`content-box`なら内容だけが200pxになり、この例では枠までの幅が244pxになる。marginはどちらの場合も幅に含まれない。

角を丸くするには`border-radius`、影には`box-shadow`を使う。背景の色や画像は`background`関連のプロパティで指定でき、グラデーションも使える。背景画像の`cover`は領域を埋めるので一部が切れることがあり、`contain`は画像全体が収まる代わりに余白ができることがある。

## 要素を並べる

`display`で表示や並べ方を変えられる。位置を指定する`position`では、`relative`は元の位置を基準にずらし、`absolute`は通常の流れから外して配置する。基本例では親に`position: relative`を付けて、子の配置の基準を作る。

`fixed`は画面に固定する配置、`sticky`はスクロールに応じて指定位置にとどまる配置として整理しておく。`float`は画像などの周りに文章を回り込ませるときに使い、解除には`clear`を使う。

Flexboxでは、一方向に並べることを基本に考える。`flex-direction`で主軸を決め、`justify-content`で主軸方向、`align-items`で交差軸方向をそろえる。縦に並べるときと横に並べるときで、軸の向きが変わる点を覚えておきたい。

```css
.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
```

`flex-wrap`は折り返し、`gap`は要素同士の間隔。行と列を組み合わせて並べるならGridを使える。

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
```

この例は3列に分ける指定。`repeat()`で繰り返し、`fr`で利用可能な余白を分配する。FlexboxとGridはどちらか一つだけを使うものではなく、並べたい内容に合わせて考える。

## 画面の幅に合わせる

パソコンで見たときだけでなく、狭い画面でも読めるようにしたい。画面の幅に応じてCSSを変えるにはメディアクエリーを使う。

```css
@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

先ほどの3列を、600px以下では1列に変える例になる。HTMLの`head`にはviewportの設定も入れておく。

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

単位では、`rem`はルート要素の文字サイズが基準。`em`は使う場所によって基準が変わり、`font-size`では親の文字サイズが基準になる。画像は`max-width: 100%`と`height: auto`で親の幅を超えないようにできる。大きさの決まった枠に収める場合は`object-fit`も使える。

## 細かい指定と動き

`.card p`はcardの中の子孫の段落、`.card > p`は直接の子の段落を選ぶ。兄弟を選ぶ`+`や`~`、属性を指定して選ぶセレクターもある。

`:hover`はマウスを重ねた状態、`:nth-child()`は並び順などで選ぶ疑似クラス。`::before`や`::after`は疑似要素で、装飾を足すときなどに使う。

CSSの関数には計算する`calc()`、値を比較する`min()`や`max()`、最小値・目安・最大値を指定する`clamp()`もある。`filter`ではぼかしや明るさなどを変えられる。

動きを付けるところでは、`transform`、`transition`、`animation`を分けて覚える。`transform`は移動・回転・拡大縮小などの変形。`transition`は状態が変わったときの変化を滑らかにする。

```css
button {
  transition: transform 0.2s ease;
}

button:hover,
button:focus-visible {
  transform: translateY(-2px);
}
```

この例では、ボタンにマウスを重ねたりキーボードでフォーカスしたりすると、少し上に動く。`transform`で動かしても、周囲の要素の通常の配置が組み直されるわけではない。

`animation`では`@keyframes`で途中の変化も指定できる。移動の`translate()`、回転の`rotate()`、拡大縮小の`scale()`、傾斜の`skew()`と、3Dの見え方に関わる`perspective`も整理しておく。

```css
.marker {
  animation: slide 1s ease-in-out;
}

@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(24px); }
}
```

## 覚えておきたいこと

HTMLは内容と構造、CSSは見た目と配置、と分けて考える。CSSの名前を一度に全部覚えるより、まずは余白や並び方を変えて、どこが変わるのかを確認していきたい。

特にpaddingとmargin、Flexboxの軸、画面が狭くなったときの配置は、コードと表示を見比べながら復習しようと思う。変更したら保存して、ブラウザーを再読み込みするところも忘れないようにしたい。

