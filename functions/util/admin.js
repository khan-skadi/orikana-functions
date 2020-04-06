const admin = require("firebase-admin");
const serviceAccount = require("../orikana-3af70-44e48b7d39fe.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://orikana-3af70.firebaseio.com",
});

const db = admin.firestore();

module.exports = { admin, db };
