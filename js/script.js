
document.addEventListener("DOMContentLoaded", () => {
//Ubah Nama
    function ubahnama() {
      const name = prompt("Masukkan nama!");
      if (name) {
        document.getElementById("name-display").textContent = name;
      }
    }

    const changeNameButton = document.getElementById("changeName");
    changeNameButton.addEventListener("click", () => {
      ubahnama();
    });

// Required Form   
    const form = document.getElementById("message-form");
    const output = document.getElementById("message-output");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("input-name").value.trim();
      const dob = document.getElementById("input-dob").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const message = document.getElementById("input-message").value.trim();
  
      if (!name || !dob || !gender || !message) {
        alert("Semua isian harus diisi!");
        return;
      }

      output.innerHTML = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `;
    });
  });


  var responsiveSlider = function () {
    var slider = document.getElementById("slider");
    var slideList = document.getElementById("slideWrap");
    var slides = slideList.querySelectorAll("li");
    var count = 1; // Mulai dari slide pertama (asli)
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    var totalSlides = slides.length;

    // Clone slides for seamless looping
    var firstClone = slides[0].cloneNode(true);
    var lastClone = slides[totalSlides - 1].cloneNode(true);
    slideList.appendChild(firstClone); // Clone pertama ke akhir
    slideList.insertBefore(lastClone, slides[0]); // Clone terakhir ke awal

    totalSlides += 2; // Update jumlah slide (termasuk clone)
    slideList.style.transform = "translateX(-100%)"; // Posisi awal di slide pertama
    slideList.style.transition = "none"; // Nonaktifkan transisi saat setup awal

    // Update posisi slider
    var updateSliderPosition = function () {
        slideList.style.transition = "transform 0.5s ease"; // Aktifkan transisi
        slideList.style.transform = "translateX(-" + count * 100 + "%)";
    };

    // Reset posisi slider setelah transisi selesai
    slideList.addEventListener("transitionend", function () {
        if (count === 0) {
            slideList.style.transition = "none"; // Matikan transisi
            count = totalSlides - 2; // Pindah ke slide terakhir (asli)
            slideList.style.transform = "translateX(-" + count * 100 + "%)";
        } else if (count === totalSlides - 1) {
            slideList.style.transition = "none"; // Matikan transisi
            count = 1; // Pindah ke slide pertama (asli)
            slideList.style.transform = "translateX(-100%)";
        }
    });

    // Pindah ke slide sebelumnya
    var prevSlide = function (event) {
        if (event) event.preventDefault();
        if (count > 0) {
            count--;
            updateSliderPosition();
        }
    };

    // Pindah ke slide berikutnya
    var nextSlide = function (event) {
        if (event) event.preventDefault();
        if (count < totalSlides - 1) {
            count++;
            updateSliderPosition();
        }
    };

    prev.addEventListener("click", prevSlide);
    next.addEventListener("click", nextSlide);

    // Auto slide setiap 8 detik
    var autoSlide = setInterval(function () {
        nextSlide(); // Pindah ke slide berikutnya
    }, 8000); // 8000ms = 8 detik

};

window.onload = responsiveSlider;


