import { app } from './app';

const PORT = process.env.PORT || 5544;
app.listen(PORT, () => {
    console.log(`Server up on port: ${PORT}`);
});
