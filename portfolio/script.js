// 이 부분의 문장을 수정하면 각 창의 내용이 바뀝니다.
function getAgeInKorea() {
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Seoul", year: "numeric", month: "numeric", day: "numeric"
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.map(({ type, value }) => [type, Number(value)]));
    return values.year - 1998 - (values.month < 11 || (values.month === 11 && values.day < 5) ? 1 : 0);
}

const portfolioContent = {
    profile: {
        title: "プロフィール",
        lang: "ja",
        html: `
            <div class="profile-summary">
                <div class="profile-photo">
                    <img src="images/profile.jpg" alt="キム テヒョンのプロフィール写真">
                </div>
                <p class="modal-intro">
                    <strong>学んだ技術を仕事に活かし、専門性を磨いてきたキム テヒョンです。</strong>
                    公務員として約4年、土木設計会社で約2年勤務し、組織で働く経験と実務スキルを身につけました。
                    現在は日本でエンジニアとして専門性を高めていくため、開発と日本語を学んでいます。
                </p>
            </div>

            <section class="detail-card profile-facts" aria-labelledby="profile-info-title">
                <h3 id="profile-info-title">基本情報</h3>
                <dl class="profile-info">
                    <div><dt>出身地</dt><dd>韓国・忠清北道 忠州市</dd></div>
                    <div><dt>現住所</dt><dd>ソウル · 2024年 – 現在</dd></div>
                    <div><dt>生年月日</dt><dd>1998年11月5日 · <span data-profile-age>27</span>歳</dd></div>
                </dl>
                <div class="profile-education-summary">
                    <h4>学歴</h4>
                    <div class="education-item">
                        <p class="career-period">2014 – 2017</p>
                        <h4>忠州高等学校</h4>
                        <p>理系</p>
                    </div>
                    <div class="education-item">
                        <p class="career-period">2017 – 2023</p>
                        <h4>忠北大学校 土木工学部</h4>
                        <p>学士 · 卒業</p>
                    </div>
                </div>
            </section>

            <section class="detail-card profile-career" aria-labelledby="career-summary-title">
                <h3 id="career-summary-title">職歴概要</h3>
                <div class="profile-career-summary">
                    <ul class="profile-career-list">
                        <li>
                            <span class="summary-period">2020.03 – 2024.04</span>
                            <strong>忠清北道 陰城郡庁</strong>
                            <span>地方公務員 · 技術職（土木）</span>
                        </li>
                        <li>
                            <span class="summary-period">2024.10 – 2026.07</span>
                            <strong>ホンイク技術団（韓国法人）</strong>
                            <span>水資源部 · 河川設計</span>
                        </li>
                    </ul>
                    <h4>現在の学習</h4>
                    <p><span class="summary-period">2026.08 – 現在</span>
                        <strong>グローバルイン（韓国法人）</strong><br>日本IT就職コース · 開発・日本語</p>
                </div>
            </section>

                <section class="detail-card profile-credentials" aria-labelledby="credentials-title">
                    <h3 id="credentials-title">保有資格</h3>
                    <ul class="credential-list">
                        <li>
                            <span class="summary-period">2022.11</span>
                            <strong>土木技師（韓国国家技術資格）</strong>
                            <span>最終合格 · 韓国産業人力公団</span>
                        </li>
                        <li>
                            <span class="summary-period">2022.12</span>
                            <strong>第1種普通運転免許（韓国）</strong>
                            <span>最終合格 · 韓国警察庁（運転免許試験管理団）</span>
                        </li>
                    </ul>
                </section>
                <section class="detail-card profile-languages" aria-labelledby="languages-title">
                    <h3 id="languages-title">語学試験の実績</h3>
                    <ul class="credential-list">
                        <li>
                            <span class="summary-period">2024.03</span>
                            <strong>G-TELP</strong>
                            <span>英語 · 83点 · PASS</span>
                        </li>
                        <li>
                            <span class="summary-period">2024.08</span>
                            <strong>TOEIC Speaking Test</strong>
                            <span>英語 · 140点 · Intermediate High · PASS</span>
                        </li>
                        <li>
                            <span class="summary-period">2026.09</span>
                            <strong>JLPT N3</strong>
                            <span>日本語 · 取得</span>
                        </li>
                    </ul>
                </section>

            <div class="detail-card">
                <h3>なぜ日本か · 旅行から生まれた目標</h3>
                <p>
                    日本を何度も旅行する中で、文化や暮らしに関心を持つようになりました。
                    旅行で訪れるだけでなく、現地で働きながら長く暮らしてみたいという目標が生まれました。
                    土木設計会社で働いていた時期に具体化したこの目標を実現するため、現在は開発と日本語を学んでいます。
                </p>
            </div>

            <div class="detail-card">
                <h3>なぜITか · 学びを専門性につなげる仕事</h3>
                <p>
                    新しい技術を学び、仕事に活かしながら専門性を高めることにやりがいを感じます。
                    公務員時代に関わった土木分野をより深く学ぶため、設計会社に転職しました。
                    CAD、ArcGIS、HEC-RASを学んで河川設計に活用する中で、技術習得のやりがいと自信を得ました。
                    この経験から、継続的な学習を実際の成果物につなげる開発の仕事に関心を持つようになりました。
                    日本で暮らすという目標と、技術を通じて専門性を磨きたいという思いから、IT分野への就職を目指しています。
                </p>
                <p>HTML・CSS・JavaScriptの基礎を学び、現在はJavaを学習中です。
                    今後はZennに学習内容を記録し、チーム・個人のプロジェクトで実装経験を積む予定です。
                    基礎から着実に学び、日本の職場で仲間と協力しながら成長していきたいと考えています。</p>
            </div>

            <section class="detail-card" aria-labelledby="hobby-title">
                <h3 id="hobby-title">趣味と生活習慣 · 心身を整える日々の積み重ね</h3>
                <div class="hobby-copy">
                    <div class="hobby-item">
                    <h4>旅行 · 新しい暮らしに触れる時間</h4>
                    <p>旅行でさまざまな文化や暮らしに触れることが好きです。特に日本への旅行は、現地で暮らしてみたいという目標を持つきっかけになりました。</p>
                    </div>
                    <div class="hobby-item">
                    <h4>筋力トレーニング · 小さな努力の積み重ね</h4>
                    <p>筋力トレーニングを通じて、継続した努力が変化につながることを実感しました。この経験が、新しい分野に挑戦する勇気をくれました。運動を続け、体力づくりとストレス解消に役立てています。</p>
                    </div>
                    <div class="hobby-item">
                    <h4>バドミントン · 体を動かしてリフレッシュ</h4>
                    <p>バドミントンも楽しみ、活動的に過ごしています。筋力トレーニングとともに、心と体のバランスを整える趣味です。</p>
                    </div>
                </div>
                <h4 class="activity-title">趣味の写真</h4>
                <p class="photo-note">現在は拡大表示を確認するためのテスト写真です。旅行・筋力トレーニング・バドミントンの写真に差し替える予定です。</p>
                <div class="activity-gallery">
                    <figure class="activity-item">
                        <div class="activity-photo">
                            <!-- 写真を追加する際は、下のspanをimgに置き換えてください。
                                 例：<img src="images/hobby-1.jpg" alt="活動の様子"> -->
                            <img src="images/hobby-1.jpg" alt="旅行写真の仮画像（テスト用の風景写真）">
                        </div>
                        <figcaption>旅行写真の仮画像 · テスト用</figcaption>
                    </figure>
                    <figure class="activity-item">
                        <div class="activity-photo">
                            <!-- 写真の例：<img src="images/hobby-2.jpg" alt="活動の様子"> -->
                            <img src="images/hobby-2.jpg" alt="筋力トレーニング写真の仮画像（テスト用の風景写真）">
                        </div>
                        <figcaption>筋力トレーニング写真の仮画像 · テスト用</figcaption>
                    </figure>
                    <figure class="activity-item">
                        <div class="activity-photo">
                            <!-- 写真の例：<img src="images/hobby-3.jpg" alt="活動の様子"> -->
                            <img src="images/hobby-3.jpg" alt="バドミントン写真の仮画像（テスト用の風景写真）">
                        </div>
                        <figcaption>バドミントン写真の仮画像 · テスト用</figcaption>
                    </figure>
                </div>
            </section>
        `
    },

    skills: {
        title: "SKILLS",
        html: `
            <p class="modal-intro">
                使用経験のある技術と、現在学習中の技術を紹介します。
            </p>

            <div class="detail-card">
                <h3>FRONTEND</h3>
                <p>実際に使用したことのある技術に合わせて、下のタグを編集してください。</p>
                <div class="tag-list">
                    <span class="tag">HTML</span>
                    <span class="tag">CSS</span>
                    <span class="tag">JavaScript</span>
                </div>
            </div>

            <div class="detail-card">
                <h3>BACKEND / TOOLS</h3>
                <p>学習中、またはプロジェクトで使用した言語やツールを記入してください。</p>
                <div class="tag-list">
                    <span class="tag">Java</span>
                    <span class="tag">VS Code</span>
                </div>
            </div>
        `
    },

    projects: {
        title: "PROJECTS",
        html: `
            <p class="modal-intro">
                チーム開発・個人開発のプロジェクトを準備中です。
            </p>

            <div class="detail-card">
                <h3>制作予定</h3>
                <p>プロジェクトが完成したら、制作内容や使用技術、担当した役割をここに追加する予定です。</p>
            </div>
        `
    },

    career: {
        title: "経歴と現在の取り組み",
        lang: "ja",
        html: `
            <p class="modal-intro">
                <strong>現場を確認し、丁寧に検討し、周囲と協力して解決してきました。</strong>
                公務員として約4年、土木設計会社で約2年勤務し、施設管理と設計の実務を経験しました。
                関係者との対話、資料の確認、新しい技術の習得で培った力を、開発の仕事にも活かしていきたいと考えています。
            </p>

            <div class="detail-card">
                <p class="career-period">2020.03 – 2024.04</p>
                <h3>忠清北道 陰城郡庁 · 地方公務員 技術職（土木）</h3>
                <p>忠北大学校在学中に地方公務員採用試験に合格し、2020年3月1日に任用されました。
                    約4年間、施設管理、事業の推進、設計業務委託および工事の監督を担当しました。</p>
                <div class="career-work-grid">
                    <div>
                        <h4>担当業務</h4>
                        <ul>
                            <li><strong>2020–2022 · 小規模水道施設の管理</strong><br>施設の維持補修、老朽管の更新事業</li>
                            <li><strong>2023–2024 · 小規模公共施設の管理</strong><br>住民の要望に基づく小規模整備事業、施設の安全点検</li>
                        </ul>
                    </div>
                    <div>
                        <h4>設計業務委託・工事の監督</h4>
                        <ul>
                            <li>実施設計業務の発注、設計会社との現地調査・協議</li>
                            <li>設計図面・数量計算書・工事費内訳書の資材、規格、単価、数量の整合性を確認</li>
                            <li>工事中の住民からの相談や変更事項に対し、現地確認と関係者協議を行い、自ら設計変更を実施</li>
                        </ul>
                    </div>
                </div>
                <p class="career-experience"><strong>協働と問題解決の経験</strong><br>
                    設計会社、施工会社、地域住民、チームメンバーと継続的に対話し、現場に合った解決策を調整しました。
                    試行錯誤を重ねながら事業を完了させ、設計から竣工までを監督する中で、業務全体の流れを理解しました。</p>
            </div>

            <div class="detail-card">
                <p class="career-period">2024.10 – 2026.07</p>
                <h3>ホンイク技術団（韓国法人） · 水資源部</h3>
                <p>約2年間、水資源部で河川計画、設計、調査業務を担当しました。
                    関連ソフトウェアを新たに学び、実務に活用しながら設計スキルを磨きました。</p>
                <div class="career-work-grid">
                    <div>
                        <h4>担当業務</h4>
                        <ul>
                            <li>河川基本計画</li>
                            <li>河川工事の実施設計</li>
                            <li>事業の実現可能性調査</li>
                            <li>小規模公共施設の実態調査</li>
                        </ul>
                    </div>
                    <div>
                        <h4>使用ツール</h4>
                        <div class="tag-list"><span class="tag">CAD</span><span class="tag">ArcGIS</span><span class="tag">HEC-RAS</span><span class="tag">EST</span></div>
                        <p>業務に必要なツールを学んで活用し、新しい業務環境に適応しました。</p>
                    </div>
                </div>
                <p class="career-experience"><strong>現場と設計の両方を捉える視点</strong><br>
                    公務員時代の現地確認や設計・工事監督の経験を活かし、
                    設計業務でも現場の状況と関係者の要望を考慮しながら業務を進めました。</p>
            </div>

            <div class="detail-card">
                <p class="career-period">2026.08 – 現在</p>
                <h3>グローバルイン（韓国法人） · 日本IT就職コース</h3>
                <p>目標を実際の準備につなげるため、2026年8月から日本IT就職スクールで開発と日本語を学んでいます。
                    HTML・CSS・JavaScriptの基礎を学び、現在はJavaを学習中です。</p>
                <p>チーム・個人のプロジェクトには今後取り組む予定です。Zennに学習内容をまとめながら、基礎を固めていきたいと考えています。</p>
            </div>

            <section class="detail-card" aria-labelledby="career-strengths">
                <h3 id="career-strengths">開発の仕事にも活かしたい強み</h3>
                <div class="strength-copy">
                    <h4>対話と協働 · 異なる立場を調整する</h4>
                    <p>設計会社、施工会社、地域住民、チームメンバーと協議しながら業務を進めました。開発チームでも相手の意見を聞き、要件を確認しながら一緒に解決する姿勢を大切にしたいと考えています。</p>
                    <h4>確認と問題解決 · 根拠を確かめて改善する</h4>
                    <p>図面・数量・内訳の整合性と現場への適合性を確認し、変更事項は現地確認と協議を経て反映しました。開発でも結果を丁寧に確認し、原因を探って修正する習慣を活かしていきます。</p>
                    <h4>学習と適応 · 学んだ技術を実務に活かす</h4>
                    <p>公的機関と設計会社の業務を経験し、CAD・ArcGIS・HEC-RAS・ESTを学んで実務に活用しました。現在は開発の基礎を学び、新しい技術を継続的に習得しています。</p>
                    <h4>責任感 · 試行錯誤を重ねてやり遂げる</h4>
                    <p>事業の途中で課題が生じた際は、チームメンバーや協力会社と対話して解決策を探し、事業を完了させました。今後も担当業務を確認・改善しながら、最後まで取り組む姿勢を大切にしていきます。</p>
                </div>
            </section>
        `
    }
};

const modal = document.getElementById("portfolio-modal");
const modalPanel = modal.querySelector(".modal-panel");
const modalScroll = modal.querySelector(".modal-scroll");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeButton = modal.querySelector(".modal-close");
const photoViewer = document.getElementById("photo-viewer");
const viewerImage = photoViewer.querySelector(".photo-viewer-image");
const viewerCaption = photoViewer.querySelector(".photo-viewer-caption");
let currentLanguage = "ja";
try {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (Object.hasOwn(localeUI, savedLanguage)) currentLanguage = savedLanguage;
} catch { /* 저장소를 사용할 수 없는 환경에서도 언어 전환은 동작합니다. */ }

function translateText(value) {
    if (currentLanguage === "ja") return value;
    const normalized = value.trim().replace(/\s+/g, " ");
    return contentTranslations[normalized]?.[currentLanguage] ?? value;
}

const furiganaReadings = {
    "忠清北道": "チュンチョンブクト",
    "忠州市": "チュンジュし",
    "陰城郡庁": "ウムソンぐんちょう",
    "忠州高等学校": "チュンジュこうとうがっこう",
    "忠北大学校": "チュンブクだいがっこう",
    "土木工学部": "どぼくこうがくぶ",
    "土木技師": "どぼくぎし",
    "韓国産業人力公団": "かんこくさんぎょうじんりょくこうだん",
    "専門性": "せんもんせい",
    "習得": "しゅうとく",
    "培った": "つちかった",
    "任用": "にんよう",
    "実施設計": "じっしせっけい",
    "設計業務委託": "せっけいぎょうむいたく",
    "維持補修": "いじほしゅう",
    "老朽管": "ろうきゅうかん",
    "竣工": "しゅんこう",
    "数量計算書": "すうりょうけいさんしょ",
    "工事費内訳書": "こうじひうちわけしょ",
    "整合性": "せいごうせい",
    "適合性": "てきごうせい",
    "協議": "きょうぎ",
    "協働": "きょうどう",
    "河川": "かせん",
    "水資源部": "みずしげんぶ",
    "実態調査": "じったいちょうさ",
    "責任感": "せきにんかん",
    "試行錯誤": "しこうさくご",
    "根拠": "こんきょ",
    "磨いて": "みがいて",
    "磨きたい": "みがきたい",
    "磨きました": "みがきました"
};
const furiganaPattern = new RegExp(Object.keys(furiganaReadings).sort((a, b) => b.length - a.length).join("|"), "g");

function removeFurigana(root) {
    root.querySelectorAll("ruby[data-furigana]").forEach((ruby) => {
        ruby.replaceWith(document.createTextNode(ruby.firstChild.textContent));
    });
    root.normalize();
}

function addFurigana(root) {
    if (currentLanguage !== "ja") return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
        if (!node.parentElement.closest("ruby, script, style")) nodes.push(node);
    }
    nodes.forEach((textNode) => {
        const text = textNode.textContent;
        const matches = [...text.matchAll(furiganaPattern)];
        if (!matches.length) return;
        const fragment = document.createDocumentFragment();
        let end = 0;
        matches.forEach((match) => {
            fragment.append(document.createTextNode(text.slice(end, match.index)));
            const ruby = document.createElement("ruby");
            ruby.dataset.furigana = "true";
            ruby.append(document.createTextNode(match[0]));
            const reading = document.createElement("rt");
            reading.textContent = furiganaReadings[match[0]];
            ruby.append(reading);
            fragment.append(ruby);
            end = match.index + match[0].length;
        });
        fragment.append(document.createTextNode(text.slice(end)));
        textNode.replaceWith(fragment);
    });
}

function renderModalContent(section) {
    const content = portfolioContent[section];
    if (!content) return;
    modalTitle.textContent = localeUI[currentLanguage].titles[section];
    modalPanel.lang = currentLanguage;
    modalPanel.dataset.section = section;
    modalBody.innerHTML = content.html;
    const walker = document.createTreeWalker(modalBody, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        if (node.textContent.trim()) node.textContent = translateText(node.textContent);
    }
    modalBody.querySelectorAll("img[alt]").forEach((photo) => {
        photo.alt = translateText(photo.alt);
    });
    const ageLabel = modalBody.querySelector("[data-profile-age]");
    if (ageLabel) ageLabel.textContent = getAgeInKorea();
    preparePhotoButtons();
    addFurigana(modalBody);
}

function setLanguage(language) {
    if (!Object.hasOwn(localeUI, language)) return;
    removeFurigana(document.querySelector(".business-card"));
    currentLanguage = language;
    const ui = localeUI[language];
    document.querySelector(".preview-name").textContent = ui.name;
    document.querySelector(".preview-role").textContent = ui.role;
    document.querySelector(".card-open-hint").textContent = cardUI[language].open;
    document.querySelector(".card-preview-button").setAttribute("aria-label", cardUI[language].expand);
    document.querySelector(".card-collapse").textContent = cardUI[language].collapse;
    document.documentElement.lang = language;
    document.title = ui.pageTitle;
    document.querySelectorAll(".identity, .intro-copy, .menu-caption, .contact-note").forEach((element) => {
        element.lang = language;
    });
    document.querySelector(".language-switcher").setAttribute("aria-label", ui.language);
    document.querySelectorAll("[data-language]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    document.querySelector(".identity").setAttribute("aria-label", ui.identity);
    document.querySelector(".contents-menu").setAttribute("aria-label", ui.menu);
    document.querySelector(".intro-area").setAttribute("aria-label", ui.intro);
    document.querySelector(".identity-caption").textContent = ui.hello;
    const nameHeading = document.querySelector(".identity h1");
    nameHeading.firstChild.textContent = ui.name;
    document.querySelector(".identity-role").textContent = ui.role;
    document.querySelector(".identity-description").innerHTML = ui.description;
    document.querySelector(".learning-tag").textContent = ui.learning;
    const headerLabel = document.querySelector(".header-label");
    headerLabel.firstChild.textContent = ui.header + " ";
    headerLabel.querySelector("span").textContent = ui.subheader;
    document.querySelectorAll(".menu-box").forEach((button) => {
        const section = button.dataset.section;
        button.querySelector(".menu-title").textContent = ui.labels[section];
        button.querySelector(".menu-caption").textContent = ui.captions[section];
    });
    document.querySelector(".eyebrow").textContent = ui.direction;
    document.querySelector(".intro-title").innerHTML = ui.slogan;
    document.querySelector(".intro-description").innerHTML = ui.introDescription;
    document.querySelector(".contact-info h2").textContent = ui.contact;
    document.querySelector(".contact-name").textContent = ui.connect;
    document.querySelector(".contact-note").textContent = ui.note;
    document.querySelectorAll('.contact-info a[target="_blank"]').forEach((link) => {
        const site = link.textContent.replace("↗", "").trim();
        link.setAttribute("aria-label", site + ui.newTab);
    });
    closeButton.setAttribute("aria-label", ui.close);
    photoViewer.lang = language;
    photoViewer.setAttribute("aria-label", ui.photoViewer);
    photoViewer.querySelector(".photo-viewer-close").setAttribute("aria-label", ui.photoClose);
    if (!modal.hidden) renderModalContent(modalPanel.dataset.section);
    addFurigana(document.querySelector(".business-card"));
    try { localStorage.setItem("portfolio-language", language); } catch { /* 선택은 현재 페이지에서 유지됩니다. */ }
}

document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
});

function preparePhotoButtons() {
    modalBody.querySelectorAll(".profile-photo img, .activity-photo img").forEach((photo) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "photo-expand";
        const ui = localeUI[currentLanguage];
        button.setAttribute("aria-label", `${photo.alt || ui.photo}${ui.expand}`);
        button.setAttribute("aria-haspopup", "dialog");
        photo.replaceWith(button);
        button.append(photo);
        button.addEventListener("click", () => {
            viewerImage.src = photo.dataset.fullSrc || photo.currentSrc || photo.src;
            viewerImage.alt = photo.alt;
            viewerCaption.textContent = photo.closest("figure")?.querySelector("figcaption")?.textContent || photo.alt;
            photoViewer.showModal();
        });
    });
}

photoViewer.querySelector(".photo-viewer-close").addEventListener("click", () => photoViewer.close());
photoViewer.addEventListener("click", (event) => {
    if (event.target !== photoViewer) return;
    const bounds = photoViewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) photoViewer.close();
});
photoViewer.addEventListener("close", () => {
    viewerImage.removeAttribute("src");
});

const main = document.querySelector(".business-card");
const cardPreview = document.querySelector(".card-preview");
const previewButton = document.querySelector(".card-preview-button");
const collapseButton = document.querySelector(".card-collapse");
let lastFocusedButton = null;

function expandCard() {
    main.hidden = false;
    main.inert = false;
    cardPreview.hidden = true;
    collapseButton.hidden = false;
    document.body.classList.remove("card-collapsed");
    document.body.classList.add("card-expanded");
    previewButton.setAttribute("aria-expanded", "true");
    main.querySelector("[data-language]").focus({preventScroll:true});
}

function collapseCard() {
    if (!modal.hidden || photoViewer.open) return;
    main.hidden = true;
    main.inert = true;
    cardPreview.hidden = false;
    collapseButton.hidden = true;
    document.body.classList.remove("card-expanded");
    document.body.classList.add("card-collapsed");
    previewButton.setAttribute("aria-expanded", "false");
    previewButton.focus({preventScroll:true});
}

previewButton.addEventListener("click", expandCard);
collapseButton.addEventListener("click", collapseCard);
document.body.addEventListener("click", (event) => {
    if (event.target === document.body && !main.hidden) collapseCard();
});

document.querySelectorAll(".menu-box").forEach((button) => {
    button.addEventListener("click", () => {
        if (!portfolioContent[button.dataset.section]) return;

        lastFocusedButton = button;
        renderModalContent(button.dataset.section);

        modal.hidden = false;
        document.body.classList.add("modal-open");
        main.inert = true;
        modalScroll.scrollTop = 0;
        closeButton.focus({ preventScroll: true });
    });
});

function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    main.inert = false;
    lastFocusedButton?.focus({ preventScroll: true });
}

closeButton.addEventListener("click", closeModal);
modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);
setLanguage(currentLanguage);

document.addEventListener("keydown", (event) => {
    if (photoViewer.open) return;
    if (modal.hidden) {
        if (event.key === "Escape" && !main.hidden) {
            event.preventDefault();
            collapseCard();
        }
        return;
    }

    if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
    }

    // Tab 키를 눌러도 키보드 포커스가 열린 창 안에 머물도록 합니다.
    if (event.key === "Tab") {
        const focusable = [...modalPanel.querySelectorAll('button, a[href], input, textarea, select, [tabindex]')];
        const available = focusable.filter((element) =>
            !element.disabled && element.tabIndex >= 0 && element.getClientRects().length > 0
        );
        const first = available[0];
        if (!first) {
            event.preventDefault();
            modalPanel.focus();
            return;
        }
        const last = available[available.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});
