/* eslint-disable no-console */
import app from './app';


const { PORT = 5000 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
