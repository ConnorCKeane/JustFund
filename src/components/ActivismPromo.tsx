import React from "react";
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

const LandingPage = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundColor: "#fcf7ed",
                py: 4,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="md">
                {/* Email Signup Section */}
                <Paper
                    elevation={3}
                    sx={{
                        borderRadius: "20px",
                        p: 4,
                        textAlign: "center",
                        mb: 4,
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            color: "#4d7a57",
                            fontWeight: 600,
                            mb: 2,
                        }}
                    >
                        Stay Informed
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#4d7a57",
                            mb: 3,
                            fontSize: "18px",
                        }}
                    >
                        Sign up for email updates on upcoming rallies and volunteer opportunities.
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            type="email"
                            sx={{
                                width: "80%",
                                maxWidth: "400px",
                                mr: 2,
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "8px",
                                    "& fieldset": {
                                        borderColor: "#2E8B57",
                                        borderWidth: "2px",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#2E8B57",
                                    },
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
                                "&:hover": { backgroundColor: "#4d7a57" },
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Paper>

                {/* Popular Events Section */}
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        color: "#4d7a57",
                        fontWeight: 600,
                        textAlign: "center",
                        mb: 3,
                    }}
                >
                    Upcoming Events
                </Typography>

                <Grid container spacing={4}>
                    {events.map((event) => (
                        <Grid item xs={12} sm={6} md={4} key={event.id}>
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
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            color: "#4d7a57",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#4d7a57" }}>
                                        {event.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default LandingPage;