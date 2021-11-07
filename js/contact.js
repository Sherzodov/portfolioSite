// get the form by its id
const form = document.getElementsByClassName('contactForm');
//1.
const formEvent = form.addEventListener("submit", (event) => {

    let mail = new FormData(form);

    sendMail(mail);
})

const sendMail = (mail) => {
    //1
    fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
        method: 'post', //2,
        body: mail, //3 
    }).then((response) => {
        return response.json();
    });
};

