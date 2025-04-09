import { Typography } from "@mui/material";

const ExpCard = (props:any) => {
    const {company, title, timeframe, description} = props;
    return ( 
        <div className="w-175 p-5 mb-5 rounded-2xl transition duration-100 ease-in-out hover:bg-blue-200">
            <Typography variant="h3" style={{fontWeight: 700}}><u>{company}</u></Typography>
            <div className="flex flex-row items-end justify-between">
                <Typography variant="h5" style={{fontWeight: 300}}>{title}</Typography>
                <Typography variant="h5" style={{fontWeight: 300}}>{timeframe}</Typography>
            </div>
            
            <Typography variant="body1" className="text-justify">{description}</Typography>
        </div>
     );
}
 
export default ExpCard;