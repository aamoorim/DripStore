import React from 'react'
import { FaFacebookF} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col absolute bottom-0 w-full h-89.5 bg-dark-gray">
        <section className="footer-section-padding text-white justify-center pl-26 pt-18 pb-5.5">
            <div className='footer-links flex justify-between items-start flex-row flex-wrap w-full text-left'>
              <div className='footer-links-div'>
                <img className='mb-8.5' src="../assets/logo-footer.svg" alt="Logo Digital Store Branca" />
                <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                <div className='socialmedia'>
                  <p><FaFacebookF className='w-3 h-5'/></p>
                  <p><FaInstagram className='w-5 h-5'/></p>
                  <p><FaXTwitter className='w-6 h-5'/></p>
                </div>
              </div>

              <div className='footer-links-div'>
                <h4>Informação</h4>
                <a href="/about">
                  <p>Sobre Drip Store</p>
                </a>
                
                <a href="/security">
                  <p>Segurança</p>
                </a>

                <a href="/whislist">
                  <p>Wishlist</p>
                </a>

                <a href="/blog">
                  <p>Blog</p>
                </a>

                <a href="/work-with-us">
                  <p>Trabalhe Conosco</p>
                </a>
              </div>

              <div className='footer-links-div'> 
                <h4>Categorias</h4>
                <a href="/tshirts">
                  <p>Camisetas</p>
                </a>
                
                <a href="/pants">
                  <p>Calças</p>
                </a>

                <a href="/hats">
                  <p>Bonés</p>
                </a>

                <a href="/headphones">
                  <p>Headphones</p>
                </a>

                <a href="/shoes">
                  <p>Tênis</p>
                </a>
              </div>
              <div className='footer-links-div'> 
                <h4>Contato</h4>
                <a href="/tshirts" className='w-70 mb-3.5'>
                  <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                </a>
                
                <a href="/pants">
                  <p>(85) 3051-3411</p>
                </a>
              </div>

              <hr />
              <div className='footer-below'>
                <div className='footer-copyright'>
                  <p>@{new Date().getFullYear()} Digital College</p>
                </div>
              </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer