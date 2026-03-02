'use client';

import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid
} from "@mui/material";
import { myProjects } from "@/app/data/work";
import WorkItem from "./WorkItem";

export default function Portfolio() {
  const webProjects = myProjects?.filter(p => p.category === 'web');
  const mobileProjects = myProjects?.filter(p => p.category === 'mobile');

  return (
    <Box
      id="portfolio"
      component="section"
      sx={{
        py: { xs: 8, md: 15 },
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          fontWeight={900}
          sx={{ mb: 8 }}
        >
          Selected Web Works
        </Typography>
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {webProjects?.map((project) => (
            <Grid key={project.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <WorkItem project={project} />
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h2"
          align="center"
          fontWeight={900}
          sx={{ mb: 8 }}
        >
          Mobile Apps
        </Typography>
        <Grid container spacing={4}>
          {mobileProjects?.map((project) => (
            <Grid key={project.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <WorkItem project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
