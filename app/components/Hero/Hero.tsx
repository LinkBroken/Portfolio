'use client';

import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  IconButton,
  Stack,
  useTheme,
  alpha
} from "@mui/material";
import Link from "next/link";
import gsap from "gsap";

interface SocialLink {
  href: string;
  element: string;
}

interface HeroProps {
  greeting?: string;
  image?: string;
  imageProp?: string;
  jobTitle?: string;
  name?: string;
  socialLinks?: SocialLink[];
}

export default function Hero({
  greeting,
  image,
  imageProp,
  jobTitle,
  name,
  socialLinks,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial state
    gsap.set([detailsRef.current?.children ?? [], imageRef.current], { opacity: 0 });

    tl.to(containerRef.current, {
      opacity: 1,
      duration: 0.5,
    })
      .fromTo(imageRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "elastic.out(1, 0.8)" }
      )
      .fromTo(detailsRef.current?.children ?? [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
        "-=0.8"
      );

    // Subtle breathing/glow on image
    gsap.to(imageRef.current, {
      boxShadow: `0 0 60px ${alpha(theme.palette.primary.main, 0.3)}`,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, [theme.palette.primary.main]);

  return (
    <Box
      ref={containerRef}
      component="section"
      sx={{
        py: { xs: 8, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        minHeight: { md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        background: `radial-gradient(circle at 70% 30%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }}>
            <Box ref={detailsRef}>
              <Typography
                variant="h6"
                color="primary"
                fontWeight={600}
                gutterBottom
                sx={{ letterSpacing: 2, textTransform: 'uppercase' }}
              >
                {greeting}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 2,
                  background: `linear-gradient(45deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                sx={{
                  fontWeight: 500,
                  mb: 4
                }}
              >
                {jobTitle}
              </Typography>

              <Stack direction="row" spacing={2}>
                {socialLinks?.map((link) => (
                  <IconButton
                    key={link.href}
                    component={Link}
                    href={link.href}
                    target="_blank"
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: 'primary.main',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-5px) rotate(8deg)',
                        boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                      },
                      '& svg': { width: 24, height: 24 }
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: link.element }} />
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
            <Box
              ref={imageRef}
              sx={{
                position: 'relative',
                width: { xs: 260, md: 400 },
                height: { xs: 260, md: 400 },
                margin: '0 auto',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: -20,
                  bottom: -20,
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.2)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                  animation: 'morph 8s ease-in-out infinite',
                  zIndex: -1,
                },
                '@keyframes morph': {
                  '0%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
                  '50%': { borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%' },
                  '100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
                }
              }}
            >
              <Avatar
                src={image}
                alt={imageProp}
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 0, // Make it non-circular if requested, or keep for Avatar. 
                  // But usually "remove the box" means no circular frame.
                  // I'll keep it standard Avatar for now but remove all styling.
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}