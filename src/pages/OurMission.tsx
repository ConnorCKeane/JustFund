import React from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const linkedinLogo = "/LinkedInLogo2.png"; // Replace with actual LinkedIn logo image path or URL

const teamMembers = [
    {
      name: "Matthew Manganillo",
      role: "Back End Developer",
      description: "Matthew is a full stack developer, connecting user interfaces with server-side systems for a seamless experience.",
      image: "/MattHeadShot.JPG", // Replace with the actual image path
      linkedin: "https://www.linkedin.com/in/matthew-manganillo", // Replace with actual LinkedIn profile URL
    },
    {
      name: "Connor Keane",
      role: "Front End Developer",
      description: "Connor is focused on building and refining the user-facing part of the application, ensuring a smooth and visually appealing user experience.",
      image: "/KeaneHeadShot.jpg", // Replace with the actual image path
      linkedin: "https://www.linkedin.com/in/connor-keane", // Replace with actual LinkedIn profile URL
    },
    {
      name: "Will St.Pierre",
      role: "Project Manager",
      description: "Will oversees the entire project lifecycle, ensuring that deadlines are met and all team members are aligned with the project's goals.",
      image: "/Will-Headshot.jpg", // Replace with the actual image path
      linkedin: "https://www.linkedin.com/in/will-st-pierre/", // Replace with actual LinkedIn profile URL
    },
];

const OurMission: React.FC = () => {
  return (
    <div>
      <Header />
      <Box sx={{ padding: 4, backgroundColor: '#fcf7ed'}}>
        <Typography variant="h5" align="center" gutterBottom paddingBottom={1} style={{color: "#4d7a57"}}>
          Our Mission
        </Typography> 
        <Typography variant="body1" align="center" color="text.secondary" paddingBottom={2} style={{color: "#4d7a57"}}>
            Our mission is to develop innovative, user-friendly software solutions that solve real-world problems. 
            We strive to combine technical expertise with creativity, ensuring a seamless and impactful experience 
            for our users. By fostering collaboration, continuous learning, and a passion for technology, we aim to 
            push the boundaries of what’s possible and deliver value to our community.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ maxWidth: 345, position: 'relative' }}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: 8, right: 8 }}>
                  <img 
                    src={linkedinLogo} 
                    alt="LinkedIn" 
                    style={{ width: 24, height: 24 }} 
                  />
                </a>
                <CardMedia
                  component="img"
                  height="355"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer/>
    </div>
  );
}

export default OurMission;