import { ShoppingBag, Menu, Search, User } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl pl-10">asarē</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm hover:text-primary transition-colors">
            Home
          </a>
          <a href="#categories" className="text-sm hover:text-primary transition-colors">
            Categories
          </a>
          <a href="#collection" className="text-sm hover:text-primary transition-colors">
            Collection
          </a>
          <a href="#about" className="text-sm hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </a>
          {/* <a href="#careers" className="text-sm hover:text-primary transition-colors">
            Careers
          </a> */}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <ShoppingBag className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}