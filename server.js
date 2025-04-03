const express = require('express');
const userRoutes = require('./routes/userRoutes');
const swaggerDocs = require('./swagger');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
swaggerDocs(app); // Initialize Swagger

const PORT = 1234;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
