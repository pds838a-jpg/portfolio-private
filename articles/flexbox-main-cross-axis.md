---
title: "Flexboxの中央揃えは、縦と横より「軸」で考える"
emoji: "📐"
type: "tech"
topics: ["css", "html"]
published: true
---

Flexboxの整列で使う`justify-content`と`align-items`は、横方向と縦方向として覚えるより、主軸と交差軸で考える方が分かりやすい。`flex-direction`を変えると、その軸の向きも変わる。

Flexbox 정렬에 사용하는 `justify-content`와 `align-items`는 가로와 세로로 외우기보다 주축과 교차축으로 생각하는 편이 이해하기 쉽다. `flex-direction`을 바꾸면 축의 방향도 달라진다.

## まず親にdisplay: flexを書く

並べたい要素を一つの親要素で囲み、親に`display: flex`を指定する。親がフレックスコンテナー、その直接の子がフレックスアイテムになる。

나열할 요소를 하나의 부모 요소로 감싸고 부모에 `display: flex`를 지정한다. 부모는 플렉스 컨테이너, 바로 아래 자식은 플렉스 아이템이 된다.

```html
<div class="container">
  <div class="item">HTML</div>
  <div class="item">CSS</div>
  <div class="item">JavaScript</div>
</div>
```

```css
.container {
  display: flex;
  flex-direction: row;
  min-height: 240px;
  padding: 16px;
  gap: 12px;
  border: 2px solid #555;
}

.item {
  padding: 12px 20px;
  background-color: #eef5ff;
}
```

この例は、一般的な横書きのページで考える。`flex-direction: row`なので、主軸は横方向、交差軸は縦方向になる。

이 예제는 일반적인 가로쓰기 페이지를 기준으로 한다. `flex-direction: row`이므로 주축은 가로 방향, 교차축은 세로 방향이다.

## justify-contentは主軸方向

親に次の指定を加える。

부모에 다음 지정을 추가한다.

```css
.container {
  justify-content: center;
}
```

`justify-content`は主軸方向の整列を指定する。`row`の場合は、項目のまとまりが横方向の中央に配置される。

`justify-content`는 주축 방향의 정렬을 지정한다. `row`에서는 항목 묶음이 가로 방향의 중앙에 배치된다.

`space-between`なら、最初と最後の項目を両端に置き、項目の間に残りの空間を分配する。ただし、分配する空間が残っていることが必要になる。

`space-between`이면 첫 항목과 마지막 항목을 양 끝에 두고 남은 공간을 항목 사이에 나눈다. 다만 나누어 줄 여유 공간이 있어야 한다.

## align-itemsは交差軸方向

さらに、次の指定を加える。

이어서 다음 지정을 추가한다.

```css
.container {
  align-items: center;
}
```

`align-items`は交差軸方向の整列を指定する。今回の`row`では縦方向なので、項目が上下の中央に配置される。

`align-items`는 교차축 방향의 정렬을 지정한다. 이번 `row`에서는 세로 방향이므로 항목이 위아래 중앙에 배치된다.

上下の変化を見やすくするために、この例では親に`min-height: 240px`を付けている。親の高さが内容とほぼ同じなら、中央揃えにしても変化が分かりにくい。

세로 정렬의 변화를 보기 쉽도록 이 예제에서는 부모에 `min-height: 240px`를 지정했다. 부모 높이가 내용과 거의 같으면 중앙 정렬을 해도 변화가 잘 보이지 않을 수 있다.

## columnにすると役割が逆になる？

次に、並ぶ方向を変えてみる。

다음으로 나열 방향을 바꿔 본다.

```css
.container {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

`column`では主軸が縦方向、交差軸が横方向になる。プロパティの役割が変わるのではなく、整列の基準になる軸が変わっている。

`column`에서는 주축이 세로 방향, 교차축이 가로 방향이 된다. 속성의 역할이 바뀌는 것이 아니라 정렬 기준인 축이 달라지는 것이다.

| 指定 / 지정 | row | column |
| --- | --- | --- |
| justify-content | 横方向 / 가로 방향 | 縦方向 / 세로 방향 |
| align-items | 縦方向 / 세로 방향 | 横方向 / 가로 방향 |

だから「justify-contentは横」とだけ覚えると、縦に並べたときに分かりにくくなる。「justify-contentは主軸」と覚えておきたい。

그래서 ‘justify-content는 가로’라고만 외우면 세로 배치에서 헷갈리게 된다. ‘justify-content는 주축’으로 기억하려고 한다.

## 項目が入りきらないとき

折り返して並べたい場合は`flex-wrap: wrap`を指定する。

항목을 줄바꿈해서 배치하고 싶으면 `flex-wrap: wrap`을 지정한다.

```css
.container {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
}
```

`gap`は項目や行の間隔になる。複数行になった場合、各行の中の交差軸方向の整列は`align-items`、行全体の交差軸方向の配置は`align-content`で考える。`align-content`は`flex-wrap: nowrap`の単一行コンテナーでは効かない。

`gap`은 항목이나 줄 사이의 간격이다. 여러 줄이 되면 각 줄 내부의 교차축 정렬은 `align-items`, 줄 전체의 교차축 배치는 `align-content`로 생각한다. `align-content`는 `flex-wrap: nowrap`인 단일 줄 컨테이너에는 적용되지 않는다.

## 覚えておきたいこと

Flexboxで配置を確認するときは、まず`flex-direction`を見る。そのあと主軸と交差軸を確認して、どちらをそろえたいのか考える。

Flexbox 배치를 확인할 때는 먼저 `flex-direction`을 본다. 그다음 주축과 교차축을 확인하고 어느 방향을 정렬하려는지 생각한다.

同じHTMLで`row`と`column`を切り替えながら、`justify-content`と`align-items`の違いを復習してみたい。

같은 HTML에서 `row`와 `column`을 바꾸면서 `justify-content`와 `align-items`의 차이를 복습해 보려고 한다.
