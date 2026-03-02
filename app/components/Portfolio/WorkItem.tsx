'use client';

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  alpha,
  useTheme,
  Dialog,
  DialogContent,
  IconButton,
  Grid
} from "@mui/material";
import { X as CloseIcon } from "lucide-react";
import { Project } from "@/app/data/work";
import Image from "next/image";

export default function WorkItem({ project }: { project: Project }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e: React.MouseEvent) => {
    if (project.category === 'mobile') {
      e.preventDefault();
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const isMobileProject = project.category === 'mobile';

  return (
    <>
      <Card
        component={isMobileProject ? "div" : Link}
        href={isMobileProject ? undefined : project.link}
        target={isMobileProject ? undefined : "_blank"}
        onClick={handleOpen}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          cursor: isMobileProject ? 'pointer' : 'pointer',
          '&:hover .MuiCardMedia-root': {
            transform: 'scale(1.1)',
          },
          '&:hover .MuiBox-root': {
            opacity: 1,
          }
        }}
      >
        <Box sx={{ position: 'relative', overflow: 'hidden', height: 260 }}>
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            sx={{
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: alpha(theme.palette.primary.main, 0.4),
              opacity: 0,
              transition: 'opacity 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant="button" sx={{ color: 'white', fontWeight: 700, bgcolor: 'primary.main', px: 2, py: 1, borderRadius: 2 }}>
              {isMobileProject ? "View Details" : "View Project"}
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h6" fontWeight={800} gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineBreak: 'anywhere' }}>
            {project.description}
          </Typography>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            bgcolor: 'background.paper',
            backgroundImage: 'none',
            overflow: 'hidden'
          }
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            zIndex: 1,
            color: 'text.secondary',
            bgcolor: alpha(theme.palette.background.paper, 0.8),
            '&:hover': { bgcolor: alpha(theme.palette.background.paper, 1) }
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ p: 0 }}>
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ height: { xs: 400, md: 600 }, overflowY: 'auto', bgcolor: 'rgba(0,0,0,0.05)' }}>
                <Image
                  src={project.image || '/placeholder.png'}
                  alt={project.title || ''}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight={900} gutterBottom color="primary.main">
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}>
                  {project.description}
                </Typography>
                {/* Additional metadata can go here if provided in data */}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
