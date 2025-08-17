const imagens = document.querySelectorAll("img");

imagens.forEach(img => {
  img.onclick = () => alert("Bem vindo ao meu primeiro projeto de programação");
});