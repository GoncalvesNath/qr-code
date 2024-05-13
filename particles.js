


function trocarFundo() {
  const larguraTela = window.innerWidth;

  if (larguraTela > 780) {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles-config.json', function () {
      console.log('callback - particles.js config loaded');
    });
    document.body.style.backgroundImage = "";
    // Não é necessário chamar particlesJS novamente aqui
    // a configuração será carregada pelo particlesJS.load
  } else {
    var canvas = document.getElementsByTagName("canvas");
    if (canvas.length > 0) {
      canvas[0].style.display = "none";
    }
    
    document.body.style.backgroundImage = 'url("images/particles.png")';
 
  }
}

// Executa a função ao carregar a página e redimensionar a janela
window.onload = trocarFundo;
window.addEventListener('resize', trocarFundo);

