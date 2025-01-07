import React from 'react';
import { Card, Typography, List, ListItem, ListItemText, ListItemIcon, Badge } from '@mui/material';
import { NotificationImportant, ShoppingCart, Feedback } from '@mui/icons-material';

export default function Notifications() {
  const notifications = [
    { message: 'New order received!', time: '2 minutes ago', icon: <ShoppingCart />, color: '#1976D2', status: 'New' },
    { message: 'Customer feedback posted.', time: '1 hour ago', icon: <Feedback />, color: '#4CAF50', status: 'Resolved' },
    { message: 'Product restock available.', time: '3 hours ago', icon: <NotificationImportant />, color: '#FF9800', status: 'Urgent' },
  ];

  return (
    <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 4 }}>
        Notifications
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
        Stay updated with the latest alerts and messages.
      </Typography>

      <Card sx={{ maxHeight: 300, overflowY: 'auto', padding: 2, borderRadius: '10px' }}>
        <List>
          {notifications.map((notification, index) => (
            <ListItem
              key={index}
              sx={{
                borderBottom: '1px solid #f0f0f0',
                paddingY: 1.5,
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#f1f8ff',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transform: 'scale(1.02)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, display: 'flex', justifyContent: 'center' }}>
                <Badge
                  color={notification.status === 'Urgent' ? 'error' : 'default'}
                  variant="dot"
                  sx={{ marginRight: 1 }}
                >
                  {React.cloneElement(notification.icon, {
                    sx: { color: notification.color, fontSize: 30, backgroundColor: '#ffffff', padding: '5px', borderRadius: '50%' },
                  })}
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#333' }}>
                    {notification.message}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {notification.time}
                  </Typography>
                }
                sx={{ paddingRight: 2 }}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </section>
  );
}
