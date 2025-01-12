import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from 'lucide-react'

export default function GigPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <h1 className="text-2xl font-bold mb-4">
                I will create a professional website for your business
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiverr1-PuZfq2xLhjOwlLesodxcMqQjS6GJeS.png"
                  alt="Seller"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium">John Doe</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-600">(150 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiverr1-PuZfq2xLhjOwlLesodxcMqQjS6GJeS.png"
                  alt="Gig thumbnail"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">About This Gig</h2>
                  <p className="text-gray-600">
                    I will create a modern, responsive website for your business using the latest technologies.
                    The website will be fast, secure, and optimized for search engines.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">What You'll Get</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Responsive design</li>
                    <li>SEO optimization</li>
                    <li>Modern UI/UX</li>
                    <li>Fast loading speed</li>
                    <li>3 rounds of revisions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <Card className="p-6 sticky top-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Basic Package</span>
                    <span className="text-2xl font-bold">$50</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Get a professional website for your business with all the essential features.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>2 pages</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Responsive design</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>3 days delivery</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#1dbf73] hover:bg-[#19a463]">
                    Continue ($50)
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

