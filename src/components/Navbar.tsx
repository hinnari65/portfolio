'use client'

export default function Navbar() {
  return (
    <nav className="py-6">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-purple-300">Profile · Title</div>
        <ul className="flex items-center space-x-6">
          <li className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Profile</li>
          <li className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">Introduce</li>
          <li className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer">TechSkill</li>
        </ul>
      </div>
    </nav>
  )
} 