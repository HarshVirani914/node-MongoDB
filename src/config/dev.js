export const config = {
  secrets: { jwt: "learneverything" },
  dbUrl: process.env.DB_URL + "/?retryWrites=true&w=majority",
};
