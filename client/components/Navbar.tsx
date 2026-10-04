import { Search, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      {/* Search bar */}
      <div className="flex justify-between gap-2 items-center px-4 py-2 w-80">
        <Search size={18} />
        <Input placeholder="Search here..." type="search" />
      </div>

      {/* Icons */}
      <div className="flex justify-between gap-2 items-center px-4 py-2">
        <Link href={"/setting"}>
          <Settings size={18}/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
