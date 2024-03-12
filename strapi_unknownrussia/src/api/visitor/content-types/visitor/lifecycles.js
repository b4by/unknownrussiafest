module.exports = {
  async afterCreate(event) {
    const { result } = event;
    if (result.firstname && result.email) {
      try {
        const userWithMovie = await strapi.entityService.findOne(
          "api::visitor.visitor",
          result.id,
          {
            populate: {
              movie: { populate: { poster: true, screenshots: true } },
            },
          }
        );

        await strapi
          .plugin("email-designer")
          .service("email")
          .sendTemplatedEmail(
            {
              to: result.email,

              // optional if /config/plugins.js -> email.settings.defaultFrom is set
              from: "Неизвестная Россия <status@unknownrussiafest.ru>",

              // optional if /config/plugins.js -> email.settings.defaultReplyTo is set
              replyTo: "info@unknownrussiafest.ru",

              // optional array of files
              attachments: [],
            },
            {
              // required - Ref ID defined in the template designer (won't change on import)
              templateReferenceId: 1,
              subject: `Ваш билет на фильм - ${userWithMovie.movie.title} / Неизвестная Россия`,
            },
            {
              // this object must include all variables you're using in your email template
              USER: {
                firstname: userWithMovie.firstname,
                lastname: userWithMovie.lastname,
              },
              movieName: userWithMovie.movie.title,
              date: formatDateTime(userWithMovie.movie.date),
            }
          );
      } catch (err) {
        strapi.log.debug("📺: ", err);
        return ctx.badRequest(null, err);
      }
    }
  },
};

// Function to format the Date object into the desired format "HH:MM DD месяца"
function formatDateTime(date) {
  const date_ = new Date(date);
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Moscow",
  };
  const formatter = new Intl.DateTimeFormat("ru-RU", options);

  // Extract parts and construct the custom format
  const parts = formatter.formatToParts(date_);
  let day, month, hour, minute;

  for (const part of parts) {
    if (part.type === "day") day = part.value;
    if (part.type === "month") month = part.value;
    if (part.type === "hour") hour = part.value;
    if (part.type === "minute") minute = part.value;
  }

  // Constructing the format "HH:MM DD месяца"
  return `${hour}:${minute} ${day} ${month}`;
}
