import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-4xl">MaDev</SheetTitle>
          <SheetDescription>
            <div className="text-2xl flex flex-col gap-3 mt-10">
              <Link href="/about" className="hover:text-orange-700">
                <p>About</p>
              </Link>
              <Link href="/projects" className="hover:text-orange-700">
                <p>Projects</p>
              </Link>
              <Link href="/contact" className="hover:text-orange-700">
                <p>Contact</p>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
