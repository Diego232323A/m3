# M3_Booking

This microservice handles booking operations and publishes booking confirmation events using AWS SNS.

## Installation

1. Clone the repository.
2. Navigate to the microservice directory.
3. Run `npm install` to install dependencies.

## Usage

To start the microservice, run:

```bash
npm start

## Configuration

Ensure that your AWS credentials are properly configured. You can set the AWS region by updating the AWS_REGION environment variable.


## Docker Build and Run:

docker build -t booking_service .
docker run -p 3000:3000 booking_service .