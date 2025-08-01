import { Menu } from "lucide-react";
import Link from "next/link";
import { Container } from "./container";
import { DialogTitle } from "./ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";

const navLinks = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "Tech",
    href: "/#tech-stack",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Projects",
    href: "/#projects",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-[50] bg-transparent py-4 backdrop-blur-md">
      <Container>
        <nav className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Zync</h2>
          <ul className="hidden items-center gap-x-10 lg:flex">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href} className="cursor-none">
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
          <Drawer>
            <DialogTitle className="sr-only">Menu</DialogTitle>
            <DrawerTrigger className="block lg:hidden">
              <Menu />
            </DrawerTrigger>
            <DrawerContent className="min-h-[50vh] bg-black/40 text-left backdrop-blur-xl">
              <div className="flex justify-between p-7">
                <div className="flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <DrawerClose asChild key={link.href} className="text-left">
                      <Link href={link.href}>{link.label}</Link>
                    </DrawerClose>
                  ))}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </nav>
      </Container>
    </header>
  );
}
