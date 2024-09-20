import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {}
      <section className="tarefa">
        <h1>Tarefa 01: Imagem 100% da largura</h1>
        <img
          src="/image1.jpg"
          alt="Imagem Full Viewport"
          className="full-width"
        />
      </section>

      {}
      <section className="tarefa">
        <h1>Tarefa 02: Imagem 80% da altura</h1>
        <img src="/image2.jpg" alt="Imagem 80% Altura" className="height-80" />
      </section>

      {}
      <section className="tarefa">
        <h1>Tarefa 03: Relatividade no Tamanho dos Textos</h1>
        <p className="relativo-texto">
          Pensar em Mobile-First é garantir que o conteúdo seja facilmente
          acessível e adaptado para dispositivos móveis antes de ser expandido
          para telas maiores.
        </p>
      </section>

      {}
      <section className="tarefa">
        <h1>Tarefa 04: Responsividade no Tamanho dos Textos</h1>
        <p className="responsive-texto">
          Pensar Mobile-First é crucial para garantir uma boa experiência do
          usuário em todos os dispositivos, considerando os menores primeiro.
        </p>
      </section>

      {}
      <section className="tarefa">
        <h1>Tarefa 05: Imagem e Orientação</h1>
        <img
          src="/image3.jpg"
          alt="Imagem Responsiva"
          className="orientation-responsive"
        />
      </section>

      {}
      <section className="tarefa">
        <h1>Tarefa 06: Link Condicional</h1>
        <img
          src="/image4.jpg"
          alt="Imagem Link Condicional"
          className="orientation-conditional"
        />
      </section>

      {}
      <section className="tarefa">
        <h1>Tarefa 07: Layout Responsivo</h1>
        <div className="layout-container">
          <img
            src="/image5.jpg"
            alt="Imagem Responsiva"
            className="layout-img"
          />
          <p className="layout-text">
            Este é um exemplo de layout que se ajusta conforme o espaço
            disponível na tela.
          </p>
        </div>
      </section>

      {}
      <section className="tarefa">
        <h1>Tarefa 08: Esquema de Cores</h1>
        <p className="color-scheme">
          A responsividade permite a adaptação do layout, mas também é
          importante fornecer esquemas de cores que garantam acessibilidade e
          conforto visual ao usuário.
        </p>
      </section>

      {}
      <section className="tarefa">
        <h1>Tarefa 09: Media Print</h1>
        <p>Pergunta: O que é responsividade?</p>
        <ol>
          <li>Adaptação de cores.</li>
          <li>Adaptação de layout ao tamanho da tela.</li>
          <li>Otimização para navegadores antigos.</li>
          <li>Adaptação para dispositivos móveis.</li>
          <li>Uso de animações em páginas web.</li>
        </ol>
        <div className="resposta">
          <p>
            Resposta correta:{" "}
            <strong>2. Adaptação de layout ao tamanho da tela.</strong>
          </p>
          <p>
            Justificativa: A responsividade permite que o layout se ajuste
            automaticamente ao tamanho da tela.
          </p>
        </div>
      </section>

      {}
      <section className="tarefa">
        <h1>Tarefa 10: Alteração de Cursor</h1>
        <p>Pergunta: O que são Media Queries?</p>
        <ol>
          <li>Consultas ao servidor de mídia.</li>
          <li>Regras de estilo aplicadas conforme o dispositivo.</li>
          <li>Configurações de vídeo em alta definição.</li>
          <li>Consultas a banco de dados de mídia.</li>
          <li>Animações CSS aplicadas com base no dispositivo.</li>
        </ol>
        <p className="resposta">
          Resposta correta:{" "}
          <strong>Regras de estilo aplicadas conforme o dispositivo.</strong>
        </p>
      </section>

      {}
      <section className="menu">
        <ul>
          <li className="menu-item" data-tooltip="Home">
            <img src="/icone1.png" alt="Icone 1" />
            <span className="rotulo">Home</span>
          </li>
          <li className="menu-item" data-tooltip="Sobre">
            <img src="/icone2.png" alt="Icone 2" />
            <span className="rotulo">Sobre</span>
          </li>
          <li className="menu-item" data-tooltip="Serviços">
            <img src="/icone3.png" alt="Icone 3" />
            <span className="rotulo">Serviços</span>
          </li>
          <li className="menu-item" data-tooltip="Contato">
            <img src="/icone4.png" alt="Icone 4" />
            <span className="rotulo">Contato</span>
          </li>
        </ul>
      </section>

      {}
      <section className="questoes">
        <h1>Tarefa 13: Media Queries Combinadas</h1>
        <div className="questao">
          <h2>O que é responsividade?</h2>
          <ul>
            <li>Adaptação de cores</li>
            <li>Adaptação de layout</li>
            <li>Adaptação de fontes</li>
            <li>Adaptação de imagens</li>
          </ul>
          <p className="resposta">Resposta correta: Adaptação de layout.</p>
        </div>
      </section>

      {}
      <section className="perfil">
        <h1>Tarefa 14: Página Meu Perfil</h1>
        <img src="/perfil.jpg" alt="Minha Foto" className="perfil-img" />
        <p className="perfil-info">
          Olá, sou um desenvolvedor apaixonado por tecnologia, música e viagens!
        </p>
        <div className="hobbies">
          <h2>Meus Hobbies</h2>
          <img src="/hobby1.jpg" alt="Hobby 1" />
          <img src="/hobby2.jpg" alt="Hobby 2" />
        </div>
        <div className="amigos">
          <h2>Meus Amigos</h2>
          <ul>
            <li>
              <img src="/amigo1.jpg" alt="Amigo 1" />
            </li>
            <li>
              <img src="/amigo2.jpg" alt="Amigo 2" />
            </li>
          </ul>
        </div>
      </section>

      {}
      <section className="produto">
        <h1>Tarefa 15: Detalhes do Produto</h1>
        <div className="produto-imagem">
          <img src="/produto.jpg" alt="Produto" />
        </div>
        <div className="produto-info">
          <h2>Nome do Produto</h2>
          <p>Preço: R$ 199,99</p>
          <p>Descrição: Produto incrível para seu dia a dia.</p>
          <h3>Produtos Relacionados</h3>
          <ul>
            <li>
              <img src="/related1.jpg" alt="Produto Relacionado 1" /> R$ 149,99
            </li>
            <li>
              <img src="/related2.jpg" alt="Produto Relacionado 2" /> R$ 179,99
            </li>
          </ul>
        </div>
        <div className="comentarios">
          <h3>Comentários</h3>
          <p>
            <strong>Cliente 1:</strong> Excelente produto!
          </p>
        </div>
      </section>

      {}
      <section className="plataforma-videos">
        <h1>Tarefa 16: Plataforma de Vídeos</h1>
        <div className="video">
          <video controls>
            <source src="/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          <div className="acoes-video">
            <button>Curtir</button>
            <button>Compartilhar</button>
            <button>Comentar</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
