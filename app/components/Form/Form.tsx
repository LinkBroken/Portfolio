'use client';

import React from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Stack,
  alpha,
  useTheme
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send as SendIcon } from "lucide-react";
import { useEmailSender } from "@/app/hooks/useEmailSender";
import Loader from "../loader/Loader";

// Define Zod schema for form validation
const contactSchema = z.object({
  from_name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  reply_to: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormProps {
  introText?: string;
}

export default function Form({ introText }: FormProps) {
  const theme = useTheme();
  const { isSubmitting, sendEmail } = useEmailSender();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    const success = await sendEmail(data);
    if (success) {
      reset();
    }
  };

  return (
    <Box component="section" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            border: `1px solid ${theme.palette.divider}`,
            bgcolor: alpha(theme.palette.primary.main, 0.02)
          }}
        >
          {introText && (
            <Typography
              variant="h3"
              align="center"
              fontWeight={800}
              sx={{ mb: 4, color: 'primary.main' }}
            >
              {introText}
            </Typography>
          )}

          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                {...register("from_name")}
                error={!!errors.from_name}
                helperText={errors.from_name?.message}
                FormHelperTextProps={{ sx: { fontSize: '1.4rem' } }}
                sx={{ bgcolor: 'background.paper' }}
              />

              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                {...register("reply_to")}
                error={!!errors.reply_to}
                helperText={errors.reply_to?.message}
                FormHelperTextProps={{ sx: { fontSize: '1.4rem' } }}
                sx={{ bgcolor: 'background.paper' }}
              />

              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                multiline
                rows={5}
                {...register("message")}
                error={!!errors.message}
                helperText={errors.message?.message}
                FormHelperTextProps={{ sx: { fontSize: '1.4rem' } }}
                sx={{ bgcolor: 'background.paper' }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                endIcon={!isSubmitting && <SendIcon size={18} />}
                sx={{
                  py: 1.5,
                  fontWeight: 700
                }}
              >
                {isSubmitting ? <Loader /> : "Send Message"}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
