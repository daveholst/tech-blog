const { Post, User, Comment } = require('../models');

module.exports = {
  format_time: (date) => date.toLocaleTimeString(),
  format_date: (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return formattedDate;
  },
  short_content: (content) => content.substring(0, 250),
};
