import SkillsCarousel from "../components/SkillsCarousel"
import ToolsCarousel from "../components/ToolsCarousel"

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 via-purple/60 relative z-0">
        <SkillsCarousel />
        <ToolsCarousel />
    </div>
  )
}

export default Skills