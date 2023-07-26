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
    // {
    //     id: 0,
    //     title: "",
    //     content: ``,
    //     img: ``,
    //     bubble:``
    // },
    {
        id: 0,
        title: "１．私はストレスを解消する方法がある。",
        content: `研究による、ストレスコントロール力が高ければ、問題に直面しても乗り越えることができて、前向きに仕事に取り組むことができる。`,
        img: ``,
        bubble:``
    },
    {
        id: 1,
        title: "２．私は厳しい環境で成長できる。",
        content: `私を破壊するに至らないすべてのことが、私をさらに強くする。<br>——ニーチェ——`,
        img: ``,
        bubble:``
    },
    {
        id: 2,
        title: "<br><br>３．私は努力が報われると信じている。",
        content: ``,
        img: `img/努力_アートボード 1.svg`,
        bubble:``
    },
    {
        id: 3,
        title: "４．私はスケジュール管理ができる。",
        content: `課題が多いから、自分のスケジュールをちゃんと管理しないとやばいだよ！`,
        img: ``,
        bubble:``
    },
    {
        id: 4,
        title: "<br><br>５．私は臨機応変に物事を対応できる。",
        content: ``,
        img: `img/臨機応変.svg`,
        bubble:``
    },
    {
        id: 5,
        title: "６．私は自習することができる。",
        content: `自主的に勉強するのが大事だよ！ `,
        img: ``,
        bubble:``
    },
    {
        id: 6,
        title: "７．私は知らないことに興味がある。",
        content: `IT技術の更新が早くていつも新しい知識を得られる。`,
        img: ``,
        bubble:``
    },
    {
        id: 7,
        title: "８．私は複雑な問題を解決したら達成感を感じる。",
        content: `コーディングがさすが難しいよね...`,
        img: ``,
        bubble:``
    },
    {
        id: 8,
        title: "９．私は自分で調べて問題を解決することができる。",
        content: `知らないことは他人に聞く以外自分で調べるのも大事だよ！`,
        img: ``,
        bubble:``
    },
    {
        id: 9,
        title: "１０．私は知らないことを知らないままをするのが嫌だ。",
        content: `知らないまま眠れないよね？`,
        img: ``,
        bubble:``
    },
    {
        id: 10,
        title: "１１．私は一人作業よりチームで作業するのが好き。",
        content: `Webデザイン科はチームワークを重視している学科だよ！`,
        img: ``,
        bubble:``
    },
    {
        id: 11,
        title: "<br><br>１２．私はクラスメイトと課題を話し合うことができる。",
        content: ``,
        img: `img/meeting01.svg`,
        bubble:``
    },
    {
        id: 12,
        title: "１３．私は質問があれば先輩/先生に聞く。",
        content: `先生も先輩もみんなの力になれる！`,
        img: ``,
        bubble:``
    },
    {
        id: 13,
        title: "<br><br>１４．私は黙りっぱなしより自分から話す方が好き。",
        content: ``,
        img: `img/talk.svg`,
        bubble:``
    },
    {
        id: 14,
        title: "<br><br>１５．私は自分の役割をちゃんとできて、他人の迷惑をかけない。",
        content: ``,
        img: ``,
        bubble:``
    },
    {
        id: 15,
        title: "１６．私は産学連携に興味がある。",
        content: `専門学校にはやっぱり就職だろう？これからどんな事があるのを先に知った方がいいと思うね`,
        img: ``,
        bubble:``
    },
    {
        id: 16,
        title: "１７．私はパソコンで働くことを楽しみしている。",
        content: `エンジニアもデザイナーも！パソコンがあれば仕事ができる！！`,
        img: ``,
        bubble:``
    },
    {
        id: 17,
        title: "１８．私はプロジェクトを参加して経験を貯めるのに興味がある。",
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
        id: 19,
        title: "<br><br>２０．簡単な手段で複雑な問題を解決することができる。",
        content: ``,
        img: ``,
        bubble:``
    }
]

const rank = [
    {
        id: 0,
        rank:"img/A.svg",
        commend:"<b>おめでとうございます！</b><br>優秀なWebデザイン科の学生になる準備はもう完璧にできたそうだよ～",
    },
    {
        id: 1,
        rank:"img/B.svg",
        commend:"<b>おめでとうございます！</b><br>Webデザイン科の学生になる準備はもう大体できたそうだよ～",
    },
    {
        id: 2,
        rank:"img/C.svg",
        commend:"<b>お疲れ様です</b><br>Webデザイン科の学生になるのはあなたに対して大変そうだがなんでも乗り越えるだろうか。",
    },
    {
        id: 3,
        rank:"img/D.svg",
        commend:"<b>頑張ろう</b><br>あ～Webデザイン科の学生になる準備はまだだろう。もっと調べて、深く知っていこうか。",
    },
    {
        id: 4,
        rank:"img/E.svg",
        commend:"<b>頑張ろう！！</b><br>Webデザイン科に入ったら厳しい挑戦に違いないだろう。もう一回診断をやってみようか。",
    }
]
//-----defination-----//

const quiz_title = document.querySelector(".quiz_title");
const quiz_content = document.querySelector(".quiz_content");
const btns = document.querySelectorAll("button");

const bgcBox = document.querySelector("bgc_pic");
const bgc_img = document.createElement("img");

const rank_show = document.querySelector(".score_page");

const ranking = document.querySelector(".rank");
const commend = document.querySelector(".commend");

const jec_btn = document.querySelector(".jec");
const get_doc = document.querySelector(".get_doc");
const hotpage = document.querySelector(".hotpage");

const rankingPic = document.createElement("img");

console.log(jec_btn);
console.log(get_doc);
console.log(hotpage);


let counter = 1;
let score = -3;

//--------------------//


function changeQuiz() {
    quiz_title.innerHTML = quizArr[counter - 1].title;

    quiz_content.innerHTML = quizArr[counter - 1].content;


//-----内容有無判断-----//

    if(quiz_content.textContent === ''){

        quiz_content.classList.add("quiz_content_hide")
    }else{
        quiz_content.classList.remove("quiz_content_hide")

    };

//--------------------//

//-----画像インプット-----//

    bgc_img.src = quizArr[counter - 1].img;
    document.querySelector('.bgc_pic').appendChild(bgc_img);

//--------------------//
    
}
changeQuiz()

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        if(counter > quizArr.length) {
            if(btn.className.match("yes")){
                score+=5;
            }else if(btn.className.match("no")){
                score+=1;
            }else{score+=3};

            console.log(counter);

            if(counter >= 21){
                rank_show.classList.add("score_show")

                console.log(score);

                //-----ranking-----//

                if( score >= 90 ){

                    rankingPic.src = rank[0].rank;
                    document.querySelector('.rank').appendChild(rankingPic);

                    commend.innerHTML = rank[0].commend;

                    jec_btn.classList.add("jec_hide");
                    hotpage.classList.add("hotpage_hide");

                }else if( score >= 80 ){

                    rankingPic.src = rank[1].rank;
                    document.querySelector('.rank').appendChild(rankingPic);

                    commend.innerHTML = rank[1].commend;

                    jec_btn.classList.add("jec_hide");
                    hotpage.classList.add("hotpage_hide");

                }else if( score >= 70 ){

                    rankingPic.src = rank[2].rank;
                    document.querySelector('.rank').appendChild(rankingPic);

                    commend.innerHTML = rank[2].commend;

                    jec_btn.classList.add("jec_hide");
                    hotpage.classList.add("hotpage_hide");

                }else if( score >= 60 ){

                    rankingPic.src = rank[3].rank;
                    document.querySelector('.rank').appendChild(rankingPic);

                    commend.innerHTML = rank[3].commend;

                    get_doc.classList.add("get_doc_hide");
                    

                }else{

                    rankingPic.src = rank[4].rank;
                    document.querySelector('.rank').appendChild(rankingPic);

                    commend.innerHTML = rank[4].commend;

                    get_doc.classList.add("get_doc_hide");

                };

            }else{
                rank_show.classList.remove("score_show")
            }

            // quiz_title.innerHTML = "点数：" + score
            // quiz_content.innerHTML = ""
        } else {
            if(btn.className.match("yes")){
                score+=5;
            }else if(btn.className.match("no")){
                score+=1;
            }else{score+=3};
            changeQuiz()

            console.log(counter);
            console.log(score);
        }
            counter++
    })
});


// if(btn.className.includes("yes")) {
//     score++
// } else if(btn.className.includes("no")) {
//     score--
// }

// if(100 > score >= 80){
// A
// }else if(80 > score >= 70){
//     B
// }else if(70 > score >= 60){
//     C
// }else{D};