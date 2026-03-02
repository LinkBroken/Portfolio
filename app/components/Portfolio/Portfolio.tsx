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
          Selected Works
        </Typography>
        <Grid container spacing={4}>
          {myProjects?.map((project) => (
            <Grid key={project.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <WorkItem project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
