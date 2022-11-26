import mongoose from "mongoose";
export const databaseConnect = async () => {
  await mongoose
    .connect(process.env.DATA_BASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
    .then(() => console.log("Connectet to database"))
    .catch((err) => console.log(err));
};
