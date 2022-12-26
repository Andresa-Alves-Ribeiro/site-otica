import React from 'react';
import Local from "../../assets/imagens/local.png"
import Telefone from "../../assets/imagens/telefone.png"
import Email from "../../assets/imagens/email.png"
import Facebook from "../../assets/imagens/fb.png"
import Insta from "../../assets/imagens/ig.png"
import Twitter from "../../assets/imagens/tt.png"
import "./style.css"

export default function SecaoContato() {
    return (
        <div className='secao-contato'>
            <div id='contato' className='limitar-secao'>
                <h2 className='subtitulos'>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div className='contato-redes'>
                    <div className='card-contatos'>
                        <h4>Contato</h4>

                        <div>
                            <img src={Local} alt='Imagem de um ícone de localização' />
                            <span>Nova Iguaçu, RJ</span>
                        </div>

                        <div>
                            <img src={Telefone} alt='Imagem de um ícone de telefone' />
                            <span>(21) 9999-9999</span>
                        </div>

                        <div>
                            <img src={Email} alt='Imagem de um ícone de email' />
                            <span>contato@oticavida.com</span>
                        </div>
                    </div>

                    <div className='card-contatos'>
                        <h4>Nossas Redes Sociais</h4>

                        <div>
                            <img src={Facebook} alt='Imagem de um ícone do facebook' />
                            <span>/OticaVida</span>
                        </div>

                        <div>
                            <img src={Insta} alt='Imagem de um ícone do instagram' />
                            <span>@oticavidarj </span>
                        </div>

                        <div>
                            <img src={Twitter} alt='Imagem de um ícone do twitter' />
                            <span>@oticavidarj</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}