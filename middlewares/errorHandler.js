export const errorHandler = (req, res, next) => {
  res.status(404).json({
    message: `Error: Not Found`,
  });
  next();
};
