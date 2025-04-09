import { Typography } from "@mui/material";

const ProjectCard = (props:any) => {
    const {title, year, description, link} = props;
    return ( 
        <a href={link} target="_blank">
            <div className=" p-5 m-2 rounded-2xl transition duration-100 ease-in-out hover:bg-blue-100">
                <div className="flex flex-row items-end justify-between">
                    <Typography variant="h5" style={{fontWeight: 700}}>{title}</Typography>
                    <Typography variant="h5" style={{fontWeight: 500}}>{year}</Typography>
                </div>
                <Typography variant="body1" className="text-justify">{description}</Typography>
            </div>
        </a>
     );
}

export default ProjectCard;