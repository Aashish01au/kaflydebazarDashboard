"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DraftsIcon from '@mui/icons-material/Drafts';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FlightIcon from '@mui/icons-material/Flight';
import FactoryIcon from '@mui/icons-material/Factory';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Collapse } from '@mui/material';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Link from 'next/link';
export default function DashboardPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  const handleListItemClick = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: React.SetStateAction<number>) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#2F323A', color:'gray' ,}}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <SpeedIcon className='text-gray-400'/>
          </ListItemIcon >
          <Link href={'/'}>   <ListItemText primary="DashBoard" /> </Link>
        </ListItemButton>
      
        <ListItemButton 
          selected={selectedIndex === 1}
          // onClick={(event) => handleListItemClick(event, 1)}
          onClick={handleCollapse}
        >
          <ListItemIcon className='text-gray-400'>
            <SettingsSuggestIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
          {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        {/* =========================================================================================== */}
        <Collapse in={isCollapse} timeout="auto" unmountOnExit className='ms-5'>
        <ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <AccountCircleIcon />
          </ListItemIcon>
       <Link href={'/register'}>
    
  <ListItemText primary="Register User" />
       </Link>
</ListItemButton>

<ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <GroupAddIcon />
          </ListItemIcon>
   <Link href={'/userRole'}><ListItemText primary="User Role assign" /></Link> 
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <ManageAccountsIcon />
          </ListItemIcon>
<Link href={'/resetPassword'}> <ListItemText primary="Reset  password" /></Link>
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <AccountBalanceIcon />
          </ListItemIcon>
  <ListItemText primary="Bank Name" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <RequestQuoteIcon />
          </ListItemIcon>
  <ListItemText primary="Account  Details" />
</ListItemButton>
</Collapse>
        <ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <LocalParkingIcon />
          </ListItemIcon>
  <ListItemText primary="Products" />
</ListItemButton>

<ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <FlightIcon />
          </ListItemIcon>
  <ListItemText primary="Delivery" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <PeopleAltIcon />
          </ListItemIcon>
  <ListItemText primary="Customer" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <AccountTreeIcon />
          </ListItemIcon>
  <ListItemText primary="Business Report" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
        <ListItemIcon className='text-gray-400'>
            <FactoryIcon />
          </ListItemIcon>
  <ListItemText primary="WareHouse" />
</ListItemButton>
      </List>
      <Divider />
     
    </Box>
  );
}