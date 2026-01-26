export const sessionData = (req, res, next) => {
  if (req.session?.username) {
    res.locals.user = {
      username: req.session.username,
      email: req.session.email,
      role: req.session.role,
    };
  } else {
    res.locals.user = null;
  }
  next();
};
