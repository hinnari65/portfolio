'use client'
import Image from 'next/image'

export default function Hero() {
  const techSkills = ['JS', 'TS', 'React', 'Tailwindcss', 'Preprocessors']
  
  return (
    <section className="py-8">
      <div className="bg-gray-800 rounded-xl p-8 border-2 border-gray-700 shadow-lg">
        <div className="flex flex-col items-center gap-6">
          <div className="w-32 h-32 rounded-full border-2 border-purple-500 bg-gray-700 overflow-hidden">
            <Image
              src="/profile.jpeg"
              alt="프로필 이미지"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold text-white">이름 · 김성식</h2>
            <p className="text-purple-300">프리랜스 PM 서비스 기획 / FE Developer(Jr)</p>
          </div>

          <div className="w-full space-y-3">
            <h3 className="font-semibold text-white border-b border-gray-700 pb-2">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email : keep@naver.com</p>
              <p>Phone : +082 - 1234-5678</p>
            </div>
          </div>

          <div className="w-full space-y-3">
            <h3 className="font-semibold text-white border-b border-gray-700 pb-2">Channel</h3>
            <div className="space-y-2">
              <div className="bg-gray-700 rounded p-2 text-gray-300 hover:bg-gray-600 transition-colors">SNS :</div>
              <div className="bg-gray-700 rounded p-2 text-gray-300 hover:bg-gray-600 transition-colors">Github :</div>
            </div>
          </div>

          <div className="w-full space-y-3">
            <h3 className="font-semibold text-white border-b border-gray-700 pb-2">Tech Skills</h3>
            <div className="flex flex-wrap gap-2">
              {techSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 