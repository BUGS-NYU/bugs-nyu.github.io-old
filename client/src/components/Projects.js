import react, { memo } from 'react'

const Projects = (props) => {
    const {projects} = props

    return(
        <div>
            {Object.entries(projects).map(([i, project]) => {
                <Project projet = {project}>

                </Project>
            })}
        </div>
    )
}