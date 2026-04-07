// "use client"

// export default function AboutNav({ activeTab, setActiveTab }: any) {
//   const tabs = [
//     { id: "story", label: "Our Story" },
//     { id: "why", label: "Why Choose Us" },
//     { id: "team", label: "Our Team" },
//     { id: "values", label: "Our Values" },
//     { id: "awards", label: "Awards" }
//   ]

//   return (
//     <nav className="sticky top-[70px] z-[50] bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
//       <div className="max-w-4xl mx-auto flex justify-around py-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold px-4 py-2 transition-all ${
//               activeTab === tab.id 
//                 ? "text-[#112421] border-b-2 border-amber-600" 
//                 : "text-gray-400 hover:text-[#112421]"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//     </nav>
//   )
// }


"use client"

export default function AboutNav() {
  const tabs = [
    { id: "story", label: "Our Story" },
    { id: "why", label: "Why Choose Us" },
    { id: "team", label: "Our Team" },
    { id: "values", label: "Our Mission" },
    { id: "awards", label: "Visit Us" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Navbar height ke liye gap
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-[70px] z-[50] bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-4xl mx-auto flex justify-around py-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className="text-[7px] md:text-xs  tracking-[0.2em]  px-4 py-2 text-gray-600 hover:text-[#112421] transition-all hover:border-b-2 hover:border-amber-600"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
}