import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white w-full pt-18.5 pb-5.5 absolute bottom-0">
      <div className="container ml-26">
        <div className="flex items-start flex-wrap gap-48">
          {/* Logo e Descrição */}
          <div className="w-1/5 flex flex-col ">
            <img className="mb-6" src="../assets/logo-footer.svg" alt="Logo Digital Store Branca" />
            <p className="mb-8 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <div className="flex space-x-4">
              <FaFacebookF className="w-6 h-6" />
              <FaInstagram className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
            </div>
          </div>

          {/* Informações */}
          <div className="w-1/10 flex flex-col">
            <h4 className="font-semibold mb-4">Informação</h4>
            <a href="/about" className="text-sm mb-2">Sobre Drip Store</a>
            <a href="/security" className="text-sm mb-2">Segurança</a>
            <a href="/whislist" className="text-sm mb-2">Wishlist</a>
            <a href="/blog" className="text-sm mb-2">Blog</a>
            <a href="/work-with-us" className="text-sm mb-2">Trabalhe Conosco</a>
          </div>

          {/* Categorias */}
          <div className="w-1/19 flex flex-col">
            <h4 className="font-semibold mb-4">Categorias</h4>
            <a href="/tshirts" className="text-sm mb-2">Camisetas</a>
            <a href="/pants" className="text-sm mb-2">Calças</a>
            <a href="/hats" className="text-sm mb-2">Bonés</a>
            <a href="/headphones" className="text-sm mb-2">Headphones</a>
            <a href="/shoes" className="text-sm mb-2">Tênis</a>
          </div>

          {/* Contato */}
          <div className="w-1/7 flex flex-col">
            <h4 className="font-semibold mb-4">Contato</h4>
            <a href="/contact" className="text-sm mb-2">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</a>
            <a href="tel:+558530513411" className="text-sm">Tel: (85) 3051-3411</a>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>@{new Date().getFullYear()} Digital College</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
