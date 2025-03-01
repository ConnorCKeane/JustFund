import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { keyframes } from "@mui/system";

const events = [
  {
    id: 1,
    title: "Community Rally",
    description: "Join us for a community rally for positive change.",
    image: "https://picsum.photos/seed/rally/400/300",
  },
  {
    id: 2,
    title: "Volunteer Meetup",
    description: "Meet and connect with passionate volunteers.",
    image: "https://picsum.photos/seed/fooddrive/400/300",
  },
  {
    id: 3,
    title: "Awareness Walk",
    description: "Walk together to raise awareness.",
    image: "https://picsum.photos/seed/marathon/400/300",
  },
];

// Updated keyframes animation that starts at 0% (content visible) and scrolls seamlessly.
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LandingPage = () => {
  // Capture the time when the page is loaded.
  const [startTime] = useState(new Date());
  const startTimeFormatted = startTime.toLocaleTimeString();

  // Define rates (counts per second) for each statistic.
  const RATE_WRONGFUL = 0.5;
  const RATE_UNJUST = 1;
  const RATE_BIAS = 0.2;

  // Track elapsed time (in seconds) since the page loaded.
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((Date.now() - startTime.getTime()) / 1000);
    }, 100);
    return () => clearInterval(timer);
  }, [startTime]);

  // Compute counters.
  const counter1 = Math.floor(elapsed * RATE_WRONGFUL);
  const counter2 = Math.floor(elapsed * RATE_UNJUST);
  const counter3 = Math.floor(elapsed * RATE_BIAS);

  return (
    <Box
      sx={{
        ml: "200px", // Offset by sidebar width
        width: "calc(100% - 200px)",
        minHeight: "100vh",
        backgroundColor: "#fcf7ed",
        py: 4,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        {/* Impactful Phrase */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h3" sx={{ color: "#4d7a57", fontWeight: 900, pb: 1 }}>
            Injustice Cannot Wait
          </Typography>
        </Box>

        {/* Counters Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" sx={{ color: "#4d7a57", fontSize: "1.2rem" }}>
                Hate Crimes Occurrences as of {startTimeFormatted}:
              </Typography>
              <Typography variant="h2" sx={{ color: "#4d7a57", fontWeight: 700, fontSize: "3rem" }}>
                {counter1}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" sx={{ color: "#4d7a57", fontSize: "1.2rem" }}>
                Wrongful Incarcerations as of {startTimeFormatted}:
              </Typography>
              <Typography variant="h2" sx={{ color: "#4d7a57", fontWeight: 700, fontSize: "3rem" }}>
                {counter2}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body1" sx={{ color: "#4d7a57", fontSize: "1.2rem" }}>
                Systemic Bias Cases as of {startTimeFormatted}:
              </Typography>
              <Typography variant="h2" sx={{ color: "#4d7a57", fontWeight: 700, fontSize: "3rem" }}>
                {counter3}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Email Signup Section */}
        <Paper
          elevation={6}
          sx={{
            borderRadius: "20px",
            p: 4,
            textAlign: "center",
            mb: 4,
            background: "linear-gradient(135deg, #fdfcfb, #e2d1c3)",
          }}
        >
          <Typography variant="h3" component="h1" sx={{ color: "#4d7a57", fontWeight: 600, mb: 2 }}>
            Stay Informed
          </Typography>
          <Typography variant="body1" sx={{ color: "#4d7a57", mb: 3, fontSize: "18px" }}>
            Sign up for email updates on upcoming rallies and volunteer opportunities.
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              width: "100%",
              maxWidth: "400px",
              mx: "auto",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              type="email"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "& fieldset": { borderColor: "#2E8B57", borderWidth: "2px" },
                  "&:hover fieldset": { borderColor: "#2E8B57" },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4d7a57",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                fontSize: "18px",
                fontWeight: 600,
                textTransform: "none",
                width: "100%",
                "&:hover": { backgroundColor: "#4d7a57" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Paper>

        {/* Act Now Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ color: "#4d7a57", fontWeight: 600, textAlign: "center", mb: 2 }}>
            Act Now
          </Typography>
          <Box sx={{ overflow: "hidden", position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                animation: `${scrollAnimation} 30s linear infinite`,
              }}
            >
              {events.map((event) => (
                <Box key={event.id} sx={{ minWidth: "300px" }}>
                  <Card
                    sx={{
                      borderRadius: "20px",
                      boxShadow: "0 15px 25px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={event.image}
                      alt={event.title}
                      sx={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "#4d7a57", fontWeight: 600 }}>
                        {event.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#4d7a57" }}>
                        {event.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
              {/* Duplicate events for seamless continuous scrolling */}
              {events.map((event) => (
                <Box key={`duplicate-${event.id}`} sx={{ minWidth: "300px" }}>
                  <Card
                    sx={{
                      borderRadius: "20px",
                      boxShadow: "0 15px 25px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={event.image}
                      alt={event.title}
                      sx={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "#4d7a57", fontWeight: 600 }}>
                        {event.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#4d7a57" }}>
                        {event.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;