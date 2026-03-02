'use client';

import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  alpha,
  useTheme
} from "@mui/material";

interface AboutTeaserProps {
  image: string | StaticImageData;
  description: string;
  author?: string;
}

const AboutTeaser = ({ image, description, author }: AboutTeaserProps) => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              data-aos="fade-right"
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: theme.shadows[10],
                aspectRatio: '1/1',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to bottom right, ${alpha(theme.palette.primary.main, 0.2)}, transparent)`,
                  pointerEvents: 'none'
                }
              }}
            >
              <Image
                src={image}
                alt="About me"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box data-aos="fade-left">
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 60,
                    height: 4,
                    bgcolor: 'primary.main',
                    borderRadius: 2
                  }
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 4,
                  fontWeight: 400
                }}
              >
                {description}
              </Typography>
              {author && (
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    fontStyle: 'italic',
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    pl: 2
                  }}
                >
                  — {author}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutTeaser;
