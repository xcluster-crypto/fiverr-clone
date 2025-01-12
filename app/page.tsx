import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#0a3725] text-white">
          <div className="container mx-auto px-4 py-16 relative">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Scale your professional workforce with freelancers
              </h1>
              <div className="flex gap-2 bg-white rounded-md p-2">
                <Input 
                  placeholder="Search for any service..." 
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="bg-[#1dbf73] hover:bg-[#19a463]">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <span>Trusted by:</span>
              <div className="flex items-center gap-8">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiverr1-PuZfq2xLhjOwlLesodxcMqQjS6GJeS.png" alt="Meta logo" width={80} height={30} className="opacity-70" />
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiverr1-PuZfq2xLhjOwlLesodxcMqQjS6GJeS.png" alt="Google logo" width={80} height={30} className="opacity-70" />
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiverr1-PuZfq2xLhjOwlLesodxcMqQjS6GJeS.png" alt="Netflix logo" width={80} height={30} className="opacity-70" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              <Link href="/gigs/programming" className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#1dbf73] group-hover:text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-sm text-center">Programming & Tech</span>
              </Link>
              {/* Add more categories */}
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Popular Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <Link href="/gigs/website-development" className="group">
                <div className="relative aspect-[3/2] rounded-t-lg overflow-hidden">
                  <Image 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiverr1-PuZfq2xLhjOwlLesodxcMqQjS6GJeS.png"
                    alt="Website Development"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white rounded-b-lg">
                  <h3 className="font-medium">Website Development</h3>
                  <p className="text-sm text-gray-600 mt-1">From $50</p>
                </div>
              </Link>
              {/* Add more service cards */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

