/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const RealTimeInsights: React.FC = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [sales, setSales] = useState<any[]>([]);
  const [revenue, setRevenue] = useState<any[]>([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [loading, setLoading] = useState(false);

  // Simulate API data fetching
  const fetchData = async () => {
    try {
      setLoading(true);
      // Simulated data fetch logic
      const mockSales = Array.from({ length: 12 }, (_, i) => ({
        x: `2024-01-${i + 1}`,
        y: Math.random() * 1000,
      }));
      const mockRevenue = Array.from({ length: 12 }, (_, i) => ({
        x: `2024-01-${i + 1}`,
        y: Math.random() * 5000,
      }));

      setSales(mockSales);
      setRevenue(mockRevenue);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // Fetch data every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.main' }}>
          Real-Time Insights
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FormControl size="small" sx={{ minWidth: 150, mr: 3 }}>
            <InputLabel id="time-range-label">Time Range</InputLabel>
            <Select
              labelId="time-range-label"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              sx={{ backgroundColor: 'background.paper' }}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="Refresh Data">
            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={handleRefresh}
              disabled={loading}
              sx={{ color: 'secondary.main', borderColor: 'secondary.main' }}
            >
              {loading ? <CircularProgress size={24} /> : 'Refresh'}
            </Button>
          </Tooltip>
        </Box>
      </Box>

      {/* Last Updated */}
      <Typography variant="body2" color="text.secondary" align="right" sx={{ mb: 4 }}>
        Last updated: {lastUpdated.toLocaleTimeString()}
      </Typography>

      {/* Main Insights Section */}
      <Grid container spacing={4}>
        {/* Monthly Sales Card */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.02)' },
              backgroundColor: 'background.paper',
            }}
          >
            <CardContent>
  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
    Monthly Sales
  </Typography>
  <Divider sx={{ my: 2, borderColor: 'primary.main' }} />
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={sales}>
      <XAxis dataKey="x" />
      <YAxis />
      <Area type="monotone" dataKey="y" stroke="#4caf50" fill="#c8e6c9" />
    </AreaChart>
  </ResponsiveContainer>
</CardContent>

          </Card>
        </Grid>

        {/* Monthly Revenue Card */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.02)' },
              backgroundColor: 'background.paper',
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                Monthly Revenue
              </Typography>
              <Divider sx={{ my: 2, borderColor: 'primary.main' }} />
              <BarChart
                xAxis={[{ data: revenue.map((d) => d.x), scaleType: 'band' }]}
                series={[{ data: revenue.map((d) => d.y), color: '#ff5722' }]}
                width={450}
                height={300}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Gauge Insights */}
        <Grid item xs={12}>
  <Card
    sx={{
      borderRadius: 3,
      boxShadow: 2,
      p: 4,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      backgroundColor: 'background.paper',
      color: 'text.primary',
      gap: 3, // Space between items
    }}
  >
    {[{ label: 'Sales Target', value: 75 }, { label: 'Revenue Growth', value: 50 }, { label: 'Active Users', value: 65 }].map(
      (gauge, index) => (
        <Box key={index} sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              color: 'text.secondary', // Lighter color for a minimalist touch
              mb: 1, // Margin below the label
            }}
          >
            {gauge.label}
          </Typography>
          <Gauge
            width={100}
            height={100}
            value={gauge.value}
            valueMin={0}
            valueMax={100}
            sx={{
              color: 'primary.main', // Simple primary color for the gauge
              border: '1px solid #e0e0e0', 
            }}
          />
        </Box>
      )
    )}
  </Card>
</Grid>

      </Grid>
    </Box>
  );
};

export default RealTimeInsights;
