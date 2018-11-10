const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./secretKey.json");
const uuid = require("uuid/v1");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ywchomework-3cef1.firebaseio.com"
});

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

function generateUUID() {
  var d = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

exports.addArticle = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST");
  if (req.body) {
    const id = generateUUID();
    db.collection("articles")
      .doc(id)
      .set({
        eventName: req.body.eventName,
        createAt: Date.now(),
        title: req.body.title,
        link: req.body.link
      })
      .then(data => {
        res.send("Created!");
        return;
      })
      .catch(err => {
        console.log(err);
        res.status(500).send("Service Unavailable");
      });
  } else {
    res.status(400).send("Please Input");
  }
});

exports.getEventArticle = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST");
  const event = req.query.eventName;
  if (event) {
    db.collection("articles")
      .where("eventName", "==", event)
      .get()
      .then(snapshot => {
        let listEvents = [];
        snapshot.forEach(doc => {
          listEvents.push(doc.data());
        });
        res.send(listEvents);
        return;
      })
      .catch(err => {
        console.log(err);
        res.send(500).send("Service Unavailable");
      });
  } else {
    res.send(400).send("Please Input event Name");
  }
});
