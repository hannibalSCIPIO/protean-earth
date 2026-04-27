module.exports = (req, res) => {
  res.json({
    env: Object.keys(process.env).filter(k => k.toLowerCase().includes('stripe')),
    stripeKey: process.env.STRIPE_SECRET_KEY ? 'SET' : process.env.stripe_secret_key ? 'SET (lowercase)' : 'MISSING'
  });
};
