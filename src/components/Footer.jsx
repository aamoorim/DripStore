import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white w-full pt-18 pb-5.5 pl-6 pr-6 bottom-0 left-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-12 justify-between">
          {/* Logo e Descrição */}
          <div className="w-full sm:w-42.5 md:w-76.5 flex flex-col mb-8 sm:mb-0">
            <img
              className="mb-6 xs:w-10 sm:w-42.5 md:w-76.5"
              src="../assets/logo-footer.svg"
              alt="Logo Digital Store Branca"
            />
            <p className="mb-8 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/digitalcollegebr/"
                target="_blank"
                className="hover:text-primary transition-all duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/digitalcollegebr"
                target="_blank"
                className="hover:text-primary transition-all duration-200"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@digitalcollegebr"
                target="_blank"
                className="hover:text-primary transition-all duration-200"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Informações */}
          <div className="w-full sm:w-1/3 md:w-1/5 flex flex-col mb-8 sm:mb-0">
            <h4 className="font-semibold text-lg mb-7">Informação</h4>
            <a
              href="/about"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Sobre Drip Store
            </a>
            <a
              href="/security"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Segurança
            </a>
            <a
              href="/whislist"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Wishlist
            </a>
            <a
              href="/blog"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Blog
            </a>
            <a
              href="/work-with-us"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Trabalhe Conosco
            </a>
          </div>

          {/* Categorias */}
          <div className="w-full sm:w-1/3 md:w-1/5 text-lg flex flex-col mb-8 sm:mb-0">
            <h4 className="font-semibold mb-4 text-lg">Categorias</h4>
            <a
              href="/tshirts"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Camisetas
            </a>
            <a
              href="/pants"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Calças
            </a>
            <a
              href="/hats"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Bonés
            </a>
            <a
              href="/headphones"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Headphones
            </a>
            <a
              href="/shoes"
              className="text-base hover:text-primary transition-all duration-200 mb-2 leading-9.5"
            >
              Tênis
            </a>
          </div>

          {/* Contato */}
          <div className="w-full sm:w-1/3 md:w-1/5 text-lg flex flex-col">
            <h4 className="font-semibold mb-4">Contato</h4>
            <a
              href="/contact"
              className="text-base mb-2 leading-6.5 hover:text-primary transition-all duration-200"
            >
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </a>
            <a
              href="tel:+558530513411"
              className="text-base leading-9.5 hover:text-primary transition-all duration-200"
            >
              (85) 3051-3411
            </a>
          </div>
        </div>

        <hr className="border-white opacity-30 mt-8.5" />

        {/* Copyright */}
        <div className="text-center text-sm mt-5.5">
          <p className="text-sm leading-6">@ {new Date().getFullYear()} Digital College</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
