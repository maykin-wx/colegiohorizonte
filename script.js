let imagemIndex = 0; 
const imagens = document.querySelectorAll('.carrossel-imagem'); 
const totalImagens = imagens.length;

function mudarImagem(direcao) {
  imagemIndex += direcao;

  
  if (imagemIndex >= totalImagens) {
    imagemIndex = 0;
  } else if (imagemIndex < 0) {
    imagemIndex = totalImagens - 1;
  }

 
  const novaPosicao = -imagemIndex * 100;  
  document.querySelector('.carrossel-imagens').style.transform = `translateX(${novaPosicao}%)`;
}


setInterval(() => {
  mudarImagem(1);
}, 5000); 
