const quizArr = [
    {
        id: 0,
        title: "１.私はストレスを解消する方法がある。",
        content: `例えば：スポーツしたり、寝たりすることでリラックスする。
                  研究による、ストレスコントロール力が高ければ、問題に直面しても乗り越えることができて、前向きに仕事に取り組むことができる。`
    },
    {
        id: 1,
        title: "２.私は厳しい環境で成長できる。",
        content: `私を破壊するに至らないすべてのことが、
        私をさらに強くする。
        
        ―ニーチェ―`
    },
    {
        id: 2,
        title: "3.私は努力が報われると信じている。",
        content: ` `
    }
]

const quiz_title = document.querySelector(".quiz_title")
const quiz_content = document.querySelector(".quiz_content")
const btns = document.querySelectorAll("button")

let counter = 1

let score = 0

function changeQuiz() {
    quiz_title.innerHTML = quizArr[counter - 1].title
    quiz_content.innerHTML = quizArr[counter -1].content
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
})
