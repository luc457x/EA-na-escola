function carregarConteudo(pagina) {
            const conteudoDiv = document.getElementById('conteudo');
            
            // Conteúdo dinâmico baseado no botão clicado
            const conteudos = {
                'home': `
                    <h2>Página Inicial</h2>
                `,
                'material': `
                    <h2>Material</h2>
                    <a href="./docs/cultivar_e_transformar_para_criancas.pdf" download>Clique aqui para baixar o PDF</a><br>
                    <a href="./docs/cultivar_e_transformar_para_jovens.pdf" download>Clique aqui para baixar o PDF</a>
                `,
                'contato': `
                    <h2>Contato</h2>
                `
            };
            
            // Usar innerHTML para interpretar o conteúdo como HTML
            conteudoDiv.innerHTML = conteudos[pagina] || '<p>Página não encontrada</p>';
        }