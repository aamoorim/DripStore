import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white w-full pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-6 justify-between">
          {/* Logo e Descrição */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col">
            <img
              className="mb-4 md:mb-6 w-32 md:w-52 lg:w-64"
              src="../assets/logo-footer.svg"
              alt="Logo Digital Store Branca"
            />
            <p className="mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://www.instagram.com/digitalcollegebr/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-all duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/digitalcollegebr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-all duration-200"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@digitalcollegebr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-all duration-200"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Informações */}
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col">
            <h4 className="font-semibold text-base md:text-lg mb-4 md:mb-7">
              Informação
            </h4>
            <a
              href="/about"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Sobre Drip Store
            </a>
            <a
              href="/security"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Segurança
            </a>
            <a
              href="/whislist"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Wishlist
            </a>
            <a
              href="/blog"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Blog
            </a>
            <a
              href="/work-with-us"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Trabalhe Conosco
            </a>
          </div>

          {/* Categorias */}
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col">
            <h4 className="font-semibold text-base md:text-lg mb-4">
              Categorias
            </h4>
            <a
              href="/tshirts"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Camisetas
            </a>
            <a
              href="/pants"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Calças
            </a>
            <a
              href="/hats"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Bonés
            </a>
            <a
              href="/headphones"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Headphones
            </a>
            <a
              href="/shoes"
              className="text-sm md:text-base hover:text-primary transition-all duration-200 mb-1.5 md:mb-2 leading-7"
            >
              Tênis
            </a>
          </div>

          {/* Contato */}
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/5 flex flex-col">
            <h4 className="font-semibold text-base md:text-lg mb-4">
              Contato
            </h4>
            <a
              href="/contact"
              className="text-sm md:text-base mb-2 leading-6 md:leading-7 hover:text-primary transition-all duration-200"
            >
              Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE,
              60150-161
            </a>
            <a
              href="tel:+558530513411"
              className="text-sm md:text-base leading-7 hover:text-primary transition-all duration-200"
            >
              (85) 3051-3411
            </a>
          </div>
        </div>

        <hr className="border-white opacity-30 mt-6 md:mt-8" />

        <div className="text-center text-[11px] md:text-sm mt-4 md:mt-5.5">
          <p>@ {new Date().getFullYear()} Digital College</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
