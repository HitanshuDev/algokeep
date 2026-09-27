import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ message: 'Code is required' });
  }

  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=' + process.env.GEMINI_API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Only write the algorithm steps of the following code. Do not write anything else. Start directly with step 1. \n ${code}` }] }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', data.error);
      return res.status(502).json({ message: data.error?.message || 'Gemini API request failed' });
    }

    const algorithm = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!algorithm) {
      console.error('Gemini API returned no candidates:', JSON.stringify(data));
      return res.status(502).json({ message: 'Gemini did not return an algorithm for this code' });
    }

    res.status(200).json({ algorithm });

  } catch (err) {
    console.error('Error fetching algorithm from Gemini:', err);
    res.status(500).json({ message: 'Error generating algorithm' });
  }
});

export default router;
