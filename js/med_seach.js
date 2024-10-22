function filterTableMed() {
    // Obtém o valor do campo de seleção (select)
    let select = document.getElementById("filterSelect");
    let filter = select.value;
  
    // Obtém o valor do campo de busca (input)
    let input = document.getElementById("searchInput");
    let searchValue = input.value.toLowerCase();
  
    // Obtém a tabela e as linhas
    let table = document.getElementById("myTable");
    let tr = table.getElementsByTagName("tr");
  
    // Loop nas linhas da tabela (ignorando o cabeçalho)
    for (let i = 1; i < tr.length; i++) {
      let name = tr[i].getElementsByTagName("td")[0]; // Coluna de nome
      let crm = tr[i].getElementsByTagName("td")[1];  // Coluna de CRM
      let city = tr[i].getElementsByTagName("td")[2]; // Coluna de cidade
  
      if (name && crm && city) {
        // Obtém o texto das células de nome, CRM e cidade
        let nameText = name.innerText.toLowerCase();
        let crmText = crm.innerText.toLowerCase();
        let cityText = city.innerText.toLowerCase();
  
        // Verifica se a linha atende aos critérios de filtro e busca
        let matchesSearch = false;
  
        if (filter === 'name') {
          matchesSearch = nameText.includes(searchValue);
        } else if (filter === 'crm') {
          matchesSearch = crmText.includes(searchValue);
        } else if (filter === 'city') {
          matchesSearch = cityText.includes(searchValue);
        }
  
        // Exibe ou oculta a linha com base na busca
        tr[i].style.display = matchesSearch ? "" : "none";
      }
    }
  }
  