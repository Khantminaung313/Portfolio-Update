import SkillsCarousel from "../components/SkillsCarousel"
import ToolsCarousel from "../components/ToolsCarousel"

const Skills = () => {
  return (
    <div id="skill-container" className="bg-gradient-to-r from-slate-600/80 via-[#6e31c2] relative z-0">
        <SkillsCarousel />
        <ToolsCarousel />
    </div>
  )
}

export default Skills