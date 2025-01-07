import React from 'react';
import { Card, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function MarketingCampaigns() {
  // Example mock data for campaigns
  const campaignsData = [
    { label: 'Campaign 1', value: 75, startDate: '2024-01-01', endDate: '2024-01-10' },
    { label: 'Campaign 2', value: 60, startDate: '2024-01-02', endDate: '2024-01-12' },
    { label: 'Campaign 3', value: 80, startDate: '2024-01-03', endDate: '2024-01-15' },
  ];

  return (
    <section style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', padding: '20px 30px', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '20px' }}>Marketing Campaigns</h2>
      <p style={{ fontSize: '1rem', color: '#555', marginBottom: '25px' }}>
        Track your ongoing and past campaigns here. Below is a table showing the key details of your current campaigns.
      </p>

      {/* Campaigns Table */}
      <Card sx={{ borderRadius: 3, boxShadow: 2, padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '15px' }}>
          Campaign Details
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 600 }}>Campaign Name</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>Success Rate</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>Start Date</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaignsData.map((campaign, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{campaign.label}</TableCell>
                  <TableCell align="center">{campaign.value}%</TableCell>
                  <TableCell align="center">{campaign.startDate}</TableCell>
                  <TableCell align="center">{campaign.endDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Add New Campaign Button */}
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary" sx={{ borderRadius: 2, padding: '10px 20px' }}>
          Add New Campaign
        </Button>
      </Box>
    </section>
  );
}
