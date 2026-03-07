import { sendWhatsAppMessage } from "../infra/js/sendMessageMethods.js";

/* =====================
   Kahuna Information
   ===================== */
const kahunaCountryCode = 502;
const kahunaWhatsAppNumber = 41362892;


/* =====================
   Ask for a Plan
   ===================== */
const firstPlan = document.querySelector("#firstPlan");
const secondPlan = document.querySelector("#secondPlan");
const thirdPlan = document.querySelector("#thirdPlan");

const plansArray = [firstPlan, secondPlan, thirdPlan]

plansArray.forEach((plan) => {
    const planName = plan.querySelector(".planName").textContent;
    const planButton = plan.querySelector(".btn");

    planButton.addEventListener('click', () => {
        const questionMessage = `Me interesa el plan ${planName}, ¿me pueden dar más información por aquí?`;

        sendWhatsAppMessage(kahunaCountryCode, kahunaWhatsAppNumber, questionMessage)
    });
});


/* =====================
   Send Contact Form
   ===================== */
const sendFormButton = document.getElementById("submitFormBtn")

sendFormButton.addEventListener("click", () => {
    const nameClient = document.getElementById("nameClient").value;
    const emailClient = document.getElementById("emailClient").value;
    const messageClient = document.getElementById("projectDesc").value;

    const sentMessage = `Hola, soy ${nameClient}. Me pueden contactar en ${emailClient}. ${messageClient}`;

    sendWhatsAppMessage(kahunaCountryCode, kahunaWhatsAppNumber, sentMessage);
});
