// Função para preencher os dados da empresa na página
function preencherDados(dados) {
    const dadosEmpresa = document.getElementById('dadosEmpresa');
    let html = '';
    for (const [chave, valor] of Object.entries(dados)) {
      html += `<p><strong>${chave}:</strong> ${valor}</p>`;
    }
    dadosEmpresa.innerHTML = html;
  }

  // Função para buscar os dados da API com base no CNPJ
  async function buscarDados() {
    try {
      let cnpj = document.getElementById('inputCnpj').value;
      // Removendo caracteres não numéricos do CNPJ
      cnpj = cnpj.replace(/\D/g, '');
      // Adicionando zeros à esquerda, se necessário
      while (cnpj.length < 14) {
        cnpj = '0' + cnpj;
      }
      const response = await fetch(`https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`);
      const dados = await response.json();
      // Preenchendo os dados na página
      preencherDados(dados);
    } catch (error) {
      console.error('Erro ao buscar os dados da API:', error);
    }
  }