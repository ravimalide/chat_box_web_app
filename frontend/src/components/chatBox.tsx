import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Divider } from '@mui/material';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      // Add the user's message to the chat
      setMessages([...messages, { sender: 'User', text: input }]);
      setInput('');

      // Placeholder for bot response (to be replaced with FastAPI integration)
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'Bot', text: 'This is a placeholder response.' },
      ]);
    }
  };

  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: 600,
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1976d2' }}>
        Chat Box
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          height: 300,
          overflowY: 'auto',
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: '#ffffff',
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: 1,
              padding: 1,
              borderRadius: 1,
              backgroundColor: message.sender === 'User' ? '#e3f2fd' : '#f1f8e9',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 'bold',
                color: message.sender === 'User' ? '#1976d2' : '#388e3c',
              }}
            >
              {message.sender}:
            </Typography>
            <Typography variant="body1">{message.text}</Typography>
          </Box>
        ))}
      </Paper>
      <Divider sx={{ marginBottom: 2 }} />
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          sx={{ backgroundColor: '#ffffff', borderRadius: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{
            padding: '10px 20px',
            borderRadius: 1,
            textTransform: 'none',
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;