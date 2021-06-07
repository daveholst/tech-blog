const {Post, User, Comment} = require ('../models')


module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  },
  get_author: async (id) => {
    res = await User.findByPk(id)
    return await res.get({plain: true})
  }
};
