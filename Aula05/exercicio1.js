document.addEventListener("DOMContentLoaded", function() {

  const titulo = document.createElement("h1");
  titulo.textContent = "Contador de pessoas";
  document.body.insertBefore(titulo, document.body.firstChild);

  let homensCount = 0;
  let mulheresCount = 0;

  const contadorDiv = document.getElementById("contador");

  const totalElement = document.createElement("div");
  totalElement.id = "total";
  contadorDiv.appendChild(totalElement);

  const botaoReset = document.createElement("button");

  const imagemRecarregar = document.createElement("img");
  imagemRecarregar.src = "recarregar.png";
  botaoReset.appendChild(imagemRecarregar);
  botaoReset.classList.add("botao-reset");

  botaoReset.addEventListener("click", function() {
    homensCount = 0;
    mulheresCount = 0;
    atualizarContador();
  });
  contadorDiv.appendChild(botaoReset);

  const homensDiv = document.createElement("div");
  homensDiv.id = "homens";
  contadorDiv.appendChild(homensDiv);

  const mulheresDiv = document.createElement("div");
  mulheresDiv.id = "mulheres";
  contadorDiv.appendChild(mulheresDiv);

  const avatarDiv = document.createElement("div");
  avatarDiv.id = "avatar";
  contadorDiv.appendChild(avatarDiv);

  const avatar1Div = document.createElement("div");
  avatar1Div.id = "avatar1";
  contadorDiv.appendChild(avatar1Div);

  function atualizarContador() {
    totalElement.textContent = "TOTAL: " + (homensCount + mulheresCount);

    while (homensDiv.firstChild) {
      homensDiv.removeChild(homensDiv.firstChild);
    }

    homensDiv.appendChild(botaoAdicionarHomem);
    homensDiv.appendChild(botaoRetirarHomem);
    homensDiv.appendChild(document.createTextNode("Homens: " + homensCount));

    while (mulheresDiv.firstChild) {
      mulheresDiv.removeChild(mulheresDiv.firstChild);
    }

    mulheresDiv.appendChild(botaoAdicionarMulher);
    mulheresDiv.appendChild(botaoRetirarMulher);
    mulheresDiv.appendChild(document.createTextNode("Mulheres: " + mulheresCount));
  }

  function adicionarHomem() {
    homensCount++;
    atualizarContador();
  }

  function retirarHomem() {
    if (homensCount > 0) {
      homensCount--;
      atualizarContador();
    }
  }

  function adicionarMulher() {
    mulheresCount++;
    atualizarContador();
  }

  function retirarMulher() {
    if (mulheresCount > 0) {
      mulheresCount--;
      atualizarContador();
    }
  }

  const botaoAdicionarHomem = document.createElement("button");
  botaoAdicionarHomem.textContent = "+";
  botaoAdicionarHomem.addEventListener("click", adicionarHomem);

  const botaoRetirarHomem = document.createElement("button");
  botaoRetirarHomem.textContent = "-";
  botaoRetirarHomem.addEventListener("click", retirarHomem);

  const botaoAdicionarMulher = document.createElement("button");
  botaoAdicionarMulher.textContent = "+";
  botaoAdicionarMulher.addEventListener("click", adicionarMulher);

  const botaoRetirarMulher = document.createElement("button");
  botaoRetirarMulher.textContent = "-";
  botaoRetirarMulher.addEventListener("click", retirarMulher);

  atualizarContador();

  const avatarMulher = document.createElement("img");
  avatarMulher.src = "avatar_mulher.png";
  avatarDiv.appendChild(avatarMulher);

  const avatarHomem = document.createElement("img");
  avatarHomem.src = "avatar_homem.png";
  avatar1Div.appendChild(avatarHomem);

  const voltar = document.createElement("div");
  voltar.classList.add("voltar");

  const botaoVoltar = document.createElement("button");
  botaoVoltar.textContent = "Voltar";
  botaoVoltar.addEventListener("click", function() {
    window.history.back();
  });
  voltar.appendChild(botaoVoltar);

  contadorDiv.appendChild(voltar);
});
