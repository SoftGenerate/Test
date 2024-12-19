import React from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Grid,
    Card,
    CardContent,
    Button,
} from '@mui/material';
import { Menu, Dashboard, People, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Assuming React Router is being used

const drawerWidth = 220;

const DashboardUI = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () => {
        // Add any logout logic here (e.g., clearing authentication tokens)
        navigate('/login'); // Redirect to login page
    };

    const drawer = (
        <div>
            <Toolbar />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <ListItemText primary="Servant Management" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Pass Management" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Warning" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <Typography variant="h6" gutterBottom>
                    Welcome to the Dashboard
                </Typography>
                <Grid container spacing={3}>
                    {/* Example Cards */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#f44336', color: '#fff' }}>
                            <CardContent>
                                <Typography variant="h6">Total Active Servants</Typography>
                                <Typography variant="h4">100</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
                            <CardContent>
                                <Typography variant="h6">Temporary Passes</Typography>
                                <Typography variant="h4">80</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#4caf50', color: '#fff' }}>
                            <CardContent>
                                <Typography variant="h6">Permanent Passes</Typography>
                                <Typography variant="h4">20</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#4caf50', color: '#fff' }}>
                            <CardContent>
                                <Typography variant="h6">Permanent Passes</Typography>
                                <Typography variant="h4">20</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
                            <CardContent>
                                <Typography variant="h6">Permanent Passes</Typography>
                                <Typography variant="h4">20</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ backgroundColor: '#f44336', color: '#fff' }}>
                            <CardContent>
                                <Typography variant="h6">Permanent Passes</Typography>
                                <Typography variant="h4">20</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default DashboardUI;
