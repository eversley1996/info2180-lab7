<?php

$host = getenv('IP');
$username = "eversley";
$password = 'E.Francis14';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$country =$_GET['country'];
$all =$_GET['all'];

if($all =='true') {
	$stmt = $conn->query("SELECT * FROM countries");
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
else {
	$stmt =$conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
	$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>

<table border= "1" style="width:100%">
  <tr>
    <th>Name</th>
    <th>Continent</th>
    <th>Independence Year</th>
    <th>Head of State</th>
  </tr>
  <?php foreach ($results as $row): ?>
  <tr>
    <td><?= $row['name']; ?></td>
    <td><?= $row['continent']; ?></td>
    <td><?= $row['independence_year']; ?></td>
    <td><?= $row['head_of_state']; ?></td>
  </tr>
  <?php endforeach; ?>
</table>