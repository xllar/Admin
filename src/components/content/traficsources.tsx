import React from 'react';
import { Card, Typography, Box, Grid, LinearProgress } from '@mui/material';

export default function TrafficSources() {
  // Example mock data for traffic sources
  const trafficData = [
    { label: 'Direct', value: 40 },
    { label: 'Organic Search', value: 30 },
    { label: 'Social Media', value: 15 },
    { label: 'Referrals', value: 10 },
    { label: 'Paid Ads', value: 5 },
  ];

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 4 }}>
        Traffic Sources
      </Typography>
      <p className="text-gray-600 mb-6">Understand where your traffic is coming from.</p>

      <Grid container spacing={4}>
        {trafficData.map((source, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {source.label}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={source.value}
                  sx={{ height: 8, borderRadius: 5, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                  color="primary"
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                {source.value}%
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
