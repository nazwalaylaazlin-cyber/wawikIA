function pay(method) {
  let status = document.getElementById("status");

  if (method === "DANA") {
    status.innerHTML = "💙 Kamu memilih pembayaran via DANA (contoh: 08xxxxxx)";
  } else if (method === "GoPay") {
    status.innerHTML = "💚 Kamu memilih pembayaran via GoPay (contoh: 08xxxxxx)";
  }

  // efek lucu bintang muncul
  for (let i = 0; i < 15; i++) {
    let star = document.createElement("div");
    star.classList.add("star");

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1500);
  }
}
