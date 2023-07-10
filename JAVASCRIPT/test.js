'use strict';

//-----Next Page-----//

const start = document.querySelector('.start');
const test = document.querySelector('.test');

start.addEventListener(
    'click',function(){
        test.classList.add("test_show");
    }
);

//-----Quiz Whole-----//

const quizArr = [
    {
        id: 0,
        title: "",
        content: ``,
        img: ``,
        bubble:``
    },
    {
        id: 1,
        title: "１．私はストレスを解消する方法がある。",
        content: `例えば：スポーツしたり、寝たりすることでリラックスする。<br>研究による、ストレスコントロール力が高ければ、問題に直面しても乗り越えることができて、前向きに仕事に取り組むことができる。`,
        img: ``,
        bubble:``
    },
    {
        id: 2,
        title: "２．私は厳しい環境で成長できる。",
        content: `私を破壊するに至らないすべてのことが、私をさらに強くする。<br><br>―ニーチェ―`,
        img: ``,
        bubble:``
    },
    {
        id: 3,
        title: "３．私は努力が報われると信じている。",
        content: ``,
        img: `img/努力_アートボード 1.svg`,
        bubble:``
    },
    {
        id: 4,
        title: "４．私はスケジュール管理ができる。",
        content: `課題が多いから、自分のスケジュールをちゃんと管理しないとやばいだよ！`,
        img: ``,
        bubble:``
    },
    {
        id: 5,
        title: "５．私は臨機応変に物事を対応できる。",
        content: ``,
        img: ``,
        bubble:``
    },
    {
        id: 6,
        title: "６．私は自習することができる。",
        content: `自主的に勉強するのが大事だよ！`,
        img: ``,
        bubble:``
    },
    {
        id: 7,
        title: "７．私は知らないことに興味がある。",
        content: `IT技術の更新が早くていつも新しい知識を得られる。`,
        img: ``,
        bubble:``
    },
    {
        id: 8,
        title: "８．私は複雑な問題を解決したら達成感を感じる。",
        content: `コーディングがさすが難しいよね...`,
        img: ``,
        bubble:``
    },
    {
        id: 9,
        title: "９．私は自分で調べて問題を解決することができる。",
        content: `知らないことは他人に聞く以外自分で調べるのも大事だよ！`,
        img: ``,
        bubble:``
    },
    {
        id: 10,
        title: "１０．私は知らないことを知らないままをするのが嫌だ。",
        content: `知らないまま眠れないよね？`,
        img: ``,
        bubble:``
    },
    {
        id: 11,
        title: "１１．私は一人作業よりチームで作業するのが好き。",
        content: `Webデザイン科はチームワークを重視している学科だよ！`,
        img: ``,
        bubble:``
    },
    {
        id: 12,
        title: "１２．私はクラスメイトと課題を話し合うことができる。",
        content: ``,
        img: ``,
        bubble:``
    },
    {
        id: 13,
        title: "１３．私は質問があれば先輩/先生に聞く。",
        content: `先生も先輩もみんなの力になれる！`,
        img: ``,
        bubble:``
    },
    {
        id: 14,
        title: "１４．私は黙りっぱなしより自分から話す方が好き。",
        content: ``,
        img: ``,
        bubble:``
    },
    {
        id: 15,
        title: "１５．私は自分の役割をちゃんとできて、他人の迷惑をかけない。",
        content: ``,
        img: ``,
        bubble:``
    },
    {
        id: 16,
        title: "１６．私は産学連携に興味がある。",
        content: `専門学校にはやっぱり就職だろう？これからどんな事があるのを先に知った方がいいと思うね`,
        img: ``,
        bubble:``
    },
    {
        id: 17,
        title: "１７．私はパソコンで働くことを楽しみしている。",
        content: `エンジニアもデザイナーも！パソコンがあれば仕事ができる！！`,
        img: ``,
        bubble:``
    },
    {
        id: 18,
        title: "１８．私はプロジェクトを参加して経験を貯めることに興味がある。",
        content: `エンジニアもデザイナーも！パソコンがあれば仕事ができる！！`,
        img: ``,
        bubble:``
    },
    {
        id: 18,
        title: "１９．仕事で新しい知識を学ぶのが楽しい。",
        content: `ITの知識毎日更新しているので、いつも新しい技術を学ぶ心構えが必要！`,
        img: ``,
        bubble:``
    },
    {
        id: 20,
        title: "２０．簡単な手段で複雑な問題を解決することができる。",
        content: ``,
        img: ``,
        bubble:``
    }
]

const quiz_title = document.querySelector(".quiz_title");
const quiz_content = document.querySelector(".quiz_content");
const btns = document.querySelectorAll("button");

const bgcBox = document.querySelector("bgc_pic");
const bgc_img = document.createElement("img");

let counter = 1;

let score = 0;

function changeQuiz() {
    quiz_title.innerHTML = quizArr[counter - 1].title;
    quiz_content.innerHTML = quizArr[counter - 1].content;

    bgc_img.src = quizArr[counter - 1].img;
    document.querySelector('.bgc_pic').appendChild(bgc_img);
    
}
changeQuiz()

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        counter++
        if(counter > quizArr.length) {
            if(btn.className.includes("yes")) {
                score++
            } else if(btn.className.includes("no")) {
                score--
            }
            quiz_title.innerHTML = "your score is" + score
            quiz_content.innerHTML = ""
        } else {
            if(btn.className.includes("yes")) {
                score++
            } else if(btn.className.includes("no")) {
                score--
            }
            changeQuiz()
        }
    })
});
