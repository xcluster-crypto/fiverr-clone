import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#404145]">
          fiverr<span className="text-[#1dbf73]">.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Link href="#" className="text-[#404145] hover:text-[#1dbf73]">Fiverr Pro</Link>
            <Link href="#" className="text-[#404145] hover:text-[#1dbf73]">Explore</Link>
            <Link href="#" className="text-[#404145] hover:text-[#1dbf73]">English</Link>
            <Link href="#" className="text-[#404145] hover:text-[#1dbf73]">Become a Seller</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-[#1dbf73] hover:bg-[#19a463]">Join</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

