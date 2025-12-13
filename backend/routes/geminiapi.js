import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

router.post('/', async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ message: 'Code is required' });
  }

  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Only write the algorithm steps of the following code. Do not write anything else. Start directly with step 1. \n ${code}` }] }]
      })
    });

    const data = await response.json();


    const algorithm = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Algorithm not found';

    res.status(200).json({ algorithm });

  } catch (err) {
    console.error('Error fetching algorithm from Gemini:', err);
    res.status(500).json({ message: 'Error generating algorithm' });
  }
});

export default router;
