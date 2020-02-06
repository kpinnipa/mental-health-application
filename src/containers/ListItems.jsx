import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DescriptionIcon from '@material-ui/icons/Description';
import ChatIcon from '@material-ui/icons/Chat';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LanguageIcon from '@material-ui/icons/Language';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { Route, MemoryRouter } from 'react-router';
import { Link } from 'react-router-dom';
import JournalPage from './JournalPage';

// function ListItemLink(props) {
//     const { icon, primary, to } = props;

//     const renderLink = React.useMemo(
//         () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
//         [to],
//     );

//     return (
//         <li>
//             <ListItem button component={renderLink}>
//                 {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
//                 <ListItemText primary={primary} />
//             </ListItem>
//         </li>
//     );
// }

// ListItemLink.propTypes = {
//     icon: PropTypes.element,
//     primary: PropTypes.string.isRequired,
//     to: PropTypes.string.isRequired,
// };

const useStyles = makeStyles({
    root: {
        width: 360,
    },
});

export default function ListRouter() {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        // <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <div>
            {/* <Route>
                    {({ location }) => (
                        <Typography gutterBottom>Current route: {location.pathname}</Typography>
                    )}
                </Route> */}
            <List>
                <ListItem button
                    selected={selectedIndex === 0}
                    onClick={event => handleListItemClick(event, 0)} >
                    <ListItemIcon>
                        <CalendarTodayIcon />
                    </ListItemIcon>
                    <ListItemText primary="Emotions Calendar" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Help Articles" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary="Community" />
                </ListItem>
                <ListItem button component={Link} to="/journal-page">
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Private Journal" />
                </ListItem>
                <ListItem button component={Link} to="/resources">
                    <ListItemIcon>
                        <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Resources" />
                </ListItem>
            </List>
        </div>
        // </MemoryRouter >
    )
}