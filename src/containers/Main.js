import React from 'react';
import MainMenu from '../components/MainMenu'; 
import { Link, Route, } from 'react-router-dom';
import { List, Tooltip, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  Mail as MailIcon, 
  GridOnTwoTone as GridIcon, 
} from '@material-ui/icons'
const Main = ({
  match, 
}) => {
  
  const renderSideMenu = (
    <List>
      {[
        [ 'mail', <MailIcon/>, 'メール', ], 
        [ 'grid', <GridIcon/>, 'グリッド', ], 
      ].map(([name, icon, title], index) => (
        <Tooltip title={title} key={index}>
          <ListItem button component={Link} to={`${match.url}/${name}`}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{title}</ListItemText>
          </ListItem>
        </Tooltip>
      ))}
    </List>
  );
  return (
    <MainMenu
      renderSideMenu={renderSideMenu}
    >
      <Route path={`${match.url}/mail`} render={() => 'メール'}/>
      <Route path={`${match.url}/grid`} render={() => 'グリッド'}/>
    </MainMenu>
  )
}

export default Main
