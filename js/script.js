const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass() {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', inverted);
}

function toggleLocalStorage() {
    if(isLight()) {
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight() {
    return localStorage.getItem("light");
}

if(isLight()) {
    toggleRootClass();
}

/*Confirmação do botão apagar*/
var botoes = document.body.querySelectorAll(".erase");

for(var x=0; x<botoes.length; x++){
   botoes[x].addEventListener("click", function(){
       confirm('Você tem certeza?')
   });
}

function deletarLinha(btn){
    var linha = btn.parentNode.parentNode;
    // Remove a linha da tabela
    linha.parentNode.removeChild(linha);
}

function filterTable() {
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
      let birth = tr[i].getElementsByTagName("td")[1]; // Coluna de nascimento
      let doctor = tr[i].getElementsByTagName("td")[2]; // Coluna de médico
  
      if (name && birth && doctor) {
        // Obtém o texto das células de nome, nascimento e médico
        let nameText = name.innerText.toLowerCase();
        let birthText = birth.innerText.toLowerCase();
        let doctorText = doctor.innerText.toLowerCase();
  
        // Verifica se a linha atende aos critérios de filtro e busca
        let matchesSearch = false;
  
        if (filter === 'name') {
          matchesSearch = nameText.includes(searchValue);
        } else if (filter === 'birth') {
          matchesSearch = birthText.includes(searchValue);
        } else if (filter === 'med') {
          matchesSearch = doctorText.includes(searchValue);
        }
  
        // Exibe ou oculta a linha com base na busca
        tr[i].style.display = matchesSearch ? "" : "none";
      }
    }
  }

