// local review data(these are array)

const reviews = [
    {
        id: 1,
        question: "Q) Do you accept offline donation?",
        text: "A) Currently we do not accept offline donation. You can donate using Razorpay by clicking the Donate button.",
    },
    {
        id: 2,
        question: "Q) How do i make anonymous donation?",
        text: "A) As per Government regulations, recipient organisations must maintain records of donors’ tax identity.  Therefore, we cannot accept anonymous donations.",
    },
    {
        id: 3,
        question: "Q) When can I expect my receipt?",
        text: "A) You will receive tax receipt immediately of your donation.",
    },
    {
        id: 4,
        question: "Q) Will i get a tax deduction on my donation, and by when?",
        text: "A) Yes, all donations made by tax-paying citizens to us are 50% tax-deductible under Section 80G of the Income Tax Act, 1961. We will send you an 80G certificate to the email address you have provided within ten working days of receiving your donation."

    },
];

// select items

const question = document.getElementById("h4");
const text = document.getElementById("info");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

// set starting item

let currentItem = 0;

// load intial item

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[currentItem];
    question.textContent = item.question;
    text.textContent = item.text;
}

//show next person

btn2.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//show previous person

btn1.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
