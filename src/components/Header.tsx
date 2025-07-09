"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            QuantumindAI
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/for-businesses" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/for-businesses') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            For Businesses
          </Link>
          <Link 
            href="/for-individuals" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/for-individuals') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            For Individuals
          </Link>
          <Link 
            href="/solutions" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/solutions') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Solutions
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/about') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;