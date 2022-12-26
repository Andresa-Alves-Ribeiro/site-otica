import React from 'react';
import Oculos1 from "../../assets/imagens/oculos01.png";
import Oculos2 from "../../assets/imagens/oculos02.png";
import Oculos3 from "../../assets/imagens/oculos03.png";
import Oculos4 from "../../assets/imagens/oculos04.png"
import "./style.css"


export default function SecaoProdutos() {
    return (
        <section id='produtos' className='secao-produtos'>
            <div className='limitar-secao'>
                <h3>Nossos Produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

                <div className='div-cards'>
                    <div className='card'>
                        <h4>Óculos de grau</h4>
                        <img src={Oculos1} alt='Primeiro óculos' />
                        <p>R$ 500,00</p>
                    </div>

                    <div className='card'>
                        <h4>Óculos transition</h4>
                        <img src={Oculos2} alt='Segundo óculos' />
                        <p>R$ 750,00</p>
                    </div>

                    <div className='card'>
                        <h4>Óculos de sol</h4>
                        <img src={Oculos3} alt='Terceiro óculos' />
                        <p>R$ 700,00</p>
                    </div>

                    <div className='card'>
                        <h4>Óculos infantil</h4>
                        <img src={Oculos4} alt='Quarto óculos' />
                        <p>R$ 500,00</p>
                    </div>
                </div>

                <p>Todos os nossos produtos incluem:</p>

                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    );
}