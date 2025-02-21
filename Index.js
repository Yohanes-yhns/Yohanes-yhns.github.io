const openPopupCS = document.querySelector(".HubungiKamibtn");

const overlayCS = document.createElement("div");
overlayCS.classList.add("overlay");
document.body.appendChild(overlayCS);

const popupCS = document.createElement("div");
popupCS.classList.add("popupCS");
document.body.appendChild(popupCS);

const popupTextCS = document.createElement("p");
popupTextCS.innerText = "Silahkan pilih Layanan";
popupTextCS.classList.add("popupTextCS");
popupCS.appendChild(popupTextCS);

const popupBtnFaskesKesehatan = document.createElement("button");
popupBtnFaskesKesehatan.innerText = "Faskes Kesehatan";
popupBtnFaskesKesehatan.classList.add("popupBtnFaskesKesehatan");
popupBtnFaskesKesehatan.addEventListener("click", () => {
    popupRS.style.display = "block";
    overlayCS.style.display = "block";
})
popupCS.appendChild(popupBtnFaskesKesehatan);

const popupBtnApotek = document.createElement("button");
popupBtnApotek.innerText = "Apotek";
popupBtnApotek.classList.add("popupBtnApotek");
popupBtnApotek.addEventListener("click", () => {
    window.location.href = "Apotik.html";
});
popupCS.appendChild(popupBtnApotek);

const popupBtnOptik = document.createElement("button");
popupBtnOptik.innerText = "Optik";
popupBtnOptik.classList.add("popupBtnOptik");
popupCS.appendChild(popupBtnOptik);

const popupBtnAlatKesehatan = document.createElement("button");
popupBtnAlatKesehatan.innerText = "Alat Kesehatan";
popupBtnAlatKesehatan.classList.add("popupBtnAlatKesehatan");
popupBtnAlatKesehatan.addEventListener("click", () => {
    window.location.href = "ProdukAlatKesehatan.html";
});
popupCS.appendChild(popupBtnAlatKesehatan);

const popupBtnLaboratorium = document.createElement("button");
popupBtnLaboratorium.innerText = "Laboratorium";
popupBtnLaboratorium.classList.add("popupBtnLaboratorium");
popupBtnLaboratorium.addEventListener("click", () => {
    window.open("https://prodia.co.id/id/", "_blank");
});
popupCS.appendChild(popupBtnLaboratorium);

const popupBtnProdukAsuransi = document.createElement("button");
popupBtnProdukAsuransi.innerText = "Produk Asuransi";
popupBtnProdukAsuransi.classList.add("popupBtnProdukAsuransi");
popupBtnProdukAsuransi.addEventListener("click", () => {
    popupAK.style.display = "block";
    popupCS.style.display = "block";
    overlayCS.style.display = "none";
});
popupCS.appendChild(popupBtnProdukAsuransi);

const popupBtnProdukPinjaman = document.createElement("button");
popupBtnProdukPinjaman.innerText = "Produk Pinjaman";
popupBtnProdukPinjaman.classList.add("popupBtnProdukPinjaman");
popupCS.appendChild(popupBtnProdukPinjaman);

const popupBtnLayananBantuan = document.createElement("button");
popupBtnLayananBantuan.innerText = "Layanan Bantuan Biaya Kesehatan";
popupBtnLayananBantuan.classList.add("popupBtnLayananBantuan");
popupCS.appendChild(popupBtnLayananBantuan);

const closeButtonCS = document.createElement("a");
closeButtonCS.innerText = "x";
closeButtonCS.classList.add("closeButtonCS")
closeButtonCS.addEventListener("click", (event) => {
    event.stopPropagation();
    popupCS.style.display="none";
    overlayCS.style.display="none";
})
popupCS.appendChild(closeButtonCS);

if (openPopupCS) {
    openPopupCS.addEventListener ("click", () => {
        popupCS.style.display = "block";
        overlayCS.style.display = "block";
    })
}

overlayCS.addEventListener("click", () => {
    popupCS.style.display = "none";
    overlayCS.style.display = "none";
});

// Popup RS
const openPopupRS = document.querySelector(".btn3");

const overlayRS = document.createElement("div");
overlayRS.classList.add("overlay");
document.body.appendChild(overlayRS);

const popupRS = document.createElement("div");
popupRS.classList.add("popupRS");
document.body.appendChild(popupRS);

const popupTextRS = document.createElement("p");
popupTextRS.innerText = "Silahkan pilih partner Rumah Sakit";
popupTextRS.classList.add("popupTextRS");
popupRS.appendChild(popupTextRS);

const popupImageSiloam = document.createElement("img");
popupImageSiloam.src = "Images/Siloam.png";
popupImageSiloam.alt = "Gambar dalam PopUp";
popupImageSiloam.classList.add("SiloaminpopupImage");
popupRS.appendChild(popupImageSiloam);

const popupImageRoyalTaruma = document.createElement("img");
popupImageRoyalTaruma.src = "Images/ROYALTARUMA.jpg";
popupImageRoyalTaruma.alt = "Gambar dalam PopUp";
popupImageRoyalTaruma.classList.add("RoyalTarumainpopupImage");
popupRS.appendChild(popupImageRoyalTaruma);

const popupImageMayapada = document.createElement("img");
popupImageMayapada.src = "Images/mayapadahospital.jpg";
popupImageMayapada.alt = "Gambar dalam PopUp";
popupImageMayapada.classList.add("MayapadainpopupImage");
popupRS.appendChild(popupImageMayapada);

const popupImageBrawijaya = document.createElement("img");
popupImageBrawijaya.src = "Images/RSBrawijaya.png";
popupImageBrawijaya.alt = "Gambar dalam PopUp";
popupImageBrawijaya.classList.add("BrawijayainpopupImage");
popupRS.appendChild(popupImageBrawijaya);

const btnSiloam = document.createElement("button");
btnSiloam.innerText = "Siloam";
btnSiloam.classList.add("btnSiloam");
btnSiloam.addEventListener("click", () => {
    window.open("https://www.siloamhospitals.com/en/", "_blank");
});
popupRS.appendChild(btnSiloam);

const btnRoyalTaruma = document.createElement("button");
btnRoyalTaruma.innerText = "Royal Taruma";
btnRoyalTaruma.classList.add("btnRoyalTaruma");
btnRoyalTaruma.addEventListener("click", () => {
    window.open("https://rsroyaltaruma.com/", "_blank");
});
popupRS.appendChild(btnRoyalTaruma);

const btnMayapada = document.createElement("button");
btnMayapada.innerText = "Mayapada";
btnMayapada.classList.add("btnMayapada");
btnMayapada.addEventListener("click", () => {
    window.open("https://mayapadahospital.com/", "_blank");
});
popupRS.appendChild(btnMayapada);

const btnBrawijaya = document.createElement("button");
btnBrawijaya.innerText = "Brawijaya";
btnBrawijaya.classList.add("btnBrawijaya");
btnBrawijaya.addEventListener("click", () => {
    window.open("https://brawijayahospital.com/");
});
popupRS.appendChild(btnBrawijaya);

const closeButtonRS = document.createElement("a");
closeButtonRS.innerText = "x";
closeButtonRS.classList.add("closeButtonRS")
closeButtonRS.addEventListener("click", (event) => {
    event.stopPropagation();
    popupRS.style.display="none";
    overlayRS.style.display="none";
})
popupRS.appendChild(closeButtonRS);

if (openPopupRS) {
    openPopupRS.addEventListener("click", () => {
    popupRS.style.display="block";
    overlayRS.style.display="block";
    })
}

overlayRS.addEventListener("click", () => {
    popupRS.style.display = "none";
    overlayRS.style.display = "none";
});

const openPopupAK = document.querySelector(".btn4");

const overlayAK = document.createElement("div");
overlayAK.classList.add("overlay");
document.body.appendChild(overlayAK);

const popupAK = document.createElement("div");
popupAK.classList.add("popupAK");
document.body.appendChild(popupAK);

const popupTitleAK = document.createElement("p");
popupTitleAK.innerText = "Asuransi Kesehatan";
popupTitleAK.classList.add("popupTitleAK");
popupAK.appendChild(popupTitleAK);

const popupImageACA = document.createElement("img");
popupImageACA.src = "Images/ACA.png";
popupImageACA.alt = "Gambar dalam Popup";
popupImageACA.classList.add("popupImageACA");
popupAK.appendChild(popupImageACA);

const popupImageAXA = document.createElement("img");
popupImageAXA.src = "Images/AXA.jpeg";
popupImageAXA.alt = "Gambar dalam Popup";
popupImageAXA.classList.add("popupImageAXA");
popupAK.appendChild(popupImageAXA);

const BtnACA = document.createElement("button");
BtnACA.innerText = "ACA";
BtnACA.classList.add("BtnACA");
BtnACA.addEventListener("click", () => {
    window.open("https://www.aca.co.id/Home", "_blank");
});
popupAK.appendChild(BtnACA);

const BtnAXA = document.createElement("button");
BtnAXA.innerText = "AXA";
BtnAXA.classList.add("BtnAXA");
BtnAXA.addEventListener("click", () => {
    window.open("https://axa.id/", "_blank");
});
popupAK.appendChild(BtnAXA);

const closeButtonAK = document.createElement("a")
closeButtonAK.innerText = "x";
closeButtonAK.classList.add("closeButtonAK");
closeButtonAK.addEventListener("click", () => {
    popupAK.style.display = "none";
    overlayAK.style.display = "none";   
})
popupAK.appendChild(closeButtonAK);

if (openPopupAK) {
    openPopupAK.addEventListener("click", () => {
    popupAK.style.display = "block";
    overlayAK.style.display = "block";
    })
}

if (overlayAK) {
    overlayAK.addEventListener("click", () => {
    popupAK.style.display = "none";
    overlayAK.style.display = "none";    
    })
}

const openLaboratorium = document.querySelector(".btn6");
openLaboratorium.addEventListener("click", () => {
    window.open("https://prodia.co.id/id/", "_blank");
});



