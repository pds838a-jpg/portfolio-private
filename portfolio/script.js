// 이 부분의 문장을 수정하면 각 창의 내용이 바뀝니다.
const portfolioContent = {
    profile: {
        number: "01",
        title: "PROFILE",
        html: `
            <p class="modal-intro">
                안녕하세요. 일본 IT 기업 취업을 목표로 개발을 공부하고 있는
                キムテヒョン입니다.
            </p>

            <div class="detail-card">
                <h3>ABOUT ME</h3>
                <p>
                    이곳에 자기소개와 개발을 시작한 계기를 2~3문장으로 적어 주세요.
                </p>
            </div>

            <div class="detail-card">
                <h3>GOAL</h3>
                <p>
                    어떤 개발자가 되고 싶은지, 현재 무엇을 공부하고 있는지 적어 주세요.
                </p>
            </div>
        `
    },

    skills: {
        number: "02",
        title: "SKILLS",
        html: `
            <p class="modal-intro">
                사용해 본 기술과 현재 학습 중인 기술을 정리하는 공간입니다.
            </p>

            <div class="detail-card">
                <h3>FRONTEND</h3>
                <p>실제로 사용해 본 기술만 남기고, 아래 태그를 수정해 주세요.</p>
                <div class="tag-list">
                    <span class="tag">HTML</span>
                    <span class="tag">CSS</span>
                    <span class="tag">JavaScript</span>
                </div>
            </div>

            <div class="detail-card">
                <h3>BACKEND / TOOLS</h3>
                <p>학습하거나 프로젝트에서 활용한 언어와 도구를 적어 주세요.</p>
                <div class="tag-list">
                    <span class="tag">Java</span>
                    <span class="tag">VS Code</span>
                </div>
            </div>
        `
    },

    projects: {
        number: "03",
        title: "PROJECTS",
        html: `
            <p class="modal-intro">
                직접 만든 프로젝트의 목적, 맡은 작업, 결과를 보여주세요.
            </p>

            <div class="detail-card">
                <h3>프로젝트 이름</h3>
                <p>무엇을 만드는 프로젝트인지 한 문장으로 설명해 주세요.</p>
                <ul>
                    <li>제작 기간: 0000.00 ~ 0000.00</li>
                    <li>담당 작업: 직접 구현한 기능</li>
                    <li>사용 기술: HTML, CSS, JavaScript 등</li>
                    <li>배운 점: 해결한 문제나 개선한 점</li>
                </ul>
            </div>

            <div class="detail-card">
                <h3>다음 프로젝트</h3>
                <p>두 번째 프로젝트가 완성되면 이 카드의 내용을 바꿔 주세요.</p>
            </div>
        `
    },

    career: {
        number: "04",
        title: "CAREER",
        html: `
            <p class="modal-intro">
                이전 경험과 개발자로 전환하며 쌓은 역량을 정리하는 공간입니다.
            </p>

            <div class="detail-card">
                <h3>WORK EXPERIENCE</h3>
                <p>
                    회사명과 근무 기간을 적고, 맡았던 업무를 간단히 설명해 주세요.
                </p>
            </div>

            <div class="detail-card">
                <h3>TRANSFERABLE SKILLS</h3>
                <p>
                    기존 업무에서 익힌 문제 해결, 협업, 일정 관리 경험 중
                    개발 업무와 연결되는 사례를 적어 주세요.
                </p>
            </div>
        `
    }
};

const modal = document.getElementById("portfolio-modal");
const modalPanel = modal.querySelector(".modal-panel");
const modalTitle = document.getElementById("modal-title");
const modalNumber = document.getElementById("modal-number");
const modalBody = document.getElementById("modal-body");
const closeButton = modal.querySelector(".modal-close");

const main = document.querySelector(".business-card");
let lastFocusedButton = null;
let isClosing = false;

document.querySelectorAll(".menu-box").forEach((button) => {
    button.addEventListener("click", () => {
        const content = portfolioContent[button.dataset.section];
        if (!content) return;

        lastFocusedButton = button;
        modalNumber.textContent = content.number;
        modalTitle.textContent = content.title;
        modalBody.innerHTML = content.html;

        modal.hidden = false;
        document.body.classList.add("modal-open");
        main.inert = true;
        modalBody.scrollTop = 0;
        closeButton.focus({ preventScroll: true });
    });
});

async function closeModal() {
    if (modal.hidden || isClosing) return;
    isClosing = true;
    modal.classList.add("is-closing");

    // CSS의 닫기 애니메이션이 끝난 뒤 숨깁니다.
    await Promise.allSettled(
        modal.getAnimations({ subtree: true }).map((animation) => animation.finished)
    );

    modal.hidden = true;
    modal.classList.remove("is-closing");
    document.body.classList.remove("modal-open");
    main.inert = false;
    isClosing = false;
    lastFocusedButton?.focus({ preventScroll: true });
}

closeButton.addEventListener("click", closeModal);
modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
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
