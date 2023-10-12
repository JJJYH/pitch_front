import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const PostingStatus = ({title, content}) => {
  return (
    <div style={{width: '95px', height: '115px'}}>
      <Card sx={{ 
        width: '100%', height: '100%', 
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <CardContent style={{
          display: 'inline', 
          justifyContent: 'center',
          padding: '0px',
          alignItems: 'center'
        }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}</Typography>
          <Typography sx={{ fontSize: 18 }} component="div">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostingStatus;