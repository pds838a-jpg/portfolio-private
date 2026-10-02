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
        title: "프로필",
        lang: "ko",
        html: `
            <div class="profile-summary">
                <div class="profile-photo">
                    <!-- 실제 프로필 사진이 준비되면 images/profile.jpg를 교체해 주세요. -->
                    <img src="images/profile.jpg" alt="테스트용 고양이 사진">
                </div>
                <p class="modal-intro">
                    <strong>배운 기술을 일에 활용하며, 전문성을 쌓아 온 김태형입니다.</strong>
                    공무원으로 약 4년, 토목설계회사에서 약 2년간 근무하며 조직 경험과 실무 역량을 쌓았습니다.
                    현재는 일본에서 개발자로 일하며 전문성을 이어 가기 위해 개발과 일본어를 공부하고 있습니다.
                </p>
            </div>

            <section class="detail-card profile-facts" aria-labelledby="profile-info-title">
                <h3 id="profile-info-title">기본 정보</h3>
                <dl class="profile-info">
                    <div><dt>출신지</dt><dd>충청북도 충주시</dd></div>
                    <div><dt>현재 거주지</dt><dd>서울 · 2024년 – 현재</dd></div>
                    <div><dt>생년월일</dt><dd>1998년 11월 5일 · 만 <span data-profile-age>27</span>세</dd></div>
                </dl>
                <div class="profile-education-summary">
                    <h4>학력</h4>
                    <div class="education-item">
                        <p class="career-period">2014 – 2017</p>
                        <h4>충주고등학교</h4>
                    </div>
                    <div class="education-item">
                        <p class="career-period">2017 – 2023</p>
                        <h4>충북대학교 토목공학부</h4>
                        <p>학사 · 졸업</p>
                    </div>
                </div>
            </section>

            <section class="detail-card profile-career" aria-labelledby="career-summary-title">
                <h3 id="career-summary-title">경력 요약</h3>
                <div class="profile-career-summary">
                    <ul class="profile-career-list">
                        <li>
                            <span class="summary-period">2020.03 – 2024.04</span>
                            <strong>충북 음성군청</strong>
                            <span>지방공무원 · 시설직</span>
                        </li>
                        <li>
                            <span class="summary-period">2024.10 – 2026.07</span>
                            <strong>(주)홍익기술단</strong>
                            <span>수자원부 · 하천설계</span>
                        </li>
                    </ul>
                    <h4>현재 학습</h4>
                    <p><span class="summary-period">2026.08 – 현재</span>
                        <strong>(주)글로벌인</strong><br>일본 IT 취업 과정 · 개발 및 일본어</p>
                </div>
            </section>

                <section class="detail-card profile-credentials" aria-labelledby="credentials-title">
                    <h3 id="credentials-title">자격증</h3>
                    <ul class="credential-list">
                        <li>
                            <span class="summary-period">2022.11</span>
                            <strong>토목기사</strong>
                            <span>최종합격 · 한국산업인력공단</span>
                        </li>
                        <li>
                            <span class="summary-period">2022.12</span>
                            <strong>1종보통운전면허</strong>
                            <span>최종합격 · 경찰청(운전면허시험관리단)</span>
                        </li>
                    </ul>
                </section>
                <section class="detail-card profile-languages" aria-labelledby="languages-title">
                    <h3 id="languages-title">어학 시험 이력</h3>
                    <ul class="credential-list">
                        <li>
                            <span class="summary-period">2024.03</span>
                            <strong>G-TELP</strong>
                            <span>영어 · 83점 · PASS</span>
                        </li>
                        <li>
                            <span class="summary-period">2024.08</span>
                            <strong>TOEIC Speaking Test</strong>
                            <span>영어 · 140점 · Intermediate High · PASS</span>
                        </li>
                        <li>
                            <span class="summary-period">2026.09</span>
                            <strong>JLPT N3</strong>
                            <span>일본어 · 취득</span>
                        </li>
                    </ul>
                </section>

            <div class="detail-card">
                <h3>왜 일본인가 · 여행에서 시작된 관심</h3>
                <p>
                    일본을 여러 차례 여행하며 문화와 생활에 관심을 갖게 되었습니다.
                    여행으로 잠시 방문하는 것을 넘어, 현지에서 일하며 장기적으로 생활해 보고 싶다는 목표가 생겼습니다.
                    토목설계회사에서 근무하던 중 구체화된 이 목표를 실천하기 위해, 지금은 개발과 일본어를 함께 배우고 있습니다.
                </p>
            </div>

            <div class="detail-card">
                <h3>왜 IT인가 · 배움을 전문성으로 쌓는 일</h3>
                <p>
                    저는 새로운 기술을 배우고, 익힌 것을 업무에 활용하며 전문성을 쌓는 과정에 보람을 느낍니다.
                    공무원 시절 접한 토목 분야를 더 깊이 배우고 싶어 설계회사로 이직했고,
                    CAD, ArcGIS, HEC-RAS를 배우고 하천설계 업무에 활용하며 기술을 익히는 보람과 자신감을 얻었습니다.
                    이 경험을 바탕으로, 지속적인 학습을 실제 결과물로 이어 가는 개발 분야에 관심을 갖게 되었습니다.
                    일본에서의 생활이라는 목표와 기술을 통해 전문성을 쌓고 싶은 마음이 만나 IT 취업을 준비하게 되었습니다.
                </p>
                <p>현재는 HTML·CSS·JavaScript 기초를 배운 뒤 Java를 학습하고 있습니다.
                    앞으로 Zenn에 학습 내용을 기록하고, 팀·개인 프로젝트를 통해 직접 구현하는 경험을 쌓을 계획입니다.
                    개발자로서 기초부터 차근차근 익히며, 일본의 조직 안에서 동료와 협력하고 꾸준히 성장하고자 합니다.</p>
            </div>

            <section class="detail-card" aria-labelledby="hobby-title">
                <h3 id="hobby-title">취미와 생활 습관 · 꾸준히 몸과 마음을 돌보기</h3>
                <div class="hobby-copy">
                    <div class="hobby-item">
                    <h4>여행 · 새로운 일상을 만나는 시간</h4>
                    <p>여행을 통해 다른 문화와 생활을 접하는 것을 좋아합니다. 특히 일본 여행은 현지에서 살아 보고 싶다는 목표를 갖게 된 계기입니다.</p>
                    </div>
                    <div class="hobby-item">
                    <h4>헬스 · 작은 노력을 꾸준히 쌓기</h4>
                    <p>헬스를 하며 꾸준한 노력이 변화로 이어지는 경험을 했습니다. 이 경험은 새로운 분야에도 도전해 볼 수 있다는 용기를 주었습니다. 운동을 이어 가며 체력을 관리하고 스트레스를 해소하고 있습니다.</p>
                    </div>
                    <div class="hobby-item">
                    <h4>배드민턴 · 몸을 움직이며 기분 전환하기</h4>
                    <p>배드민턴도 즐기며 활동적으로 시간을 보냅니다. 헬스와 함께 몸과 마음의 균형을 유지하는 취미입니다.</p>
                    </div>
                </div>
                <h4 class="activity-title">취미 사진</h4>
                <p class="photo-note">현재는 확대 기능 확인을 위한 테스트 사진입니다. 여행·헬스·배드민턴 사진으로 교체할 예정입니다.</p>
                <div class="activity-gallery">
                    <figure class="activity-item">
                        <div class="activity-photo">
                            <!-- 写真を追加する際は、下のspanをimgに置き換えてください。
                                 例：<img src="images/hobby-1.jpg" alt="活動の様子"> -->
                            <img src="images/hobby-1.jpg" alt="여행 사진 자리의 테스트용 풍경 사진">
                        </div>
                        <figcaption>여행 사진 자리 · 테스트 이미지</figcaption>
                    </figure>
                    <figure class="activity-item">
                        <div class="activity-photo">
                            <!-- 写真の例：<img src="images/hobby-2.jpg" alt="活動の様子"> -->
                            <img src="images/hobby-2.jpg" alt="헬스 사진 자리의 테스트용 풍경 사진">
                        </div>
                        <figcaption>헬스 사진 자리 · 테스트 이미지</figcaption>
                    </figure>
                    <figure class="activity-item">
                        <div class="activity-photo">
                            <!-- 写真の例：<img src="images/hobby-3.jpg" alt="活動の様子"> -->
                            <img src="images/hobby-3.jpg" alt="배드민턴 사진 자리의 테스트용 풍경 사진">
                        </div>
                        <figcaption>배드민턴 사진 자리 · 테스트 이미지</figcaption>
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
        title: "경력과 새로운 도전",
        lang: "ko",
        html: `
            <p class="modal-intro">
                <strong>현장을 확인하고, 꼼꼼히 검토하며, 함께 해결해 왔습니다.</strong>
                공무원으로 약 4년, 토목설계회사에서 약 2년간 근무하며 시설 관리와 설계 실무를 경험했습니다.
                관계자와의 소통, 자료 검토, 새로운 기술 학습을 통해 쌓은 역량을 개발 업무에서도 이어 가고자 합니다.
            </p>

            <div class="detail-card">
                <p class="career-period">2020.03 – 2024.04</p>
                <h3>충북 음성군청 · 지방공무원 시설직(일반토목)</h3>
                <p>충북대학교 재학 중 지방공무원 공개경쟁채용시험에 합격하여 2020년 3월 1일 임용되었습니다.
                    약 4년간 시설 관리와 사업 추진, 설계용역 및 공사 감독 업무를 담당했습니다.</p>
                <div class="career-work-grid">
                    <div>
                        <h4>담당 업무</h4>
                        <ul>
                            <li><strong>2020–2022 · 소규모수도시설 관리</strong><br>시설 유지보수 및 노후관 교체사업</li>
                            <li><strong>2023–2024 · 소규모공공시설 관리</strong><br>소규모 주민숙원사업 및 시설 안전점검</li>
                        </ul>
                    </div>
                    <div>
                        <h4>설계용역·공사 감독</h4>
                        <ul>
                            <li>실시설계용역 발주 및 설계용역사와 현장조사·협의</li>
                            <li>설계도면·수량산출서·설계내역서의 자재, 규격, 단가와 수량 반영 여부 검토</li>
                            <li>공사 중 민원과 변경사항 발생 시 현장 확인, 관계자 협의 및 직접 설계변경</li>
                        </ul>
                    </div>
                </div>
                <p class="career-experience"><strong>협업과 문제 해결 경험</strong><br>
                    설계사·시공사·지역주민·팀원과 지속적으로 소통하며 현장에 맞는 해결 방안을 조율했습니다.
                    시행착오를 보완하며 사업을 마무리했고, 설계부터 준공까지의 과정을 감독하며 전체 업무 흐름을 이해하는 경험을 쌓았습니다.</p>
            </div>

            <div class="detail-card">
                <p class="career-period">2024.10 – 2026.07</p>
                <h3>(주)홍익기술단 · 수자원부</h3>
                <p>약 2년간 수자원부에서 하천계획과 설계, 조사 업무를 수행했습니다.
                    관련 프로그램을 새롭게 익히고 실제 과업에 활용하며 설계 실무 역량을 쌓았습니다.</p>
                <div class="career-work-grid">
                    <div>
                        <h4>담당 업무</h4>
                        <ul>
                            <li>하천기본계획</li>
                            <li>하천공사 실시설계</li>
                            <li>타당성조사</li>
                            <li>소규모공공시설 실태조사</li>
                        </ul>
                    </div>
                    <div>
                        <h4>사용 기술</h4>
                        <div class="tag-list"><span class="tag">CAD</span><span class="tag">ArcGIS</span><span class="tag">HEC-RAS</span><span class="tag">EST</span></div>
                        <p>업무에 필요한 도구를 배우고 활용하며 새로운 작업 환경에 적응했습니다.</p>
                    </div>
                </div>
                <p class="career-experience"><strong>현장과 설계를 함께 보는 시야</strong><br>
                    공무원 시절 현장 확인과 설계·공사 감독을 수행한 경험을 바탕으로,
                    설계 업무에서도 현장 상황과 관계자의 요구를 함께 고려하며 과업을 수행했습니다.</p>
            </div>

            <div class="detail-card">
                <p class="career-period">2026.08 – 현재</p>
                <h3>(주)글로벌인 · 일본 IT 취업 과정</h3>
                <p>진로 선택을 실제 준비로 이어 가기 위해 2026년 8월부터 일본 IT 취업 학원에서 개발과 일본어를 공부하고 있습니다.
                    HTML·CSS·JavaScript 기초를 배웠고, 현재는 Java를 학습하고 있습니다.</p>
                <p>팀·개인 프로젝트는 앞으로 진행할 예정입니다. Zenn에 학습 내용을 정리하며 기초를 다지고자 합니다.</p>
            </div>

            <section class="detail-card" aria-labelledby="career-strengths">
                <h3 id="career-strengths">개발 업무에도 이어 갈 강점</h3>
                <div class="strength-copy">
                    <h4>소통과 협업 · 서로 다른 입장 조율하기</h4>
                    <p>설계사, 시공사, 지역주민, 팀원과 협의하며 업무를 진행했습니다. 개발팀에서도 상대의 의견을 듣고, 요구사항을 확인하며 함께 해결하는 태도를 이어 가고자 합니다.</p>
                    <h4>검토와 문제 해결 · 근거를 확인하고 수정하기</h4>
                    <p>도면·수량·내역의 일치 여부와 현장 적합성을 검토하고, 변경사항은 현장 확인과 협의를 거쳐 반영했습니다. 개발에서도 결과를 꼼꼼히 확인하고 문제의 원인을 찾아 수정하는 습관을 이어 가겠습니다.</p>
                    <h4>학습과 적응 · 배운 기술을 실제 업무에 활용하기</h4>
                    <p>공공기관과 설계회사의 업무 방식을 경험하고, CAD·ArcGIS·HEC-RAS·EST를 익혀 과업에 활용했습니다. 현재는 개발 기초를 배우며 새로운 기술을 꾸준히 익히고 있습니다.</p>
                    <h4>책임감 · 시행착오를 보완하며 마무리하기</h4>
                    <p>사업 진행 중 어려움이 생겼을 때 팀원과 협력사에 소통하며 해결 방안을 찾고 사업을 마무리했습니다. 앞으로도 맡은 일을 확인하고 보완하며 끝까지 수행하는 자세를 유지하고자 합니다.</p>
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

function preparePhotoButtons() {
    modalBody.querySelectorAll(".profile-photo img, .activity-photo img").forEach((photo) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "photo-expand";
        button.setAttribute("aria-label", `${photo.alt || "写真"}を拡大する`);
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
let lastFocusedButton = null;

document.querySelectorAll(".menu-box").forEach((button) => {
    button.addEventListener("click", () => {
        const content = portfolioContent[button.dataset.section];
        if (!content) return;

        lastFocusedButton = button;
        modalTitle.textContent = content.title;
        modalPanel.lang = content.lang || "ja";
        modalPanel.dataset.section = button.dataset.section;
        modalBody.innerHTML = content.html;
        const ageLabel = modalBody.querySelector("[data-profile-age]");
        if (ageLabel) ageLabel.textContent = getAgeInKorea();
        preparePhotoButtons();

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

document.addEventListener("keydown", (event) => {
    if (photoViewer.open) return;
    if (modal.hidden) return;

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
