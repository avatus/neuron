import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5544;

app.listen(PORT, () => {
    console.log(`Server up on port: ${PORT}`);
});
