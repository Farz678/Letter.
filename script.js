const message = `Hii Lila, how’s your week going? I know it must be really busy and overwhelming because of your UKK. Apalagi setelah kamu cerita tadi, kedengarannya memang terasa nggak adil ya… pasti capek dan bikin kepikiran.\nBut I want you to know this—kamu udah sejauh ini, dan itu bukan hal yang mudah. I’m really proud of you, yesterday, today, and every single day. You’re doing better than you think.\n\nKalau sekarang terasa berat, itu wajar banget. Tapi bukan berarti kamu nggak mampu. I truly believe you can get through this, step by step. Nggak perlu sempurna, cukup lakukan yang terbaik yang kamu bisa hari ini.\n\nAnd hey, kamu nggak sendirian. I’m always here for you—kapanpun kamu butuh tempat cerita, atau sekadar ditemenin.\n\nKamu kuat, kamu hebat, dan kamu berarti banget. Don’t give up, okay?\n\nI love you, Lila 🤍`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}