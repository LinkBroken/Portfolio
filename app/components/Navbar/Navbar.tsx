'use client';

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo?: string | StaticImageData;
  logoAlt?: string;
  links?: NavLink[];
  linksOnly?: boolean;
}

export default function Navbar({
  logo,
  logoAlt,
  links,
  linksOnly,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {links?.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton
              component={Link}
              href={link.href}
              sx={{ textAlign: "center", borderRadius: 2 }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontWeight: 700,
                  variant: 'h6'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <ThemeToggle />
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.default',
        borderBottom: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 } }}>
          {logo && !linksOnly && (
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <Link href="/">
                <Box sx={{ position: 'relative', width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}>
                  <Image
                    src={logo}
                    alt={logoAlt ?? "Portfolio Logo"}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Link>
            </Box>
          )}

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: (logo && !linksOnly) ? 'none' : 'block',
              fontWeight: 800,
              color: 'primary.main',
              ml: (logo && !linksOnly) ? 0 : 2
            }}
          >
            OMER
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile && links && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {links.map((link) => (
                <ListItemButton
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    borderRadius: 2,
                    px: 2,
                    color: 'text.primary',
                    '&:hover': {
                      bgcolor: 'primary.alpha-10',
                      color: 'primary.main',
                    },
                  }}
                >
                  <Typography variant="body1" fontWeight={600}>
                    {link.label}
                  </Typography>
                </ListItemButton>
              ))}
              <Box sx={{ ml: 2 }}>
                <ThemeToggle />
              </Box>
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            bgcolor: 'background.default'
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
