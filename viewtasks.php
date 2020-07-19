<?php
$con = mysqli_connect("sql109.epizy.com", "epiz_26281893", "X22jJ1LKF16L", "epiz_26281893_techpointSOS");
if (mysqli_connect_errno())
{echo "Failed to connect to MySQL: " . mysqli_connect_error() . "<br>";}
else
{echo "Established Database Connection <br>";}

$var_employeeID = mysqli_real_escape_string($con, $_POST['employeeID']);

$sql = "SELECT taskName, taskDetails, taskStartDate, taskDueDate, taskEndDate FROM tasks WHERE employeeID = $var_employeeID";
$result = mysqli_query($con, $sql);

if (!$result)
{ die('Error: ' . mysqli_error($con)) . "<br>"; }

if (mysqli_num_rows($result) > 0) {
	echo "<table border='1'>\n<tr>\n<th>Task Name</th>\n<th>Task Details</th>\n<th>Start Date</th>\n<th>Due Date</th>\n<th>End Date</th>\n</tr>\n";
	while($row = mysqli_fetch_assoc($result)) {
		echo "<tr>\n<td>" . $row["taskName"] . "</td><td>" . $row["taskDetails"] . "</td><td>" . $row["taskStartDate"] . "</td><td>" . $row["taskDueDate"] . "</td><td>" . $row["taskEndDate"] . "</td>\n</tr>\n";
	}
	echo "</table>";
} else {
    echo "0 results";
}

mysqli_close($con);
?>