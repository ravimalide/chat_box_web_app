import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

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
    <Box sx={{ padding: 2, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
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
        }}
      >
        {messages.map((message, index) => (
          <Box key={index} sx={{ marginBottom: 1 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {message.sender}:
            </Typography>
            <Typography variant="body1">{message.text}</Typography>
          </Box>
        ))}
      </Paper>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBox;