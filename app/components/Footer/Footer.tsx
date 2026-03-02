'use client';

import React from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  alpha,
  useTheme
} from "@mui/material";

type socialLink = { href: string; element?: string };
type footerlink = { href: string; label: string };

interface FooterProps {
  variant: "details" | "footer";
  title?: string;
  link?: footerlink;
  description?: string;
  socialLinks?: socialLink[];
  copyright?: string;
}

export default function Footer({
  variant,
  copyright,
  description,
  socialLinks,
  title,
  link,
}: FooterProps) {
  const theme = useTheme();

  if (variant === "details") {
    return (
      <Box
        component="section"
        sx={{
          py: 10,
          bgcolor: 'primary.main',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          {title && (
            <Typography variant="h3" fontWeight={800} gutterBottom>
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
              {description}
            </Typography>
          )}
          {link && (
            <IconButton
              component={Link}
              href={link.href}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 800,
                '&:hover': {
                  bgcolor: alpha('#ffffff', 0.9),
                  transform: 'translateY(-2px)'
                }
              }}
            >
              {link.label}
            </IconButton>
          )}
        </Container>
      </Box >
    );
  }

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            {copyright}
          </Typography>

          <Stack direction="row" spacing={1}>
            {socialLinks?.map((sLink) => (
              <IconButton
                key={sLink.href}
                component={Link}
                href={sLink.href}
                target="_blank"
                size="small"
                sx={{
                  color: 'text.secondary',
                  transition: 'all 0.2s',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: alpha(theme.palette.primary.main, 0.1)
                  }
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: sLink.element || "" }} />
              </IconButton>
            ))}
          </Stack>

          {link && (
            <Typography
              component={Link}
              href={link.href}
              variant="body2"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              {link.label}
            </Typography>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
