<!doctype html>
<html>
<body>
<h2>Tasks Table</h2>
<h3>Select Employee's Tasks</h3>
<form action="viewtasks.php" method="post">
Employee ID: <input type="text" name="employeeID">
<input type="submit" name="submit" value="View tasks">
</form>

<h3>Insert Task</h3>
<form action="inserttask.php" method="post">
Employee ID: <input type="text" name="employeeID" maxlength=50 required>
Task Name: <input type="text" name="taskName" maxlength=50 required>
Task Details: <input type="text" name="taskDetails" maxlength=200>
Start Date: <input type="date" name="startDate" required>
Due Date: <input type="date" name="dueDate" required>
End Date: <input type="date" name="endDate">
<input type="submit" name="submit" value="Insert task">
</form>
</body>
</html>
