const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};
app.use(logger);
