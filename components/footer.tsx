import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Graphics & Design</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Digital Marketing</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Writing & Translation</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Video & Animation</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Careers</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Press & News</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Partnerships</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Help & Support</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Trust & Safety</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Selling on Fiverr</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Buying on Fiverr</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Events</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Blog</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Forum</Link>
              <Link href="#" className="block text-gray-600 hover:text-[#1dbf73]">Community Standards</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-gray-600">© 2024 Fiverr Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

