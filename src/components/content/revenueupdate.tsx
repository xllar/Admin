'use client'
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
  useTheme,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function RevenueUpdate() {
  const theme = useTheme();

  const salesData = [
    {
      label: 'Online Sales',
      value: 80000,
      percentage: '65% of total',
    },
    {
      label: 'In-Store Sales',
      value: 44567,
      percentage: '35% of total',
    },
  ];

  const chartData = [
    { name: 'Online', Revenue: 80000 },
    { name: 'In-Store', Revenue: 44567 },
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: 3,
        borderRadius: 3,
        p: 4,
        mb: 4,
      }}
    >
      <Typography
  variant="h6"
  sx={{
    fontWeight: 600,
    mb: 2,
    color: 'primary.main',
    
  }}
>
  Revenue Update
</Typography>

      <Grid container spacing={3}>
        {/* Revenue Chart */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              height: 240,
              display: 'flex',
              backgroundColor: theme.palette.grey[100],
              borderRadius: 2,
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
                <YAxis stroke={theme.palette.text.secondary} />
                <Tooltip />
                <Bar dataKey="Revenue" fill={theme.palette.primary.main} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Revenue Details */}
        <Grid item xs={12} md={6}>
          <List>
            {salesData.map(({ label, value, percentage }, index) => (
              <ListItem
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  backgroundColor: theme.palette.grey[50],
                  boxShadow: 1,
                  borderRadius: 2,
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    mr: 2,
                  }}
                >
                  <AttachMoneyIcon />
                </Avatar>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {label}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {percentage}
                    </Typography>
                  }
                />
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  ${value.toLocaleString()}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
