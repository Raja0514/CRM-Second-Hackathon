import { application } from "express";

const PORT = process.env.PORT || 8080;

application.listen(PORT, () => {
  console.log("Server is  running on Port ${PORT}.");
});
