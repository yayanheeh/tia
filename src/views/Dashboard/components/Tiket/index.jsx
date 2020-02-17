import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FolderIcon from '@material-ui/icons/Folder';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import DateRange from '@material-ui/icons/DateRange';
import Store from '@material-ui/icons/Store';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import AccessAlarms from '@material-ui/icons/AccessAlarms';
import StarBorder from '@material-ui/icons/StarBorder';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Paket Umroh Bulan Mei"
        subheader="Harga Rp 20.000.000"
      />
      
                  
      
      <ListItem>
                  <ListItemIcon>
                    <FlightTakeoff/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Maskapai" />
        <ListItemText
                    primary={<Typography type="secondary" style={{ align: 'left'  }}>Saudi airlines</Typography>}
      />
                            
                </ListItem>
      <ListItem>
                  <ListItemIcon>
                    <Store />
                  </ListItemIcon>
                  <ListItemText
                    primary="Kelas hotel" />
        <ListItemText
                    primary={<Typography type="secondary" style={{ align: 'left'  }}><StarBorder/><StarBorder/><StarBorder/> </Typography>}
      />
                            
                </ListItem>
      <ListItem>
                  <ListItemIcon>
                    <AccessAlarms />
                  </ListItemIcon>
                  <ListItemText>
                    Berangkat dari
                   </ListItemText>
                   <ListItemText>
                    jakarta
                   </ListItemText>
                            
                </ListItem>
      <ListItem>
                  <ListItemIcon>
                    <DirectionsWalk />
                  </ListItemIcon>
                  <ListItemText
                    primary="Durasi perjalanan" />
        <ListItemText
                    primary={<Typography type="secondary" style={{ align: 'left' }}>20 hari</Typography>}
      />
                            
                </ListItem>
      <ListItem>
                  <ListItemIcon>
                    <DateRange />
                  </ListItemIcon>
                  <ListItemText
                    primary="Jadwal berangkat" />
        <ListItemText
                    primary={<Typography type="secondary" style={{ align: 'left' }}>11 Mei 2020</Typography>}
      />
                            
                </ListItem>
      
    </Card>
  );
}
