import SkillsCarousel from "../components/SkillsCarousel"
import ToolsCarousel from "../components/ToolsCarousel"

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 via-purple/60 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6 lg:space-y-8 relative z-0">
        <SkillsCarousel />
        <ToolsCarousel />
    </div>
  )
}

export default Skills