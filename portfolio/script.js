// 생년월일(1998년 11월 5일)을 기준으로 만 나이를 계산합니다.
function getAge() {
    const today = new Date();
    let age = today.getFullYear() - 1998;
    const birthday = new Date(today.getFullYear(), 10, 5); // 월은 0부터 시작하므로 10은 11월입니다.

    if (today < birthday) {
        age = age - 1;
    }

    return age;
}

// PROFILE, SKILLS, PROJECTS, CAREER 메뉴에서 열 상세 콘텐츠입니다.
// 각 항목의 html은 공통 팝업 안에 표시되고 lang은 기본 언어를 뜻합니다.
const portfolioContent = {
    // PROFILE: 소개, 인적 사항, 학력, 취미와 사진
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

    // SKILLS: 사용해 본 기술과 현재 학습 중인 기술
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

    // PROJECTS: 진행 중이거나 소개할 프로젝트
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

    // CAREER: 이전 경력과 현재 준비 과정
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

// 화면에서 사용할 HTML 요소를 변수에 저장합니다.
const modal = document.getElementById("portfolio-modal");
const modalPanel = modal.querySelector(".modal-panel");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeButton = modal.querySelector(".modal-close");
const photoViewer = document.getElementById("photo-viewer");
const viewerImage = photoViewer.querySelector(".photo-viewer-image");
const viewerCaption = photoViewer.querySelector(".photo-viewer-caption");
const main = document.querySelector(".business-card");
const cardPreview = document.querySelector(".card-preview");
const previewButton = document.querySelector(".card-preview-button");
const collapseButton = document.querySelector(".card-collapse");

let currentLanguage = "ja";
let lastFocusedButton = null;

// 번역 데이터에서 현재 언어에 맞는 문장을 찾습니다.
function translateText(text) {
    const cleanText = text.trim().replace(/\s+/g, " ");

    if (currentLanguage === "ja") {
        return text;
    }

    if (contentTranslations[cleanText] !== undefined) {
        return contentTranslations[cleanText];
    }

    return text;
}

// 요소 안에 있는 글자들을 선택한 언어로 바꿉니다.
function translateElement(element) {
    const childElements = element.querySelectorAll("*");

    // 현재 요소에 바로 들어 있는 글자를 바꿉니다.
    for (let i = 0; i < element.childNodes.length; i++) {
        const node = element.childNodes[i];

        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = translateText(node.textContent);
        }
    }

    // 안쪽에 포함된 요소들의 글자도 차례대로 바꿉니다.
    for (let i = 0; i < childElements.length; i++) {
        const childElement = childElements[i];

        for (let j = 0; j < childElement.childNodes.length; j++) {
            const node = childElement.childNodes[j];

            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = translateText(node.textContent);
            }
        }
    }
}

// 선택한 메뉴의 제목과 내용을 팝업에 표시합니다.
function showSection(sectionName) {
    const section = portfolioContent[sectionName];

    if (!section) {
        return;
    }

    const pageText = localeUI[currentLanguage];

    modalTitle.textContent = pageText.titles[sectionName];
    modalPanel.lang = currentLanguage;
    modalPanel.dataset.section = sectionName;
    modalBody.innerHTML = section.html;

    translateElement(modalBody);

    // 사진의 대체 문구도 현재 언어로 바꿉니다.
    const photos = modalBody.querySelectorAll("img[alt]");

    for (let i = 0; i < photos.length; i++) {
        photos[i].alt = translateText(photos[i].alt);
    }

    // 생년월일 문구에 현재 나이를 넣습니다.
    const ageText = modalBody.querySelector("[data-profile-age]");

    if (ageText) {
        ageText.textContent = getAge();
    }

    preparePhotoButtons();
}

// 페이지의 글자와 버튼을 선택한 언어로 바꿉니다.
function setLanguage(language) {
    const pageText = localeUI[language];

    if (!pageText) {
        return;
    }

    currentLanguage = language;

    document.documentElement.lang = language;
    document.title = pageText.pageTitle;

    document.querySelector(".preview-name").textContent = pageText.name;
    document.querySelector(".preview-role").textContent = pageText.role;
    document.querySelector(".card-open-hint").textContent = cardUI[language].open;
    previewButton.setAttribute("aria-label", cardUI[language].expand);
    collapseButton.textContent = cardUI[language].collapse;

    document.querySelector(".identity-caption").textContent = pageText.hello;
    document.querySelector(".identity h1").firstChild.textContent = pageText.name;
    document.querySelector(".identity-role").textContent = pageText.role;
    document.querySelector(".identity-description").innerHTML = pageText.description;
    document.querySelector(".learning-tag").textContent = pageText.learning;

    const headerLabel = document.querySelector(".header-label");
    headerLabel.firstChild.textContent = pageText.header + " ";
    headerLabel.querySelector("span").textContent = pageText.subheader;

    // 네 개의 메뉴 제목과 설명을 바꿉니다.
    const menuButtons = document.querySelectorAll(".menu-box");

    for (let i = 0; i < menuButtons.length; i++) {
        const sectionName = menuButtons[i].dataset.section;

        menuButtons[i].querySelector(".menu-title").textContent =
            pageText.labels[sectionName];
        menuButtons[i].querySelector(".menu-caption").textContent =
            pageText.captions[sectionName];
    }

    document.querySelector(".language-switcher").setAttribute("aria-label", pageText.language);
    document.querySelector(".identity").setAttribute("aria-label", pageText.identity);
    document.querySelector(".contents-menu").setAttribute("aria-label", pageText.menu);
    document.querySelector(".intro-area").setAttribute("aria-label", pageText.intro);

    document.querySelector(".eyebrow").textContent = pageText.direction;
    document.querySelector(".intro-title").innerHTML = pageText.slogan;
    document.querySelector(".intro-description").innerHTML = pageText.introDescription;
    document.querySelector(".contact-info h2").textContent = pageText.contact;
    document.querySelector(".contact-name").textContent = pageText.connect;
    document.querySelector(".contact-note").textContent = pageText.note;

    const translatedElements = document.querySelectorAll(
        ".identity, .intro-copy, .menu-caption, .contact-note"
    );

    for (let i = 0; i < translatedElements.length; i++) {
        translatedElements[i].lang = language;
    }

    const externalLinks = document.querySelectorAll('.contact-info a[target="_blank"]');

    for (let i = 0; i < externalLinks.length; i++) {
        const siteName = externalLinks[i].textContent.replace("↗", "").trim();
        externalLinks[i].setAttribute("aria-label", siteName + pageText.newTab);
    }

    // 선택한 언어 버튼만 눌린 상태로 표시합니다.
    const languageButtons = document.querySelectorAll("[data-language]");

    for (let i = 0; i < languageButtons.length; i++) {
        const isSelected = languageButtons[i].dataset.language === language;
        languageButtons[i].setAttribute("aria-pressed", isSelected);
    }

    closeButton.setAttribute("aria-label", pageText.close);
    photoViewer.lang = language;
    photoViewer.setAttribute("aria-label", pageText.photoViewer);
    photoViewer.querySelector(".photo-viewer-close")
        .setAttribute("aria-label", pageText.photoClose);

    // 팝업이 열려 있으면 그 안의 글자도 바로 다시 표시합니다.
    if (!modal.hidden) {
        showSection(modalPanel.dataset.section);
    }
}

// 각 언어 버튼을 누르면 페이지 언어를 바꿉니다.
const languageButtons = document.querySelectorAll("[data-language]");

for (let i = 0; i < languageButtons.length; i++) {
    languageButtons[i].addEventListener("click", function () {
        setLanguage(languageButtons[i].dataset.language);
    });
}

// 상세 내용의 사진을 누르면 크게 볼 수 있게 합니다.
function preparePhotoButtons() {
    const photos = modalBody.querySelectorAll(".profile-photo img, .activity-photo img");

    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        const button = document.createElement("button");

        button.type = "button";
        button.className = "photo-expand";
        button.setAttribute("aria-haspopup", "dialog");
        button.setAttribute(
            "aria-label",
            photo.alt + localeUI[currentLanguage].expand
        );

        photo.parentNode.insertBefore(button, photo);
        button.appendChild(photo);

        button.addEventListener("click", function () {
            viewerImage.src = photo.src;
            viewerImage.alt = photo.alt;

            const figure = photo.closest("figure");

            if (figure) {
                const caption = figure.querySelector("figcaption");

                if (caption) {
                    viewerCaption.textContent = caption.textContent;
                } else {
                    viewerCaption.textContent = photo.alt;
                }
            } else {
                viewerCaption.textContent = photo.alt;
            }

            photoViewer.showModal();
        });
    }
}

// 사진 확대 창을 닫습니다.
photoViewer.querySelector(".photo-viewer-close").addEventListener("click", function () {
    photoViewer.close();
});

// 사진 창 바깥쪽을 누르면 창을 닫습니다.
photoViewer.addEventListener("click", function (event) {
    if (event.target !== photoViewer) {
        return;
    }

    const dialogBounds = photoViewer.getBoundingClientRect();
    const clickedOutsideDialog =
        event.clientX < dialogBounds.left ||
        event.clientX > dialogBounds.right ||
        event.clientY < dialogBounds.top ||
        event.clientY > dialogBounds.bottom;

    if (clickedOutsideDialog) {
        photoViewer.close();
    }
});

// 사진 창을 닫으면 이전 사진 주소를 지웁니다.
photoViewer.addEventListener("close", function () {
    viewerImage.removeAttribute("src");
});

// 작은 명함을 누르면 전체 포트폴리오를 펼칩니다.
function expandCard() {
    main.hidden = false;
    main.inert = false;
    cardPreview.hidden = true;
    collapseButton.hidden = false;

    document.body.classList.remove("card-collapsed");
    document.body.classList.add("card-expanded");
    previewButton.setAttribute("aria-expanded", "true");

    document.querySelector(".language-switcher button").focus();
}

// 접기 버튼을 누르면 작은 명함으로 돌아갑니다.
function collapseCard() {
    if (!modal.hidden || photoViewer.open) {
        return;
    }

    main.hidden = true;
    main.inert = true;
    cardPreview.hidden = false;
    collapseButton.hidden = true;

    document.body.classList.remove("card-expanded");
    document.body.classList.add("card-collapsed");
    previewButton.setAttribute("aria-expanded", "false");
    previewButton.focus();
}

previewButton.addEventListener("click", expandCard);
collapseButton.addEventListener("click", collapseCard);

// 네 개 메뉴 중 하나를 누르면 해당 내용을 팝업에 엽니다.
const menuButtons = document.querySelectorAll(".menu-box");

for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", function () {
        const sectionName = menuButtons[i].dataset.section;

        lastFocusedButton = menuButtons[i];
        showSection(sectionName);

        modal.hidden = false;
        document.body.classList.add("modal-open");
        main.inert = true;
        modal.querySelector(".modal-scroll").scrollTop = 0;
        closeButton.focus();
    });
}

// 팝업을 닫고 원래 선택했던 메뉴로 돌아갑니다.
function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    main.inert = false;

    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
}

closeButton.addEventListener("click", closeModal);
modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);

// 페이지를 처음 열 때 기본 언어인 일본어를 적용합니다.
setLanguage(currentLanguage);

// Escape 키를 누르면 열린 창이나 포트폴리오를 닫습니다.
document.addEventListener("keydown", function (event) {
    if (photoViewer.open) {
        return;
    }

    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    } else if (event.key === "Escape" && !main.hidden) {
        collapseCard();
    }

    // Tab 키를 누를 때 키보드 초점이 팝업 안에 머물게 합니다.
    if (!modal.hidden && event.key === "Tab") {
        const focusableElements = modalPanel.querySelectorAll("button, a[href]");
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
});

// 화면 바깥을 클릭하면 펼쳐진 포트폴리오를 접습니다.
document.body.addEventListener("click", function (event) {
    if (event.target === document.body && !main.hidden) {
        collapseCard();
    }
});
