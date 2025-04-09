import { Typography } from "@mui/material";

interface MyComponentProps {
    company: string;
    title: string;
    timeframe: string;
    description: string;
}

const ExpCard: React.FC<MyComponentProps> = ({company, title, timeframe, description}) => {
    return ( 
        <div className="p-5 m-2 rounded-3xl transition duration-100 ease-in-out hover:bg-blue-200">
            <Typography  sx={{ typography: { xl: 'h3', lg: 'h4', xs: 'h3' } }} style={{fontWeight: 700}}>{title}</Typography>
            <div className="flex flex-row items-end justify-between">
                <Typography variant="h5" style={{fontWeight: 300}}>{company}</Typography>
                <Typography variant="h5" style={{fontWeight: 300}} className="text-right pl-3">{timeframe}</Typography>
            </div>
            
            <Typography variant="body1" className="">{description}</Typography>
        </div>
     );
}
 
export default ExpCard;