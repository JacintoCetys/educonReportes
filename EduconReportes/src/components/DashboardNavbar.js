import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Badge, Box, Hidden, IconButton, Toolbar } from '@mui/material';
import { Menu as MenuIcon, NotificationsOutlined as NotificationsIcon, Input as InputIcon } from '@mui/icons-material';
import { Logo } from './Logo';

export const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
    const [notifications] = useState([])
    return (
        <AppBar elevation={0} {...rest}>
            <Toolbar>
                <RouterLink to="/">
                    <Logo />
                </RouterLink>
                <Box sx={{ flexGrow: 1 }} />
                <Hidden lgDown>
                    <IconButton color="inherit">
                        <Badge badgeContent={notifications.length} color="primary" variant="dot">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton color="inherit" onClick={onMobileNavOpen}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>

        </AppBar>
    )
};

DashboardNavbar.propTypes = {
    onMobileNavOpen: PropTypes.func
};
