import React from 'react';
import './Home.scss'; 

const Home = () => {
  return (
  <main className="pagina-principal">
      <section className="secao-hero">
        <div className="container-imagem">
          <div className="foto">
            <img src="/image/principal1.webp" alt="Desenho de profissionais da saúde segurando um coração com uma cruz" />
          </div>
          <div className="auto-info">
            <h1>MedmonTech</h1>
          </div>
          <div className="texto">
            <p>Simplificando a saúde dos idosos: receitas médicas online, compras de medicamentos fáceis e cuidadores conectados. Uma vida mais simples e saudável.</p>
          </div>
          <div className="botao-acao">
            <button>Mais informações</button>
          </div>
        </div>

        <div className="container-texto">
          <div className="secao-solucao">
            <p>
              <strong>SOLUÇÃO:</strong> O projeto é um aplicativo de monitoramento de saúde que oferece registro de atividades físicas, monitoramento do sono, acompanhamento da alimentação, lembretes personalizados 
              e análises de saúde. Ele também se integra a dispositivos externos. O objetivo é ajudar os usuários a gerenciar sua saúde de forma mais eficaz e promover um estilo de vida saudável.</p>
          </div>
          <div className="secao-funcionalidade">
            <p> O QUE FARÁ: O aplicativo permitirá aos usuários monitorar sua saúde, registrando atividades físicas, padrões de sono e alimentação, além de fornecer lembretes e análises para promover um estilo de vida 
              saudável.</p>
          </div>
          <div className="secao-trabalho">
            <p> FUNCIONAMENTO: O aplicativo funcionará permitindo que os usuários registrem e monitorem atividades físicas, sono e alimentação, e receberão lembretes e análises personalizadas para melhorar sua saúde.</p>
          </div>  
        </div>
      </section>
      <div className='cabecalho-beneficios'>
        <h1>Vantagens</h1>
      </div>
      <div className="beneficios">
          <div className="container-smartphone">
            <div className="imagem-smartphone">
              <img src="/image/idosos1.png" alt="Idosos" />
            </div>
            <div className="conteudo">
              <div className="numero">01</div>
              <div className="titulo">Desenvolvimento de Interface e Usabilidade:</div>
              <div className="descricao">Foco no design intuitivo e na experiência do usuário para garantir fácil navegação e interação com as funcionalidades do aplicativo.</div>
            </div>
          </div>
          <div className="container-smartphone">
            <div className="imagem-smartphone">
              <img src="/image/remedio1.png" alt="Medicamentos" />
            </div>
            <div className="conteudo">
              <div className="numero">02</div>
              <div className="titulo">Integração de Dados de Saúde e Análise</div>
              <div className="descricao">Implementação de funcionalidades para coletar dados de atividades físicas, sono e alimentação, e fornecimento de análises e insights personalizados para orientar os usuários na melhoria de seu bem-estar.</div>
            </div>
          </div>
          <div className="container-smartphone">
            <div className="imagem-smartphone">
              <img src="/image/farmacia1.png" alt="Farmácia" />
            </div>
            <div className="conteudo">
              <div className="numero">03</div>
              <div className="titulo">Sistema de Lembretes e Metas Personalizadas</div>
              <div className="descricao">Criação de um sistema para enviar lembretes e ajudar os usuários a estabelecer e acompanhar metas de saúde, incentivando a adoção de hábitos saudáveis.
              </div>
            </div>
          </div>
        </div>
    </main>
  );
};

export default Home;
