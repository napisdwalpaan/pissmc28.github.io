// Ambil semua tombol link
const buttons = document.querySelectorAll(".link-button");

// Tambahkan efek klik ke setiap tombol
buttons.forEach(button => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // menghentikan link sementara

    // Tambah efek animasi
    button.classList.add("clicked");

    // Efek suara klik (opsional)
    const sound = new Audio("https://www.soundjay.com/buttons/sounds/button-09.mp3");
    sound.play();

    // Ambil tujuan link
    const target = button.getAttribute("href");

    // Delay sebelum pindah halaman (biar animasi terlihat)
    setTimeout(() => {
      button.classList.remove("clicked");

      if (target !== "#") {
        window.open(target, "_blank");
      } else {
        alert("ga ada contac dulu  😅");
      }
    }, 300);
  });
});
