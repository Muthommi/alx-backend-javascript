export default function getStudentsIdSum(students) {
	return students.reduce((sum, student) => sum + student.id, 0);
}
