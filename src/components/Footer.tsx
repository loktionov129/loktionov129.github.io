export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-border bg-bg-secondary py-10 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        
        {/* Копирайт */}
        <p className="text-base font-semibold text-text-primary tracking-tight">
          © 2025 Александр Локтионов
        </p>

        {/* Навигация */}
        <nav className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a href="https://t.me" 
             className="text-sm font-medium text-text-secondary transition-colors hover:text-accent-blue">
            Телеграм
          </a>
          <a href="https://github.com" 
             className="text-sm font-medium text-text-secondary transition-colors hover:text-accent-blue">
            GitHub
          </a>
          <a href="mailto:loktionov129@gmail.com" 
             className="text-sm font-medium text-text-secondary transition-colors hover:text-accent-blue">
            Почта
          </a>
        </nav>

        {/* Дата обновления */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-text-secondary/60">
          <span className="h-px w-6 bg-border"></span>
          <span>май 2025 г.</span>
          <span className="h-px w-6 bg-border"></span>
        </div>
        
      </div>
    </footer>
  );
};
