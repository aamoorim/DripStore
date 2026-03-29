export const Section = ({
  title,
  align = "left", 
  action,        
  children,
  className = "", 
  titleProps = { size: "text-2xl md:text-3xl", color: "text-zinc-800" }
}) => {
  const isCenter = align === "center";
  const headerStyles = `flex gap-4 mb-8 ${
    isCenter ? "flex-col text-center items-center" : "items-end justify-between"
  }`;

  return (
    <section className={`py-10 px-6 max-w-7xl mx-auto ${className}`}>
      <header className={headerStyles}>
        <h2 className={`font-bold tracking-tight ${titleProps.color} ${titleProps.size}`}>
          {title}
        </h2>

        {action && (
          <a
            href={action.href}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-red-800"
          >
            <span>{action.text}</span>
            <ArrowIcon />
          </a>
        )}
      </header>

      <main className="w-full">
        {children}
      </main>
    </section>
  );
};

const ArrowIcon = () => (
  <svg 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className="w-5 h-5 transition-transform group-hover:translate-x-1"
  >
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

export default Section;