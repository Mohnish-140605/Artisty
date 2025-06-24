import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-6 mt-12 border-t border-border/40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Artistly. All rights reserved.</p>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
