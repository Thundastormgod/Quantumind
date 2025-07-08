import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025, QuantumindAI. All Rights Reserved.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/for-businesses" className="text-muted-foreground hover:text-primary transition-colors">
              For Businesses
            </Link>
            <Link href="/for-individuals" className="text-muted-foreground hover:text-primary transition-colors">
              For Individuals
            </Link>
            <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;