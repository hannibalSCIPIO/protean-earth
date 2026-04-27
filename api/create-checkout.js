const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || process.env.stripe_secret_key);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { product, amount } = req.body;

  if (!product || !amount) {
    return res.status(400).json({ error: 'Missing product or amount' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: product,
          },
          unit_amount: Math.round(amount * 100), // convert to cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.origin || 'https://magnets-five.vercel.app'}/success.html`,
      cancel_url: `${req.headers.origin || 'https://magnets-five.vercel.app'}/order.html`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
};