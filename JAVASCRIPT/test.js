'use strict';

//-----Next Page-----//

const start = document.querySelector('.start');
const test = document.querySelector('.test');

start.addEventListener('click', function () {
  test.classList.add('test_show');
});

//-----Quiz Whole-----//
const newQuiz = [
  {
    id: 0,
    title: '<br>1.オープンキャンパスに参加しましたか？',
    content: `Webデザイン科ってどういう学科が知りたいなら、ぜひ来てみてください！`,
    img: `img/jeclogo.svg`,
    bubble: ``,
  },
  {
    id: 1,
    title: '<br>2.Web業界との産学連携に興味はありますか？',
    content: `専門学校はやはり就職でしょう？これからどんな事があるのを先に知った方がいいと思います。`,
    img: `img/web-engineer.png`,
    bubble: ``,
  },
  {
    id: 2,
    title: '<br>3.自習することができますか？',
    content: `自主的に勉強するのが大事ですよ！`,
    img: ``,
    bubble: ``,
  },
  {
    id: 3,
    title: '<br>4.チーム行動はできますか？',
    content: `Webデザイン科で「チームワーク」が大切なことですよ！<br>たくさんの人が一緒に一つの目標を達するためにお互い受け入れて、理解して、作業をうまく進ませるように、チーム行動が重要なことです！`,
    img: `img/meeting01.svg`,
    bubble: ``,
  },
  {
    id: 4,
    title: '<br>5.スケジュール管理はできますか？',
    content: `課題が多いので、自分のスケジュールをきちんと管理しないといけないですよ！`,
    img: `img/project.png`,
    bubble: ``,
  },
  {
    id: 5,
    title: '<br>6.複雑な問題を解決したら達成感を感じますか？',
    content: `コーディングはさすが難しいですよね...でも自分で解決したら嬉しいですよ！`,
    img: ``,
    bubble: ``,
  },
  {
    id: 6,
    title: '<br>7.ストレスコントロールはできますか？',
    content: `研究によると、ストレスコントロール力が高ければ、問題に直面しても乗り越えることができて、前向きに仕事に取り組むことができます。`,
    img: `img/fear.png`,
    bubble: ``,
  },
  {
    id: 7,
    title: '<br>8.大勢の人の前に立って喋ることは苦になりませんか？',
    content: `Webデザイン科には伝える力が大切ですよ！<br>自分のアイディアを正しく伝えて、理解してもらえば、企画も受け入れてもらえます。`,
    img: `img/speech.png`,
    bubble: ``,
  },
  {
    id: 8,
    title: '<br>9.課題が多くても諦めずに取り組めますか？',
    content: `私を破壊するに至らないすべてのことが、私をさらに強くする。<br><span class='name'>——ニーチェ——</span>`,
    img: ``,
    bubble: ``,
  },
  {
    id: 9,
    title:
      '<br>10.ウェブサイトの企画から、実装まで自分で制作することに興味がありますか？',
    content: `Webデザイン科の三つの柱は「コミュニケーション力」「考える力」「作る力」です。<br>覚えてください！大事な三つの力ですよ！`,
    img: ``,
    bubble: ``,
  },
];

// const quizArr = [
//   // {
//   //     id: 0,
//   //     title: "",
//   //     content: ``,
//   //     img: ``,
//   //     bubble:``
//   // },
//   {
//     id: 0,
//     title: '<br>1.私はストレスを<br>解消する方法がある。',
//     content: `研究による、ストレスコントロール力が高ければ、問題に直面しても乗り越えることができて、前向きに仕事に取り組むことができる。`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 1,
//     title: '<br>2.私は厳しい環境で<br>成長できる。',
//     content: `私を破壊するに至らないすべてのことが、私をさらに強くする。<br><span class='name'>——ニーチェ——</span>`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 2,
//     title: '<br><br>3.私は努力が報われると<br>じている。',
//     content: ``,
//     img: `img/努力_アートボード 1.svg`,
//     bubble: ``,
//   },
//   {
//     id: 3,
//     title: '<br>4.私はスケジュール管理が<br>できる。',
//     content: `課題が多いから、自分のスケジュールをちゃんと管理しないとやばいだよ！`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 4,
//     title: '<br><br>5.私は臨機応変に物事を<br>対応できる。',
//     content: ``,
//     img: `img/臨機応変.svg`,
//     bubble: ``,
//   },
//   {
//     id: 5,
//     title: '<br>6.私は自習することができる。',
//     content: `自主的に勉強するのが大事だよ！ `,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 6,
//     title: '<br>7.私は知らないことに興味がある。',
//     content: `IT技術の更新が早くていつも新しい知識を得られる。`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 7,
//     title: '<br>8.私は複雑な問題を解決したら達成感を感じる。',
//     content: `コーディングがさすが難しいよね...`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 8,
//     title: '<br>9.私は自分で調べて問題を解決することができる。',
//     content: `知らないことは他人に聞く以外自分で調べるのも大事だよ！`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 9,
//     title: '<br>10.私は知らないことを知らないままをするのが嫌だ。',
//     content: `知らないまま眠れないよね？`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 10,
//     title: '<br>11.私は一人作業よりチームで作業するのが好き。',
//     content: `Webデザイン科はチームワークを重視している学科だよ！`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 11,
//     title: '<br><br>12.私はクラスメイトと課題を話し合うことができる。',
//     content: ``,
//     img: `img/meeting01.svg`,
//     bubble: ``,
//   },
//   {
//     id: 12,
//     title: '<br>13.私は質問があれば<br>先輩/先生に聞く。',
//     content: `先生も先輩もみんなの力になれる！`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 13,
//     title: '<br><br>14.私は黙りっぱなしより自分から話す方が好き。',
//     content: ``,
//     img: `img/talk.svg`,
//     bubble: ``,
//   },
//   {
//     id: 14,
//     title: '<br><br>15.私は自分の役割をちゃんとできて、他人の迷惑をかけない。',
//     content: ``,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 15,
//     title: '<br>16.私は産学連携に興味がある。',
//     content: `専門学校にはやっぱり就職だろう？これからどんな事があるのを先に知った方がいいと思うね`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 16,
//     title: '<br>17.私はパソコンで働くことを楽しみしている。',
//     content: `エンジニアもデザイナーも！パソコンがあれば仕事ができる！！`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 17,
//     title: '<br>18.私はプロジェクトを参加して経験を貯めるのに興味がある。',
//     content: `エンジニアもデザイナーも！パソコンがあれば仕事ができる！！`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 18,
//     title: '<br>19.仕事で新しい知識を学ぶのが楽しい。',
//     content: `ITの知識毎日更新しているので、いつも新しい技術を学ぶ心構えが必要！`,
//     img: ``,
//     bubble: ``,
//   },
//   {
//     id: 19,
//     title: '<br><br>20.簡単な手段で複雑な問題を解決することができる。',
//     content: ``,
//     img: ``,
//     bubble: ``,
//   },
// ];

// const rank = [
//   {
//     id: 0,
//     rank: 'img/A.svg',
//     commend:
//       '<b>おめでとうございます！</b><br>優秀なWebデザイン科の学生になる準備はもう完璧にできたそうだよ～',
//   },
//   {
//     id: 1,
//     rank: 'img/B.svg',
//     commend:
//       '<b>おめでとうございます！</b><br>Webデザイン科の学生になる準備はもう大体できたそうだよ～',
//   },
//   {
//     id: 2,
//     rank: 'img/C.svg',
//     commend:
//       '<b>お疲れ様です</b><br>Webデザイン科の学生になるのはあなたに対して大変そうだがなんでも乗り越えるだろうか。',
//   },
//   {
//     id: 3,
//     rank: 'img/D.svg',
//     commend:
//       '<b>頑張ろう</b><br>あ～Webデザイン科の学生になる準備はまだだろう。もっと調べて、深く知っていこうか。',
//   },
//   {
//     id: 4,
//     rank: 'img/E.svg',
//     commend:
//       '<b>頑張ろう！！</b><br>Webデザイン科に入ったら厳しい挑戦に違いないだろう。もう一回診断をやってみようか。',
//   },
// ];

const newRank = [
  {
    id: 0,
    rank: 'img/A.svg',
    commend:
      '<b>おめでとうございます！</b><br>優秀なWebデザイン科の学生になる準備はもう完璧にできたそうだよ～',
  },
  {
    id: 1,
    rank: 'img/B.svg',
    commend:
      '<b>あともう少し！！</b><br>オープンキャンパスに参加して、実際にWebデザイン科を体験してみよう！',
  },
  {
    id: 2,
    rank: 'img/C.svg',
    commend:
      '<b>もう少し準備してみよう！</b><br>オープンキャンパスに参加して、サイトも詳しく見てみましょう！',
  },
];
//-----defination-----//

const quiz_title = document.querySelector('.quiz_title');
const quiz_content = document.querySelector('.quiz_content');
const btns = document.querySelectorAll('button');

const bgcBox = document.querySelector('bgc_pic');
const bgc_img = document.createElement('img');

const rank_show = document.querySelector('.score_page');

const ranking = document.querySelector('.rank');
const commend = document.querySelector('.commend');

const jec_btn = document.querySelector('.jec');
const get_doc = document.querySelector('.get_doc');
const hotpage = document.querySelector('.hotpage');
const opencampus = document.querySelector('.opencampus');

const rankingPic = document.createElement('img');

const counterElement = document.querySelector('.counter');

console.log(counterElement);

console.log(jec_btn);
console.log(get_doc);
console.log(hotpage);

let counter = 1;
let score = -1;

//--------counter--------//

let count = 0;
const totalcount = 10;

function updatecount() {
  counterElement.textContent = `${count}/${totalcount}`;
}

updatecount();

function pluscount() {
  if (count < totalcount) {
    count++;
    updatecount();
  }
}

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (counter > newQuiz.length) {
      //...
    } else {
      pluscount();
    }
  });
});

// counterElement.addEventListener('click', pluscount);

//-----------------------//

//--------------------//

function changeQuiz() {
  quiz_title.innerHTML = newQuiz[counter - 1].title;

  quiz_content.innerHTML = newQuiz[counter - 1].content;

  //-----内容有無判断-----//

  if (quiz_content.textContent === '') {
    quiz_content.classList.add('quiz_content_hide');
  } else {
    quiz_content.classList.remove('quiz_content_hide');
  }

  //--------------------//

  //-----画像インプット-----//

  bgc_img.src = newQuiz[counter - 1].img;
  document.querySelector('.bgc_pic').appendChild(bgc_img);

  //--------------------//
}
changeQuiz();

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (counter > newQuiz.length) {
      if (btn.className.match('yes')) {
        score += 2;
      } else if (btn.className.match('no')) {
        score += 0;
      } else {
        score += 1;
      }

      console.log(counter);

      if (counter >= 11) {
        rank_show.classList.add('score_show');

        console.log(score);

        //-----ranking-----//

        if (score >= 20) {
          rankingPic.src = newRank[0].rank;
          document.querySelector('.rank').appendChild(rankingPic);

          commend.innerHTML = newRank[0].commend;

          jec_btn.classList.add('jec_hide');
          // hotpage.classList.add('hotpage_hide');
          opencampus.classList.add('opencampus_hide');
        } else if (score >= 13) {
          rankingPic.src = newRank[1].rank;
          document.querySelector('.rank').appendChild(rankingPic);

          commend.innerHTML = newRank[1].commend;

          jec_btn.classList.add('jec_hide');
          get_doc.classList.add('get_doc_hide');
          // hotpage.classList.add('hotpage_hide');
        }
        // if (score >= 10)
        else {
          rankingPic.src = newRank[2].rank;
          document.querySelector('.rank').appendChild(rankingPic);

          commend.innerHTML = newRank[2].commend;

          jec_btn.classList.add('jec_hide');
          // hotpage.classList.add('hotpage_hide');
          get_doc.classList.add('get_doc_hide');
        }
        // else if (score >= 8) {
        //   rankingPic.src = rank[3].rank;
        //   document.querySelector('.rank').appendChild(rankingPic);

        //   commend.innerHTML = rank[3].commend;

        //   get_doc.classList.add('get_doc_hide');
        // } else {
        //   rankingPic.src = rank[4].rank;
        //   document.querySelector('.rank').appendChild(rankingPic);

        //   commend.innerHTML = rank[4].commend;

        //   get_doc.classList.add('get_doc_hide');
        // }
      } else {
        rank_show.classList.remove('score_show');
      }

      // quiz_title.innerHTML = "点数：" + score
      // quiz_content.innerHTML = ""
    } else {
      if (btn.className.match('yes')) {
        score += 2;
      } else if (btn.className.match('no')) {
        score += 0;
      } else {
        score += 1;
      }
      changeQuiz();

      console.log(counter);
      console.log(score);
    }
    counter++;
  });
});
