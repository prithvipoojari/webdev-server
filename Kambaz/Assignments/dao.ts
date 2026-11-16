import { v4 as uuidv4 } from "uuid";
export default function AssignmentsDao(db) {
  function findAssignmentsForCourse(courseId) {
    return db.assignments.filter((a) => a.course === courseId);
  }
  function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    db.assignments = [...db.assignments, newAssignment];
    return newAssignment;
  }
  function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = db;
    const assignment = assignments.find((a) => a._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
  }
    function deleteAssignment(assignmentId) {
    const { assignments } = db;
    db.assignments = assignments.filter((a) => a._id !== assignmentId);
    }
  return { findAssignmentsForCourse, createAssignment, updateAssignment, deleteAssignment };
}
