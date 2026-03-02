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
  useTheme
} from "@mui/material";
import { Project } from "@/app/data/work";

export default function WorkItem({ project }: { project: Project }) {
  const theme = useTheme();

  return (
    <Card
      component={Link}
      href={project.link}
      target="_blank"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        '&:hover .MuiCardMedia-root': {
          transform: 'scale(1.1)',
        },
        '&:hover .MuiBox-root': {
          opacity: 1,
        }
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            height: '100%',
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
            bgcolor: alpha(theme.palette.primary.main, 0.2),
            opacity: 0,
            transition: 'opacity 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="button" sx={{ color: 'white', fontWeight: 700, bgcolor: 'primary.main', px: 2, py: 1, borderRadius: 2 }}>
            View Project
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
  );
}
