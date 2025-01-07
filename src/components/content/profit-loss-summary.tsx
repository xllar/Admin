'use client'
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', profit: 4000, loss: 2400 },
  { month: 'Feb', profit: 3000, loss: 1398 },
  { month: 'Mar', profit: 2000, loss: 9800 },
  { month: 'Apr', profit: 2780, loss: 3908 },
  { month: 'May', profit: 1890, loss: 4800 },
  { month: 'Jun', profit: 2390, loss: 3800 },
  { month: 'Jul', profit: 3490, loss: 4300 },
];

export default function ProfitLossSummary() {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, mb: 4 }}>
      <CardContent>
      <Typography
  variant="h6"
  component="h2"
  sx={{
    mb: 1,
    fontWeight: 'bold',
    color: 'primary.main',
  }}
>
  Profit/Loss Summary
</Typography>
<Typography
  variant="body2"
  color="text.secondary"
  sx={{
    mb: 3,
  }}
>
  Financial performance overview with graphs below.
</Typography>


        {/* Graph Section */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="profit" stroke="#4caf50" name="Profit" />
            <Line type="monotone" dataKey="loss" stroke="#f44336" name="Loss" />
          </LineChart>
        </ResponsiveContainer>

        {/* Optional: Add more information or styling */}
        <Box sx={{ mt: 2, textAlign: 'center', color: 'gray' }}>
          <Typography variant="body2">
            The graph above shows the profit and loss summary over the last 6 months.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
