document.addEventListener('DOMContentLoaded', function() {
    carregarConteudo('home');
});

function carregarConteudo(pagina) {
            const conteudoDiv = document.getElementById('conteudo');
            
            // Conteúdo dinâmico baseado no botão clicado
            const conteudos = {
                'home': `
                    <h1>Projeto Educação Ambiental nas Escolas</h1><br>
                    <h2>🌱 A importância da educação ambiental nas escolas</h2>
                    <p>A educação ambiental nas escolas é essencial para formar cidadãos conscientes, saudáveis e comprometidos com o futuro do planeta. 
                    Ao integrar práticas sustentáveis e o contato direto com a natureza desde a primeira infância, promovemos não apenas o aprendizado, 
                    mas também o bem-estar físico e emocional dos alunos.</p><br>
                    <h2>🌿 Espaços verdes como aliados da aprendizagem e da saúde</h2>
                    <p>Ambientes escolares com áreas verdes estimulam a curiosidade, a criatividade e a concentração. Estudos mostram que crianças que têm 
                    acesso regular à natureza apresentam melhor desempenho acadêmico, menos estresse e maior capacidade de resolver problemas. 
                    Além disso, o contato com espaços naturais favorece hábitos saudáveis, como atividades físicas ao ar livre e alimentação consciente.</p><br>
                    <h2>👶 Natureza desde cedo: um investimento no futuro</h2>
                    <p>O vínculo com o meio ambiente deve começar na primeira infância, quando a criança está formando sua visão de mundo. Brincar na terra, 
                    observar animais e cuidar de plantas desenvolve empatia, responsabilidade e respeito pela vida. 
                    Esses valores, cultivados desde cedo, refletem em atitudes mais sustentáveis na vida adulta.
                    Incluir a educação ambiental no currículo escolar é mais do que ensinar sobre reciclagem ou biodiversidade
                     — é criar uma cultura de cuidado, pertencimento e transformação. 
                     É preparar nossos alunos para serem protagonistas de um mundo mais justo e equilibrado.</p>
                `,
                'material': `
                    <h1>Material</h1><br>
                    <p>A seguir estão reunidos os materiais de apoio para a realização do projeto. Os arquivos estão disponíveis para download em formato PDF, 
                    podendo ser impressos ou utilizados em dispositivos digitais para maior praticidade.</p><br>
                    <a href="./docs/cultivar_e_transformar_para_criancas.pdf" download>Clique aqui para baixar o PDF</a>
                    <a href="./docs/cultivar_e_transformar_para_jovens.pdf" download>Clique aqui para baixar o PDF</a>
                    <a href="./docs/cultivar_e_transformar_para_jovens.pdf" download>Clique aqui para baixar o PDF</a>
                    <a href="./docs/cultivar_e_transformar_para_jovens.pdf" download>Clique aqui para baixar o PDF</a>
                    <a href="./docs/cultivar_e_transformar_para_jovens.pdf" download>Clique aqui para baixar o PDF</a><br>
                    <h2>Como usar o material?</h2><br>
                    <p>O material foi desenvolvido para ser utilizado pelo professor como um guia, podendo ser adaptado conforme a necessidade da turma e a realidade da escola.</p>
                    <p>O material está dividido em duas partes, sendo a primeira um projeto de reciclagem e a segunda um projeto de horta comunitária.</p>
                    <p>Cada projeto está subdivido em duas partes, uma para crianças dos anos iniciais e outra para jovens dos anos finais do ensino básico.</p>
                    <p>Além do máterial, estão contidos manuais da Embrapa para auxiliar no desenvolvimento do projeto de horta comunitária.</p>
                `,
                'contato': `
                    <h2>Contato</h2>
                `
            };
            
            // Usar innerHTML para interpretar o conteúdo como HTML
            conteudoDiv.innerHTML = conteudos[pagina] || '<p>Página não encontrada</p>';
        }