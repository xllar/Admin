import React from 'react';
import { Card, Typography, Box, Grid, Button, Avatar, Stack, Divider } from '@mui/material';
import {  PersonAdd, PersonRemove } from '@mui/icons-material';

export default function UserManagement() {
  const users = [
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Bob Smith', email: 'bob@example.com', role: 'User', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Charlie Lee', email: 'charlie@example.com', role: 'User', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ];

  return (
    <section className="bg-white rounded-lg shadow-xl p-8 mb-8">
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#3B82F6' }}>
        User Management
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
        Track and manage your users effectively with ease and style.
      </Typography>

      <Card sx={{ maxHeight: 250, overflowY: 'auto', borderRadius: 2, boxShadow: 3 }}>
        <Stack spacing={2} sx={{ padding: 3 }}>
          {users.map((user, index) => (
            <Grid
              container
              key={index}
              sx={{
                padding: 2,
                borderBottom: '1px solid #e5e5e5',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 1,
                '&:hover': { backgroundColor: '#f0f8ff', cursor: 'pointer' },
                transition: 'background-color 0.3s',
              }}
            >
              <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={user.avatar}
                  sx={{
                    width: 60,
                    height: 60,
                    marginRight: 2,
                    borderRadius: 1,
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#1E293B' }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {user.email}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    marginRight: 1,
                    textTransform: 'none',
                    backgroundColor: '#7C3AED',
                    '&:hover': {
                      backgroundColor: '#6D28D9',
                    },
                  }}
                >
                  {user.role}
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  startIcon={<PersonRemove />}
                  sx={{
                    textTransform: 'none',
                    borderColor: '#EF4444',
                    '&:hover': {
                      borderColor: '#DC2626',
                      backgroundColor: '#FEE2E2',
                    },
                  }}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          ))}
        </Stack>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Box sx={{ padding: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<PersonAdd />}
            sx={{
              textTransform: 'none',
              width: '20%',
              backgroundColor: '#9333EA',
              '&:hover': {
                backgroundColor: '#7E22CE',
              },
            }}
          >
            Add New User
          </Button>
        </Box>
      </Card>
    </section>
  );
}
