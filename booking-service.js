const express = require('express');
const AWS = require('aws-sdk');
const app = express();
app.use(express.json());

// Configurar AWS SDK
AWS.config.update({
  region: process.env.AWS_REGION || 'us-east-2'
});

const sns = new AWS.SNS();

const publishBookingConfirmedEvent = async (bookingId, userId) => {
    const params = {
        Message: JSON.stringify({ bookingId, userId }),
        TopicArn: 'arn:aws:sns:us-east-2:339712766050:BookingConfirmed'
    };
    await sns.publish(params).promise();
};


app.post('/book', async (req, res) => {
    const { bookingId, userId } = req.body;

    // Lógica de reserva aquí...

    // Publicar evento de reserva confirmada
    await publishBookingConfirmedEvent(bookingId, userId);

    res.status(201).send({ message: 'Booking confirmed', bookingId });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Booking service running on port ${PORT}`);
});
