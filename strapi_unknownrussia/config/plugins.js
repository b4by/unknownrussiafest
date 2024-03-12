module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'localhost'),
        port: env('SMTP_PORT', 25),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'info@unknownrussiafest.ru',
        defaultReplyTo: 'info@unknownrussiafest.ru',
      },
    },
  },
});