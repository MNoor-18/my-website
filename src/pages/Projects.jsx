import ProjectsCards from "../components/Projects-cards";
import useLanguage from "../hooks/useLanguage";

const Projects = () => {
    const currentLanguage = useLanguage();

    return(
        <section id='projects' className='sections website-bg' >
            <h1 className='sections-titles '>{currentLanguage.pages.projects}</h1>
            <div className='projects-container pb-16 h-full w-full flex flex-wrap gap-5 justify-center '>
                {currentLanguage.myProjects.map(item => (<ProjectsCards name={item.projectName} image={item.projectImage} info={item.projectInfo} link={item.projectLink} key={item.projectName}  />))}
            </div>
        </section>
    )
}
export default Projects;