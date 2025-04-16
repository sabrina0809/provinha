function calcularPorcentagem() {
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);
    const preco = parseFloat(document.getElementById('preco').value);

    if (isNaN(quantidade) || isNaN(porcentagem)) {
      document.getElementById('resultado').innerText = "Por favor, preencha os dois campos corretamente.";
      return;
    }

  
    const resultado = (quantidade * preco * porcentagem) / 100;
    document.getElementById('resultado').innerText = 
    `Cliente Joana
    Quantidade:${quantidade}
    Preço unitario:R$${preco}
    Desconto aplicado:%${porcentagem} 
    Total com desconto:R$${resultado}`;
  }

