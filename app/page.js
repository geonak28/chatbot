'use client'
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Hi! I am a Headstarter AI Assistant, how can I assist you today',
  }])
  const [message, setMessage] = useState('')

  const hardCodedResponses = {
    "hello": "Hi! I am a Headstarter AI Assistant, how can I help you today?",
    "what can you do": "HeadstartAI offers AI-powered interviews for software engineering positions, and our platform helps candidates practice, and prepare for real job interviews.",
    "support": "You can visit our troubleshooting page or contact our technical support team.",
    "privacy statement": "We do not share private information.",
    "help": "If you are unsure about any information, it is okay to say you do not know and offer to connect the user with a human representative.",
    "what is your goal": "Our goal is to provide accurate information, assist with common inquiries, and ensure a positive experience for all HeadstartAI users.",
    "": "Please, try again.",
    "practice": "You can practice a wide range of topics, including algorithms, data structures, system design, and behavioral questions.",
    "prepare for interview": "Sure thing! I can help you practice various topics for interviews related to software engineering. Let me know what specific area you'd like to focus on.",
    "algorithms": "Algorithms are step-by-step procedures or formulas for solving problems. This often involves data manipulation, searching, sorting, and optimization. Common algorithms include binary search, quicksort, and dynamic programming.",
    "databases": "Databases are used to store and manage data. During interviews, the questions might involve writing queries, designing schemas, or discussing database optimization.",
    "more resources": "Some popular resources include coding practice websites like LeetCode and HackerRank, books like 'Cracking the Coding Interview,' and platforms like Interviewing.io for mock interviews.",
    "help me with coding": "Certainly! I can provide guidance on coding problems, including explanations of various topics.",
    "I don’t understand": "I apologize. If you don’t understand my response, I could try rephrasing it or providing more details. You can also ask in a different way or let me know if you need clarification on a specific topic mentioned."
  }

  const getResponse = (userMessage) => {
    const filteredMessage = userMessage.toLowerCase().trim();
    return hardCodedResponses[filteredMessage] || hardCodedResponses[""];
  }

  const sendMessage = async () => {
    const userMessage = message.trim();
    const response = getResponse(userMessage);

    setMessage('')
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: response },
    ])
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      maxHeight="100%"
      display="flex"
      bgcolor="#F5F1E4"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="100vw"
        height="100px"
        bgcolor="#44715B"
        border="2px solid black"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="650px"
          height="60px"
          fontSize={45}
          border="1px solid black"
          marginLeft={5}
          marginTop={2}
          bgcolor='#DCC16E'
          color='#44715B'
          borderRadius={16}
          textAlign="center"
        >
          HeadStarterAI by BinaryDuo
        </Box>
      </Box>
      <Stack
        direction="column"
        width="600px"
        height="700px"
        border="3px solid black"
        marginTop={1}
        p={2}
        spacing={3}
      >
        <Stack
          direction="column"
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display='flex'
              color='#F5F1E4'
              justifyContent={
                message.role === 'assistant' ? 'flex-start' : 'flex-end'
              }
            >
              <Box
                bgcolor={
                  message.role === 'assistant' ? '#122722' : '#2D5B50'
                }
                color="white"
                borderRadius={16}
                p={3}
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack
          direction="row"
          spacing={2}
        >
          <TextField
            label="Enter Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            sx={{
              backgroundColor: '#44715B',
              color: 'white',
              transition: 'box-shadow 0.3s ease',
              '&:hover': {
                backgroundColor: '#44715B',
                boxShadow: '0 0 10px #2D5B50, 0 0 40px #2D5B50, 0 0 80px #2D5B50',
              },
            }}
            variant="contained"
            onClick={sendMessage}
          > Send </Button>
        </Stack>
      </Stack>
      <Box
        width="600px"
        height="60px"
        border="3px solid black"
        bgcolor="#B9AE9A"
        alignItems="center"
      >
        <Box
          width="50px"
          height="50px"
          border="1px solid black"
          bgcolor="#122722"
          borderRadius={20}
          marginLeft={33}
        >
        </Box>
      </Box>
    </Box >
  )
}
