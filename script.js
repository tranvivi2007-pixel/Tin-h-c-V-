/* =========================================================
   TIN HỌC ÔN TẬP
   MAIN JAVASCRIPT
========================================================= */
/* =========================================================
   FIREBASE CLOUD DATABASE
   ========================================================= */

const firebaseConfig = {
    apiKey: "DÁN_API_KEY_CỦA_BẠN",
    authDomain: "DÁN_AUTH_DOMAIN_CỦA_BẠN",
    projectId: "DÁN_PROJECT_ID_CỦA_BẠN",
    storageBucket: "DÁN_STORAGE_BUCKET_CỦA_BẠN",
    messagingSenderId: "DÁN_MESSAGING_SENDER_ID",
    appId: "DÁN_APP_ID_CỦA_BẠN"
};

firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();
const firebaseDB = firebase.firestore();

let cloudUsers = [];
let firebaseReady = false;

/* =========================================================
   ADMIN
========================================================= */

const ADMIN = {
    username: "TRẦN VI VĨ",
    password: "151007",
    role: "admin"
};


/* =========================================================
   DATA
========================================================= */

const lessons = {

    powerpoint: [

        {
            id: "ppt1",
            title: "Bài 1 - PowerPoint",
            file: "Bài 1.docx",
            video: "",
            description: "Ôn tập kiến thức PowerPoint bài 1."
        },

        {
            id: "ppt2",
            title: "Bài 2 - PowerPoint",
            file: "Bài 2.docx",
            video: "",
            description: "Ôn tập kiến thức PowerPoint bài 2."
        },

        {
            id: "ppt3",
            title: "Bài 3 - PowerPoint",
            file: "Bài 3.docx",
            video: "",
            description: "Ôn tập kiến thức PowerPoint bài 3."
        },

        {
            id: "ppt4",
            title: "Bài 4 - PowerPoint",
            file: "Bài 4.docx",
            video: "",
            description: "Ôn tập kiến thức PowerPoint bài 4."
        }

    ],


    excel: [

        {
            id: "ex1",
            title: "Bài 1 - Excel",
            file: "Bài 1,2,3,4 excel.xlsx",
            video: "ÔN TẬP TH BÀI 1(EXCEL ).mp4",
            description: "Ôn tập Excel bài 1."
        },

        {
            id: "ex2",
            title: "Bài 2 - Excel",
            file: "Bài 1,2,3,4 excel.xlsx",
            video: "ÔN TẬP TH BÀI 2(EXCEL ).mp4",
            description: "Ôn tập Excel bài 2."
        },

        {
            id: "ex3",
            title: "Bài 3 - Excel",
            file: "Bài 1,2,3,4 excel.xlsx",
            video: "ÔN TẬP TH BÀI 3(EXCEL ).mp4",
            description: "Ôn tập Excel bài 3."
        },

        {
            id: "ex4",
            title: "Bài 4 - Excel",
            file: "Bài 1,2,3,4 excel.xlsx",
            video: "ÔN TẬP TH BÀI 4(EXCEL ).mp4",
            description: "Ôn tập Excel bài 4."
        }

    ],


    word: [

        {
            id: "w1",
            title: "Bài 1 - Word",
            file: "Bài 1.docx",
            video: "ÔN TẬP TH BÀI 1 ( WORD ) (online-video-cutter.com).mp4",
            description: "Ôn tập Word bài 1."
        },

        {
            id: "w2",
            title: "Bài 2 - Word",
            file: "Bài 2.docx",
            video: "ÔN TẬP TH BÀI 2WORD ).mp4",
            description: "Ôn tập Word bài 2."
        },

        {
            id: "w3",
            title: "Bài 3 - Word",
            file: "Bài 3.docx",
            video: "ÔN TẬP TH BÀI 3WORD ).mp4",
            description: "Ôn tập Word bài 3."
        },

        {
            id: "w4",
            title: "Bài 4 - Word",
            file: "Bài 4.docx",
            video: "ÔN TẬP TH BÀI 4WORD ).mp4",
            description: "Ôn tập Word bài 4."
        }

    ]

};


/* =========================================================
   QUESTION BANK
========================================================= */

const questions = [

    {
        question: "Trong Excel, hàm LEFT dùng để làm gì?",
        answers: [
            "Lấy ký tự bên trái",
            "Lấy ký tự bên phải",
            "Tính tổng",
            "Tìm kiếm dữ liệu"
        ],
        correct: 0
    },

    {
        question: "Trong Excel, hàm MID dùng để làm gì?",
        answers: [
            "Lấy ký tự từ giữa chuỗi",
            "Tính trung bình",
            "Tìm giá trị lớn nhất",
            "Xóa dữ liệu"
        ],
        correct: 0
    },

    {
        question: "Phím tắt Ctrl + B trong Word có chức năng gì?",
        answers: [
            "In đậm",
            "In nghiêng",
            "Gạch chân",
            "Lưu văn bản"
        ],
        correct: 0
    },

    {
        question: "Phím F5 trong PowerPoint dùng để?",
        answers: [
            "Trình chiếu từ đầu",
            "Lưu file",
            "Thoát PowerPoint",
            "Mở Word"
        ],
        correct: 0
    }

];


/* =========================================================
   STORAGE
========================================================= */

function getUsers() {

    return JSON.parse(
        localStorage.getItem("tinHocUsers") || "[]"
    );

}


function saveUsers(users) {

    localStorage.setItem(
        "tinHocUsers",
        JSON.stringify(users)
    );

}


function getCurrentUser() {

    return JSON.parse(
        localStorage.getItem("tinHocCurrentUser") || "null"
    );

}


/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    updateAccountUI();

    renderLatest();

});


/* =========================================================
   ACCOUNT UI
========================================================= */

function updateAccountUI() {

    const user = getCurrentUser();

    const accountArea =
        document.getElementById("accountArea");

    const userCard =
        document.getElementById("userCard");

    const adminPanel =
        document.getElementById("adminPanel");


    if (!user) {

        accountArea.innerHTML = `

            <button
                class="login-btn"
                onclick="openLogin()"
            >
                Đăng nhập
            </button>

            <button
                class="register-btn"
                onclick="openRegister()"
            >
                Đăng ký
            </button>

        `;


        userCard.innerHTML = `

            <div class="user-avatar">
                <i class="fa-solid fa-user"></i>
            </div>

            <div>

                <small>Chưa đăng nhập</small>

                <strong>Khách</strong>

            </div>

        `;


        adminPanel.style.display = "none";

        return;
    }


    /* ĐÃ ĐĂNG NHẬP */

    accountArea.innerHTML = `

        <div class="logged-user">

            <i class="fa-solid fa-circle-user"></i>

            <span>
                ${escapeHTML(user.name)}
            </span>

        </div>

        <button
            class="login-btn"
            onclick="logout()"
        >
            <i class="fa-solid fa-right-from-bracket"></i>
            Đăng xuất
        </button>

    `;


    userCard.innerHTML = `

        <div class="user-avatar">

            <i class="fa-solid fa-user"></i>

        </div>

        <div>

            <small>
                ${
                    user.role === "admin"
                    ? "Quản trị viên"
                    : "Học sinh"
                }
            </small>

            <strong>
                ${escapeHTML(user.name)}
            </strong>

        </div>

    `;


    if (user.role === "admin") {

        adminPanel.style.display = "block";

    } else {

        adminPanel.style.display = "none";

    }

}


/* =========================================================
   REGISTER
========================================================= */

function registerUser() {

    const name =
        document.getElementById("registerName")
        .value.trim();

    const username =
        document.getElementById("registerUsername")
        .value.trim();

    const password =
        document.getElementById("registerPassword")
        .value.trim();


    if (!name || !username || !password) {

        toast("Vui lòng nhập đầy đủ thông tin.");

        return;
    }


    if (username === ADMIN.username) {

        toast("Tên tài khoản này đã được sử dụng.");

        return;
    }


    const users = getUsers();


    if (
        users.some(
            user =>
                user.username.toLowerCase() ===
                username.toLowerCase()
        )
    ) {

        toast("Tên tài khoản đã tồn tại.");

        return;
    }


    users.push({

        id: Date.now(),

        name,

        username,

        password,

        role: "student",

        status: "active",

        createdAt:
            new Date().toLocaleString("vi-VN")

    });


    saveUsers(users);


    toast("Đăng ký thành công!");

    switchToLogin();


    document.getElementById("loginUsername")
        .value = username;

}


/* =========================================================
   LOGIN
========================================================= */

function login() {

    const username =
        document.getElementById("loginUsername")
        .value.trim();

    const password =
        document.getElementById("loginPassword")
        .value.trim();


    /* ADMIN */

    if (
        username === ADMIN.username &&
        password === ADMIN.password
    ) {

        const admin = {

            name: ADMIN.username,

            username: ADMIN.username,

            role: "admin",

            status: "active"

        };


        localStorage.setItem(
            "tinHocCurrentUser",
            JSON.stringify(admin)
        );


        closeModal();

        updateAccountUI();

        toast("Chào mừng quản trị viên TRẦN VI VĨ!");

        return;
    }


    /* STUDENT */

    const users = getUsers();


    const user = users.find(

        item =>
            item.username === username &&
            item.password === password

    );


    if (!user) {

        toast("Sai tài khoản hoặc mật khẩu.");

        return;
    }


    if (user.status !== "active") {

        toast("Tài khoản này đang bị khóa.");

        return;
    }


    localStorage.setItem(

        "tinHocCurrentUser",

        JSON.stringify(user)

    );


    closeModal();

    updateAccountUI();

    toast(
        "Đăng nhập thành công. Xin chào " +
        user.name + "!"
    );

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    localStorage.removeItem(
        "tinHocCurrentUser"
    );

    updateAccountUI();

    showPage("home");

    toast("Bạn đã đăng xuất.");

}


/* =========================================================
   LOGIN / REGISTER MODAL
========================================================= */

function openLogin() {

    closeModal();

    document
        .getElementById("loginModal")
        .classList.add("show");

}


function openRegister() {

    closeModal();

    document
        .getElementById("registerModal")
        .classList.add("show");

}


function closeModal() {

    document
        .querySelectorAll(".modal")
        .forEach(modal =>
            modal.classList.remove("show")
        );

}


function switchToRegister() {

    openRegister();

}


function switchToLogin() {

    openLogin();

}


/* =========================================================
   COURSE
========================================================= */

function showCourse(type) {

    const data = lessons[type];

    const names = {

        powerpoint: "PowerPoint",

        excel: "Excel",

        word: "Word"

    };


    const icons = {

        powerpoint:
            "fa-file-powerpoint",

        excel:
            "fa-file-excel",

        word:
            "fa-file-word"

    };


    const colors = {

        powerpoint: "#e84d1f",

        excel: "#0a8b52",

        word: "#126ed0"

    };


    let html = `

        <div class="course-page">

            <div class="course-page-title">

                <div
                    class="big-icon"
                    style="
                        color:${colors[type]};
                        background:${colors[type]}15;
                    "
                >

                    <i class="fa-solid ${icons[type]}"></i>

                </div>

                <div>

                    <h2>
                        ${names[type]}
                    </h2>

                    <p>
                        Danh sách bài học và tài liệu ôn tập
                    </p>

                </div>

            </div>


            <div class="lesson-list">

    `;


    data.forEach(lesson => {

        html += `

            <div class="lesson-item">

                <h3>
                    ${lesson.title}
                </h3>

                <p style="
                    font-size:12px;
                    color:#718096;
                    margin-bottom:12px;
                ">
                    ${lesson.description}
                </p>


                <div class="lesson-actions">

                    ${
                        lesson.video
                        ?
                        `
                        <button
                            class="video-btn"
                            onclick='openVideo(${JSON.stringify(lesson.video)})'
                        >
                            <i class="fa-solid fa-play"></i>
                            Xem video
                        </button>
                        `
                        :
                        `
                        <button
                            class="video-btn"
                            onclick="toast('Video bài này chưa được thêm.')"
                        >
                            <i class="fa-solid fa-video-slash"></i>
                            Chưa có video
                        </button>
                        `
                    }


                    <button
                        class="download-btn"
                        onclick='downloadFile(${JSON.stringify(lesson.file)})'
                    >

                        <i class="fa-solid fa-download"></i>

                        Tải file

                    </button>

                </div>

            </div>

        `;

    });


    html += `

            </div>

        </div>

    `;


    document.getElementById("content")
        .innerHTML = html;

}


/* =========================================================
   VIDEO
========================================================= */

function openVideo(filename) {

    const videoPath =
        encodeURIComponent(filename);


    document.getElementById("content").innerHTML = `

        <div class="course-page">

            <div class="course-page-title">

                <div
                    class="big-icon"
                    style="
                        color:#ed4148;
                        background:#ed414815;
                    "
                >

                    <i class="fa-solid fa-circle-play"></i>

                </div>

                <div>

                    <h2>
                        ${escapeHTML(filename)}
                    </h2>

                    <p>
                        Video ôn tập
                    </p>

                </div>

            </div>


            <video
                controls
                style="
                    width:100%;
                    max-height:600px;
                    border-radius:12px;
                    background:#07182e;
                "
            >

                <source
                    src="${videoPath}"
                    type="video/mp4"
                >

                Trình duyệt không hỗ trợ video.

            </video>


            <div style="
                display:flex;
                gap:10px;
                margin-top:15px;
            ">

                <button
                    class="download-btn"
                    onclick="likeVideo('${escapeJS(filename)}')"
                >
                    <i class="fa-solid fa-heart"></i>
                    Thích
                </button>


                <button
                    class="video-btn"
                    onclick="commentVideo('${escapeJS(filename)}')"
                >
                    <i class="fa-solid fa-comment"></i>
                    Bình luận
                </button>

            </div>


            <div
                id="commentsBox"
                style="margin-top:20px;"
            ></div>

        </div>

    `;

}


/* =========================================================
   LIKE
========================================================= */

function likeVideo(filename) {

    const likes =
        JSON.parse(
            localStorage.getItem("tinHocLikes") || "{}"
        );


    likes[filename] =
        (likes[filename] || 0) + 1;


    localStorage.setItem(
        "tinHocLikes",
        JSON.stringify(likes)
    );


    toast(
        "Đã thích video ❤️  (" +
        likes[filename] +
        ")"
    );

}


/* =========================================================
   COMMENT
========================================================= */

function commentVideo(filename) {

    const user = getCurrentUser();


    if (!user) {

        toast("Bạn cần đăng nhập để bình luận.");

        openLogin();

        return;
    }


    const comment =
        prompt("Nhập bình luận của bạn:");


    if (!comment) return;


    const comments =
        JSON.parse(
            localStorage.getItem("tinHocComments") || "{}"
        );


    if (!comments[filename]) {

        comments[filename] = [];

    }


    comments[filename].push({

        user: user.name,

        comment,

        time:
            new Date().toLocaleString("vi-VN")

    });


    localStorage.setItem(
        "tinHocComments",
        JSON.stringify(comments)
    );


    toast("Đã đăng bình luận.");

}


/* =========================================================
   DOWNLOAD
========================================================= */

function downloadFile(filename) {

    const link =
        document.createElement("a");

    link.href =
        encodeURIComponent(filename);

    link.download = filename;

    /*
       Vì file nằm cùng thư mục với index.html,
       dùng tên file trực tiếp.
    */

    link.href = filename;

    document.body.appendChild(link);

    link.click();

    link.remove();

}


/* =========================================================
   VIDEO / DOCUMENT PAGE
========================================================= */

function showPage(page) {

    if (page === "home") {

        location.reload();

        return;
    }


    if (page === "videos") {

        showAllVideos();

        return;
    }


    if (page === "documents") {

        showDocuments();

        return;
    }


    if (page === "quiz") {

        showQuiz();

        return;
    }


    if (page === "ai") {

        showAI();

        return;
    }


    if (page === "admin") {

        showAdmin();

        return;
    }


    if (page === "about") {

        showAbout();

        return;
    }

}


/* =========================================================
   ALL VIDEOS
========================================================= */

function showAllVideos() {

    let html = `

        <div class="course-page">

            <h2>
                <i class="fa-solid fa-circle-play"></i>
                Video bài giảng
            </h2>

            <br>

            <div class="lesson-list">

    `;


    Object.values(lessons)
        .flat()
        .filter(x => x.video)
        .forEach(video => {

            html += `

                <div class="lesson-item">

                    <h3>
                        ${escapeHTML(video.title)}
                    </h3>

                    <p style="
                        font-size:12px;
                        color:#718096;
                    ">
                        ${escapeHTML(video.video)}
                    </p>

                    <br>

                    <button
                        class="video-btn"
                        onclick='openVideo(${JSON.stringify(video.video)})'
                    >
                        <i class="fa-solid fa-play"></i>
                        Xem video
                    </button>

                </div>

            `;

        });


    html += `

            </div>

        </div>

    `;


    document.getElementById("content")
        .innerHTML = html;

}


/* =========================================================
   DOCUMENTS
========================================================= */

function showDocuments() {

    const documents = [

        "Đề thi Tin học cơ bản – Đề số 1.pdf",

        "Đề ôn PowerPoint – Đề số 2.pptx",

        "Bài tập Excel tổng hợp.xlsx",

        "Bài tập Word tổng hợp.docx"

    ];


    let html = `

        <div class="course-page">

            <h2>
                <i class="fa-solid fa-folder-open"></i>
                Đề thi & Tài liệu
            </h2>

            <br>

            <div class="lesson-list">

    `;


    documents.forEach(file => {

        html += `

            <div class="lesson-item">

                <h3>
                    <i class="fa-solid fa-file"></i>
                    ${escapeHTML(file)}
                </h3>

                <br>

                <button
                    class="download-btn"
                    onclick='downloadFile(${JSON.stringify(file)})'
                >

                    <i class="fa-solid fa-download"></i>

                    Tải xuống

                </button>

            </div>

        `;

    });


    html += `

            </div>

        </div>

    `;


    document.getElementById("content")
        .innerHTML = html;

}


/* =========================================================
   QUIZ
========================================================= */

let currentQuestion = 0;

let score = 0;


function showQuiz() {

    currentQuestion = 0;

    score = 0;

    renderQuestion();

}


function renderQuestion() {

    const q =
        questions[currentQuestion];


    let html = `

        <div class="course-page">

            <h2>
                <i class="fa-solid fa-list-check"></i>
                Ôn tập trắc nghiệm
            </h2>

            <p style="
                color:#718096;
                margin:8px 0 20px;
            ">
                Câu ${currentQuestion + 1}
                /
                ${questions.length}
            </p>


            <div class="lesson-item">

                <h3>
                    ${escapeHTML(q.question)}
                </h3>

                <br>

    `;


    q.answers.forEach((answer, index) => {

        html += `

            <button
                onclick="answerQuestion(${index})"
                style="
                    display:block;
                    width:100%;
                    text-align:left;
                    border:1px solid #dce4ed;
                    background:white;
                    padding:12px;
                    border-radius:8px;
                    margin-bottom:9px;
                    color:#24344d;
                "
            >

                ${String.fromCharCode(65 + index)}.
                ${escapeHTML(answer)}

            </button>

        `;

    });


    html += `

            </div>

        </div>

    `;


    document.getElementById("content")
        .innerHTML = html;

}


function answerQuestion(index) {

    const q =
        questions[currentQuestion];


    if (index === q.correct) {

        score++;

        toast("Chính xác! 🎉");

    } else {

        toast("Chưa chính xác.");

    }


    currentQuestion++;


    if (currentQuestion >= questions.length) {

        setTimeout(showQuizResult, 500);

    } else {

        setTimeout(renderQuestion, 500);

    }

}


function showQuizResult() {

    document.getElementById("content")
        .innerHTML = `

        <div class="course-page"
             style="text-align:center;">

            <div
                style="
                    font-size:60px;
                    color:#18a567;
                "
            >

                <i class="fa-solid fa-circle-check"></i>

            </div>

            <h2>
                Hoàn thành bài trắc nghiệm!
            </h2>

            <p style="
                margin:10px 0 20px;
                color:#718096;
            ">

                Bạn đạt

                <strong>
                    ${score}/${questions.length}
                </strong>

            </p>

            <button
                class="submit-button"
                style="max-width:250px;"
                onclick="showQuiz()"
            >

                Làm lại

            </button>

        </div>

    `;

}


/* =========================================================
   AI
========================================================= */

function showAI() {

    document.getElementById("content")
        .innerHTML = `

        <div class="course-page">

            <div class="course-page-title">

                <div
                    class="big-icon"
                    style="
                        color:#7a4cf0;
                        background:#7a4cf015;
                    "
                >

                    <i class="fa-solid fa-robot"></i>

                </div>

                <div>

                    <h2>
                        AI hỗ trợ học tập
                    </h2>

                    <p>
                        Trợ lý Tin học
                    </p>

                </div>

            </div>


            <div
                id="aiChat"
                style="
                    height:380px;
                    overflow-y:auto;
                    background:#f6f8fb;
                    border-radius:12px;
                    padding:15px;
                    margin-bottom:12px;
                "
            >

                <div
                    style="
                        background:white;
                        padding:12px;
                        border-radius:10px;
                        margin-bottom:10px;
                    "
                >

                    🤖 Xin chào!

                    Tôi có thể hỗ trợ bạn về:

                    <br><br>

                    • Excel

                    <br>

                    • Word

                    <br>

                    • PowerPoint

                    <br>

                    • Công thức

                    <br>

                    • Trắc nghiệm

                    <br>

                    • Giải thích kiến thức

                </div>

            </div>


            <div style="
                display:flex;
                gap:8px;
            ">

                <input
                    id="aiInput"
                    placeholder="Hỏi AI về Tin học..."
                    style="
                        flex:1;
                        height:45px;
                        border:1px solid #dce3ec;
                        border-radius:8px;
                        padding:0 13px;
                        outline:none;
                    "
                    onkeydown="
                        if(event.key==='Enter')
                        askAI()
                    "
                >

                <button
                    class="submit-button"
                    style="width:120px;"
                    onclick="askAI()"
                >

                    Gửi

                </button>

            </div>

        </div>

    `;

}


function askAI() {

    const input =
        document.getElementById("aiInput");

    const chat =
        document.getElementById("aiChat");


    if (!input || !chat) return;


    const question =
        input.value.trim();


    if (!question) return;


    chat.innerHTML += `

        <div
            style="
                background:#eaf3ff;
                padding:12px;
                border-radius:10px;
                margin-bottom:10px;
                text-align:right;
            "
        >

            👤 ${escapeHTML(question)}

        </div>

    `;


    let answer =
        getAIAnswer(question);


    setTimeout(() => {

        chat.innerHTML += `

            <div
                style="
                    background:white;
                    padding:12px;
                    border-radius:10px;
                    margin-bottom:10px;
                "
            >

                🤖 ${answer}

            </div>

        `;


        chat.scrollTop =
            chat.scrollHeight;

    }, 400);


    input.value = "";

}


/* =========================================================
   LOCAL AI KNOWLEDGE
========================================================= */

function getAIAnswer(question) {

    const q =
        question.toLowerCase();


    if (
        q.includes("left")
    ) {

        return `
            Hàm LEFT trong Excel dùng để lấy
            một số ký tự ở bên trái chuỗi.
            <br><br>
            Ví dụ:
            <b>=LEFT(A1,3)</b>
            sẽ lấy 3 ký tự đầu tiên của A1.
        `;

    }


    if (
        q.includes("mid")
    ) {

        return `
            Hàm MID dùng để lấy ký tự bắt đầu
            từ một vị trí xác định trong chuỗi.
            <br><br>
            Cú pháp:
            <b>=MID(text,start_num,num_chars)</b>
        `;

    }


    if (
        q.includes("vlookup")
    ) {

        return `
            VLOOKUP dùng để tìm kiếm dữ liệu
            theo cột.
            <br><br>
            Cú pháp:
            <b>=VLOOKUP(giá_trị,cảng_dữ_liệu,số_cột,0)</b>
        `;

    }


    if (
        q.includes("ctrl+b")
    ) {

        return `
            Trong Word,
            <b>Ctrl + B</b> dùng để bật/tắt
            chế độ chữ <b>in đậm</b>.
        `;

    }


    if (
        q.includes("f5")
    ) {

        return `
            Trong PowerPoint,
            <b>F5</b> dùng để bắt đầu trình chiếu
            từ slide đầu tiên.
        `;

    }


    return `
        Tôi đã nhận được câu hỏi của bạn.
        <br><br>
        Bạn có thể hỏi cụ thể hơn, ví dụ:
        <br>
        • Hàm MID là gì?
        <br>
        • Cách dùng VLOOKUP?
        <br>
        • Ctrl+B có tác dụng gì?
        <br>
        • Cách trình chiếu PowerPoint?
    `;

}


/* =========================================================
   ADMIN PANEL
========================================================= */

function showAdmin() {

    const user = getCurrentUser();


    if (!user || user.role !== "admin") {

        toast("Bạn không có quyền truy cập.");

        return;
    }


    const users = getUsers();


    let html = `

        <div class="course-page">

            <h2>
                <i class="fa-solid fa-users-gear"></i>
                Quản lý tài khoản học sinh
            </h2>

            <p style="
                color:#718096;
                margin:8px 0 20px;
            ">
                Quản trị viên có thể mở khóa,
                khóa hoặc xóa tài khoản.
            </p>


            <div style="
                overflow-x:auto;
            ">

                <table
                    style="
                        width:100%;
                        border-collapse:collapse;
                    "
                >

                    <thead>

                        <tr
                            style="
                                background:#f3f6fa;
                                text-align:left;
                            "
                        >

                            <th style="padding:12px;">
                                Họ tên
                            </th>

                            <th style="padding:12px;">
                                Tài khoản
                            </th>

                            <th style="padding:12px;">
                                Trạng thái
                            </th>

                            <th style="padding:12px;">
                                Chức năng
                            </th>

                        </tr>

                    </thead>

                    <tbody>

    `;


    if (users.length === 0) {

        html += `

            <tr>

                <td
                    colspan="4"
                    style="
                        padding:20px;
                        text-align:center;
                        color:#718096;
                    "
                >

                    Chưa có tài khoản học sinh.

                </td>

            </tr>

        `;

    }


    users.forEach(user => {

        html += `

            <tr
                style="
                    border-bottom:1px solid #e7edf4;
                "
            >

                <td style="padding:12px;">
                    ${escapeHTML(user.name)}
                </td>

                <td style="padding:12px;">
                    ${escapeHTML(user.username)}
                </td>

                <td style="padding:12px;">

                    ${
                        user.status === "active"

                        ?

                        `
                        <span style="
                            color:#0b9155;
                            font-weight:600;
                        ">
                            Đang hoạt động
                        </span>
                        `

                        :

                        `
                        <span style="
                            color:#e04343;
                            font-weight:600;
                        ">
                            Đã khóa
                        </span>
                        `
                    }

                </td>


                <td style="
                    padding:12px;
                    display:flex;
                    gap:6px;
                ">

                    <button
                        class="download-btn"
                        onclick="toggleUser(${user.id})"
                    >

                        ${
                            user.status === "active"
                            ? "Khóa"
                            : "Mở khóa"
                        }

                    </button>


                    <button
                        class="video-btn"
                        onclick="deleteUser(${user.id})"
                    >

                        Xóa

                    </button>

                </td>

            </tr>

        `;

    });


    html += `

                    </tbody>

                </table>

            </div>

        </div>

    `;


    document.getElementById("content")
        .innerHTML = html;

}


/* =========================================================
   ADMIN - TOGGLE
========================================================= */

function toggleUser(id) {

    const users = getUsers();


    const user =
        users.find(x => x.id === id);


    if (!user) return;


    user.status =
        user.status === "active"
        ? "locked"
        : "active";


    saveUsers(users);


    showAdmin();

    toast(
        user.status === "active"
        ? "Đã mở tài khoản."
        : "Đã khóa tài khoản."
    );

}


/* =========================================================
   ADMIN - DELETE
========================================================= */

function deleteUser(id) {

    if (
        !confirm(
            "Bạn có chắc muốn xóa tài khoản này?"
        )
    ) {

        return;
    }


    let users = getUsers();


    users =
        users.filter(
            user => user.id !== id
        );


    saveUsers(users);


    showAdmin();

    toast("Đã xóa tài khoản.");

}


/* =========================================================
   ABOUT
========================================================= */

function showAbout() {

    document.getElementById("content")
        .innerHTML = `

        <div class="course-page">

            <h2>
                <i class="fa-solid fa-circle-info"></i>
                Giới thiệu
            </h2>

            <br>

            <p>
                <b>TIN HỌC – ÔN TẬP VỮNG KIẾN THỨC</b>
                là nền tảng hỗ trợ học tập và ôn luyện
                PowerPoint, Excel, Word.
            </p>

            <br>

            <p>
                Hệ thống bao gồm bài học,
                video, tài liệu, trắc nghiệm
                và trợ lý AI.
            </p>

        </div>

    `;

}


/* =========================================================
   LATEST
========================================================= */

function renderLatest() {

    const videoBox =
        document.getElementById("latestVideos");

    const docBox =
        document.getElementById("latestDocuments");


    if (videoBox) {

        videoBox.innerHTML = `

            <div style="
                padding:9px 0;
                border-bottom:1px solid #edf1f5;
                font-size:12px;
            ">

                <i class="fa-solid fa-play"
                   style="color:#e84646;">
                </i>

                Ôn tập Excel bài 1

            </div>


            <div style="
                padding:9px 0;
                border-bottom:1px solid #edf1f5;
                font-size:12px;
            ">

                <i class="fa-solid fa-play"
                   style="color:#e84646;">
                </i>

                Ôn tập Excel bài 2

            </div>


            <div style="
                padding:9px 0;
                font-size:12px;
            ">

                <i class="fa-solid fa-play"
                   style="color:#e84646;">
                </i>

                Ôn tập Word bài 1

            </div>

        `;

    }


    if (docBox) {

        docBox.innerHTML = `

            <div style="
                padding:9px 0;
                border-bottom:1px solid #edf1f5;
                font-size:12px;
            ">

                <i class="fa-solid fa-file"
                   style="color:#2479e8;">
                </i>

                Bài tập Excel tổng hợp

            </div>


            <div style="
                padding:9px 0;
                border-bottom:1px solid #edf1f5;
                font-size:12px;
            ">

                <i class="fa-solid fa-file-word"
                   style="color:#2479e8;">
                </i>

                Bài tập Word tổng hợp

            </div>


            <div style="
                padding:9px 0;
                font-size:12px;
            ">

                <i class="fa-solid fa-file-pdf"
                   style="color:#e84646;">
                </i>

                Đề thi Tin học cơ bản

            </div>

        `;

    }

}


/* =========================================================
   SEARCH
========================================================= */

function searchWebsite() {

    const input =
        document.getElementById("searchInput");


    const value =
        input.value.trim().toLowerCase();


    if (!value) {

        toast("Nhập nội dung cần tìm.");

        return;
    }


    if (value.includes("excel")) {

        showCourse("excel");

        return;
    }


    if (value.includes("word")) {

        showCourse("word");

        return;
    }


    if (
        value.includes("powerpoint") ||
        value.includes("ppt")
    ) {

        showCourse("powerpoint");

        return;
    }


    if (
        value.includes("video")
    ) {

        showPage("videos");

        return;
    }


    if (
        value.includes("đề") ||
        value.includes("tài liệu")
    ) {

        showPage("documents");

        return;
    }


    toast(
        "Không tìm thấy nội dung phù hợp."
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function toast(message) {

    const box =
        document.getElementById("toast");


    box.textContent = message;

    box.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        box.classList.remove("show");

    }, 3000);

}


/* =========================================================
   SECURITY HELPERS
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeJS(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"');

}


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

document.addEventListener("click", function(event) {

    if (
        event.target.classList.contains("modal")
    ) {

        closeModal();

    }

});


/* =========================================================
   FIREBASE AUTH INITIALIZATION
   ========================================================= */

async function initFirebase() {

    try {

        firebaseReady = true;

        firebaseAuth.onAuthStateChanged(async (user) => {

            if (!user) {

                state.currentUser = null;

                render();

                return;
            }

            try {

                const userDoc =
                    await firebaseDB
                        .collection("users")
                        .doc(user.uid)
                        .get();

                if (!userDoc.exists) {

                    await firebaseAuth.signOut();

                    state.currentUser = null;

                    toast(
                        "Tài khoản chưa được thiết lập.",
                        "err"
                    );

                    render();

                    return;
                }

                const data = userDoc.data();

                /* TÀI KHOẢN BỊ KHÓA */

                if (data.status === "blocked") {

                    await firebaseAuth.signOut();

                    state.currentUser = null;

                    toast(
                        "Tài khoản của bạn đã bị khóa.",
                        "err"
                    );

                    render();

                    return;
                }

                /* TÀI KHOẢN ĐÃ XÓA */

                if (data.status === "deleted") {

                    await firebaseAuth.signOut();

                    state.currentUser = null;

                    toast(
                        "Tài khoản không còn hoạt động.",
                        "err"
                    );

                    render();

                    return;
                }

                state.currentUser = {
                    id: user.uid,
                    uid: user.uid,
                    name: data.name || "Học sinh",
                    username: data.username || "",
                    email: data.email || user.email || "",
                    role: data.role || "student",
                    status: data.status || "active",
                    created: data.created || Date.now()
                };

                render();

            } catch (error) {

                console.error(error);

                toast(
                    "Không thể tải thông tin tài khoản.",
                    "err"
                );

                state.currentUser = null;

                render();
            }

        });

    } catch (error) {

        console.error(
            "Firebase initialization error:",
            error
        );

        firebaseReady = false;

        toast(
            "Firebase chưa được cấu hình.",
            "err"
        );

        render();
    }
}