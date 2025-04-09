import { Typography } from "@mui/material";

const ExpCard = (props:any) => {
    const {company, title, timeframe, description} = props;
    return ( 
        <div className="max-w-200 p-5 mb-10 rounded-3xl transition duration-500 ease-in-out hover:bg-blue-200">
            <Typography  sx={{ typography: { md: 'h3', xs: 'h4' } }} style={{fontWeight: 700}}><u>{company}</u></Typography>
            <div className="flex flex-row items-end justify-between">
                <Typography variant="h5" style={{fontWeight: 300}}>{title}</Typography>
                <Typography variant="h5" style={{fontWeight: 300}} className="text-right">{timeframe}</Typography>
            </div>
            
            <Typography variant="body1" className="">{description}</Typography>
        </div>
     );
}
 
export default ExpCard;