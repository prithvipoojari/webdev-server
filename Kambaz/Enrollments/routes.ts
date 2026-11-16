import EnrollmentsDao from "./dao";
export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao(db);
  const enrollUserInCourse = (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      if (!req.session["currentUser"]) {
        return res.status(401).send("Unauthorized");
      }
      uid = req.session["currentUser"]._id;
    }
    dao.enrollUserInCourse(uid, cid);
    res.sendStatus(200);
  };
  const unenrollUserFromCourse = (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      if (!req.session["currentUser"]) {
        return res.status(401).send("Unauthorized");
      }
      uid = req.session["currentUser"]._id;
    }
    dao.unenrollUserFromCourse(uid, cid);
    res.sendStatus(200);
  };
  app.post("/api/users/:uid/courses/:cid", enrollUserInCourse);
  app.delete("/api/users/:uid/courses/:cid", unenrollUserFromCourse);
}
