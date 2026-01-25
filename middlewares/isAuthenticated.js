export const isAuthenticated = (req, res, next) => {
  if (req.session.username) next();
  else res.redirect('/login');
};
