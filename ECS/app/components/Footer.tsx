import Link from "next/link"
import { Twitter, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span className="text-white font-semibold">Eduverse</span>
            </Link>
          </div>

          {/* Programming Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Programming</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/web-programming" className="hover:text-white transition-colors">
                  Web Programming
                </Link>
              </li>
              <li>
                <Link href="/courses/mobile-programming" className="hover:text-white transition-colors">
                  Mobile Programming
                </Link>
              </li>
              <li>
                <Link href="/courses/java" className="hover:text-white transition-colors">
                  Java Beginner
                </Link>
              </li>
              <li>
                <Link href="/courses/php" className="hover:text-white transition-colors">
                  PHP Beginner
                </Link>
              </li>
            </ul>
          </div>

          {/* Design Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Design</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/illustrator" className="hover:text-white transition-colors">
                  Adobe Illustrator
                </Link>
              </li>
              <li>
                <Link href="/courses/photoshop" className="hover:text-white transition-colors">
                  Adobe Photoshop
                </Link>
              </li>
              <li>
                <Link href="/courses/logo-design" className="hover:text-white transition-colors">
                  Design Logo
                </Link>
              </li>
            </ul>
          </div>

          {/* Content Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Content</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/writing" className="hover:text-white transition-colors">
                  Writing Course
                </Link>
              </li>
              <li>
                <Link href="/courses/photography" className="hover:text-white transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/courses/video" className="hover:text-white transition-colors">
                  Video Making
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Copyright © MyCourse.io 2024. All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="https://twitter.com" className="hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com" className="hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
