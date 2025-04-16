import { Chip, Typography } from "@mui/material";

interface MyComponentProps {
    title: string;
    year: number;
    description: string;
    skills: string[];
}

const ProjectCard: React.FC<MyComponentProps> = ({title, year, description, skills}) => {
    return ( 
        <div className="p-5 m-2">
            <div className="flex flex-row items-end justify-between">
                <Typography variant="h5" style={{fontWeight: 700}} className="text-blue-600 md:text-inherit">{title}</Typography>
                <Typography variant="h5" style={{fontWeight: 500}}>{year}</Typography>
            </div>
            <Typography variant="body1" style={{whiteSpace: 'pre-line'}}>{description}</Typography>
            <div className="mt-2">
                {skills.map((skill, index) => (
                    <Chip key={index} label={skill} className="mr-2 mb-2"/>
                ))}
                
            </div>
        </div>
     );
}

export default ProjectCard;