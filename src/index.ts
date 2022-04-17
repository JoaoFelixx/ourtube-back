import app from "./app";

const PORT = process.env.PORT || 4545;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));