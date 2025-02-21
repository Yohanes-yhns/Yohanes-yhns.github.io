// Fungsi untuk menampilkan popup
function showPopup(productName, productImage, productPrice, buttonElement) {
    // Ambil jumlah barang dari input yang terkait dengan tombol yang diklik
    let quantityInput = buttonElement.previousElementSibling;
    let quantity = parseInt(quantityInput.value);
    
    // Hitung total harga
    let totalPrice = productPrice * quantity;

    let overlay = document.querySelector(".overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.appendChild(overlay);

        // Tambahkan event listener agar overlay bisa ditutup saat diklik
        overlay.addEventListener("click", closePopup);
    }
    overlay.style.display = "block";

    // Buat elemen popup
    let popup = document.createElement("div");
    popup.classList.add("popup");

    // Isi popup dengan informasi produk
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Detail Pembelian</h2>
            <img src="${productImage}" alt="${productName}" style="width:150px;">
            <p><strong>Nama Produk:</strong> ${productName}</p>
            <p><strong>Harga:</strong> Rp ${productPrice.toLocaleString()}</p>
            <p><strong>Jumlah:</strong> ${quantity}</p>
            <p><strong>Total Harga:</strong> Rp ${totalPrice.toLocaleString()}</p>
            <button class="close-btn1" onclick="closePopup(this)">x</button>
            <button class="btnbuy">Buy</button>
        </div>
    `;

    // Tambahkan popup ke dalam body
    document.body.appendChild(popup);
    
    popup.querySelector(".btnbuy").addEventListener("click", function () {
        showPopup2(productName, productImage, productPrice, quantity, totalPrice);
    });
}

function showPopup2(productName, productImage, productPrice, quantity, totalPrice) {
    let overlay = document.querySelector(".overlay");
    overlay.style.display = "block";

    let popup2 = document.createElement("div");
    popup2.classList.add("popup2");

    popup2.innerHTML = `
        <div class="popup-content2">
    <h2>Konfirmasi Pembelian</h2>

    <div class="content-wrapper">
        <div class="left-content">
            <img src="${productImage}" alt="${productName}" style="width:150px;">
            <p><strong>Nama Produk:</strong> ${productName}</p>
            <p><strong>Harga:</strong> Rp ${productPrice.toLocaleString()}</p>
            <p><strong>Jumlah:</strong> ${quantity}</p>
            <p><strong>Total Harga:</strong> Rp ${totalPrice.toLocaleString()}</p>
        </div>

        <div class="right-content">
            <div class="formPembelian">
                <label>Nama Pembeli:</label>
                <input type="text" id="buyerName" placeholder="Masukkan Nama">

                <label>Nomor HP:</label>
                <input type="text" id="buyerPhone" placeholder="Masukkan Nomor HP">

                <label>Alamat:</label>
                <textarea id="buyerAddress" placeholder="Masukkan Alamat"></textarea>

                <label>Jasa Pengiriman:</label>
                <select id="shippingMethod">
                    <option value="JNE">JNE</option>
                    <option value="SiCepat">SiCepat</option>
                    <option value="TIKI">TIKI</option>
                </select>
            </div>
        </div>
    </div>

    <div class="button-wrapper">
        <button class="close-btn2" onclick="closePopup2()">x</button>
        <button class="paybtn">Pay</button>
    </div>
</div>
    `;

    document.body.appendChild(popup2);
}

// Fungsi untuk menutup popup
function closePopup() {
    let popup = document.querySelector(".popup");
    let overlay = document.querySelector(".overlay");

    if (popup) {
        popup.remove();
    }
    if (overlay) {
        overlay.style.display = "none";
    }
}

function closePopup2() {
    let popup2 = document.querySelector(".popup2");
    let overlay = document.querySelector(".overlay");

    if (popup2) {
        popup2.remove();
    }
    if (overlay) {
        overlay.style.display = "none";
    }
}

// Event listener untuk semua tombol "Buy"
document.addEventListener("DOMContentLoaded", function() {
    let buyButtons = document.querySelectorAll(".btn");
    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Ambil informasi produk dari elemen terkait
            let productContainer = button.parentElement;
            let productName = productContainer.querySelector(".Title").textContent;
            let productImage = productContainer.querySelector("img").src;
            let productPriceText = productContainer.querySelector(".Harga").textContent;
            let productPrice = parseInt(productPriceText.replace("Rp ", "").replace(".", "").replace(",", ""));

            // Tampilkan popup
            showPopup(productName, productImage, productPrice, button);
        });
    });
});
