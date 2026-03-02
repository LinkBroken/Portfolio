'use client';

import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    Chip,
    useTheme,
    alpha,
    Tooltip,
    Paper,
    Divider
} from '@mui/material';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from 'recharts';
import { Skill } from '@/app/data/pageProps';

interface SkillsSectionProps {
    skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    const theme = useTheme();

    // Prepare data for the Radar Chart (top skills across both categories)
    const featuredSkills = [
        'Kotlin', 'Swift', 'Next.js', 'System Design', 'Supabase', 'Teamwork', 'OOP'
    ];

    const chartData = skills
        .filter(skill => featuredSkills.includes(skill.name))
        .map(skill => ({
            subject: skill.name,
            A: skill.proficiency,
            fullMark: 100,
        }));

    const technicalSkills = skills.filter(s => s.category === 'Technical');
    const softSkills = skills.filter(s => s.category === 'Soft Skills');

    return (
        <Container id="skills" maxWidth="lg" sx={{ py: 10 }}>
            <Grid container spacing={6}>
                {/* Proficiency Visualization */}
                <Grid size={{ xs: 12, lg: 5 }}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            borderRadius: 4,
                            bgcolor: alpha(theme.palette.primary.main, 0.03),
                            border: `1px solid ${theme.palette.divider}`,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h5" fontWeight={800} gutterBottom>
                                Expertise Radar
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A holistic view of my core engineering and professional competencies.
                            </Typography>
                        </Box>

                        <Box sx={{ width: '100%', height: 350 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                                    <PolarGrid stroke={theme.palette.divider} />
                                    <PolarAngleAxis
                                        dataKey="subject"
                                        tick={{ fill: theme.palette.text.secondary, fontSize: 13, fontWeight: 700 }}
                                    />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                    <Radar
                                        name="Proficiency"
                                        dataKey="A"
                                        stroke={theme.palette.primary.main}
                                        fill={theme.palette.primary.main}
                                        fillOpacity={0.6}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </Box>
                    </Paper>
                </Grid>

                {/* Skill Lists */}
                <Grid size={{ xs: 12, lg: 7 }}>
                    {/* Technical Toolkit */}
                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" fontWeight={800} gutterBottom sx={{ mb: 3 }}>
                            Technical Toolkit
                        </Typography>
                        <Grid container spacing={2}>
                            {technicalSkills.map((skill) => (
                                <Grid key={skill.name} size={{ xs: 6, sm: 4, md: 3 }}>
                                    <Tooltip title={`${skill.years} years of experience`} arrow>
                                        <Card
                                            sx={{
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                p: 2,
                                                textAlign: 'center',
                                                transition: 'all 0.2s',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: theme.shadows[4],
                                                    borderColor: theme.palette.primary.main,
                                                }
                                            }}
                                        >
                                            <Box sx={{
                                                width: 40,
                                                height: 40,
                                                position: 'relative',
                                                mb: 1.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                />
                                            </Box>
                                            <Typography variant="body2" fontWeight={800} sx={{ mb: 0.5, lineHeight: 1.2 }}>
                                                {skill.name}
                                            </Typography>
                                            <Chip
                                                label={skill.level}
                                                size="small"
                                                color={skill.level === 'Strong' ? 'primary' : 'default'}
                                                sx={{
                                                    fontSize: '0.9rem',
                                                    height: 22,
                                                    fontWeight: 800
                                                }}
                                            />
                                        </Card>
                                    </Tooltip>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Divider sx={{ mb: 4 }} />

                    {/* Non-Technical / Soft Skills */}
                    <Box>
                        <Typography variant="h5" fontWeight={800} gutterBottom sx={{ mb: 3 }}>
                            Professional & Soft Skills
                        </Typography>
                        <Grid container spacing={2}>
                            {softSkills.map((skill) => (
                                <Grid key={skill.name} size={{ xs: 6, sm: 4, md: 3 }}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            p: 2,
                                            textAlign: 'center',
                                            bgcolor: alpha(theme.palette.secondary.main, 0.02),
                                            border: `1px dashed ${alpha(theme.palette.secondary.main, 0.2)}`
                                        }}
                                    >
                                        <Box sx={{
                                            width: 40,
                                            height: 40,
                                            mb: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <img
                                                src={skill.image}
                                                alt={skill.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            />
                                        </Box>
                                        <Typography variant="body2" fontWeight={800}>
                                            {skill.name}
                                        </Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
