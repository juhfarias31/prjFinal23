function cadastrarJogo() {
    const name = document.getElementById('name').value;
    const squad = document.getElementById('squad').value;
    const genero = document.getElementById('genero').value;
    const descricao = document.getElementById('descricao').value;
    const integrantes = document.getElementById('integrantes').value;
    let url = document.getElementById('url').value;
    let thumbnailpath = document.getElementById('thumbnailpath').value;

    // Remover o prefixo "http://"
    url = url.replace(/^https?:\/\//, '');
    thumbnailpath = thumbnailpath.replace(/^https?:\/\//, '');

    const requestBody = {
        name,
        integrantes,
        url,
        thumbnailpath,
        genero,
        squad,
        descricao
    };

    fetch('http://localhost:8080/jogos/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
        .then(response => response.json())
        .then(data => {
            alert('Jogo cadastrado com sucesso!');
            document.getElementById('cadastroForm').reset();
             location.reload();
        })
        .catch(error => {
            console.error('Erro ao cadastrar jogo:', error);
        });
}

function ListarJogos() {
    alert("1");

    fetch(`http://localhost:8080/jogos`)
        .then(response => {
            if (response.status === 404) {
                return Promise.reject('Lista de Jogos não encontrada');
            }
            return response.json();
        })
        .then(data => {

            const tbodyElement = document.getElementById('jogos-tabela').querySelector('tbody');
            tbodyElement.innerHTML = '';

            // Preenche a tabela com os resultados da pesquisa
            data.forEach(jogo => {
                const linhaJogo = document.createElement('tr');
                linhaJogo.innerHTML = `
                    <td>${jogo.name}</td>
                    <td>${jogo.squad}</td>
                    <td>${jogo.url}</td>
                    <td>${jogo.thumbnail}</td>
                    <td>${jogo.genero}</td>
                    <td>${jogo.descricao}</td>
                    <td>${jogo.integrantes}</td>
                    <td><a href="https://${jogo.thumbnailpath}">Acesse a imagem</a></td>
                `;
                tbodyElement.appendChild(linhaJogo);
            });  
        })
        // Trata os Erros
        .catch(error => {
            console.error('Erro ao pesquisar funcionário:', error);
            const resultadoPesquisa = document.getElementById('resultadoPesquisa');
            resultadoPesquisa.innerHTML = 'Jopo não encontrado.';
        });
}