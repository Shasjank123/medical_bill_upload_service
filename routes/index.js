const userRoutes = require('./medicalbill');

const constructorMethod = (app) => {
  app.use('/medicalbills',userRoutes);

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;
