export const sendWhatsAppMessage = (countryNumberCode, number, message) => {
    const encodedMessage = encodeURIComponent(message)

    const url = `https://wa.me/${countryNumberCode}${number}?text=${encodedMessage}`;
    window.open(url, "_blank")
};
