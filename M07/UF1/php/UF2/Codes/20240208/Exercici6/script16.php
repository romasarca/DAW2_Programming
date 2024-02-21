<?php
#
echo "<h2>Lectura de BD - PDO - Errors amb try-catch</h2>";
#
$dbhost = "localhost";
$dbusername = "adcli";
$dbuserpassword = "FjeClot23@";
$baseDades = "bdcli";
try {
	$pdo = new PDO("mysql:host=$dbhost;dbname=$baseDades", $dbusername, $dbuserpassword);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); # Mode de gestió d'errors de PDO tipus exception
	echo "<b>Connexió a la BD  $baseDades realitzada amb èxit</b><br><br>";
	$consulta = "SELECT * FROM tlcmd";

	// query($consulta) is to query the specified consult.
	$resultat = $pdo->query($consulta);
	echo "<b><u>Entrades de la base de dades <i>$baseDades</i>: </u></b><br><br>";
	echo "<table style='border:1px solid black; border-collapse:collapse;'>\n";
	echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'><b>ID Comanda</b></td>\n";
	echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'><b>Estat comanda</b></td>\n";
	echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'><b>Valor comanda</b></td>\n";
	echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'><b>Codi client</b></td>\n";

	while ($fila = $resultat->fetch(PDO::FETCH_ASSOC)) {
		echo "\t<tr>\n";
		foreach ($fila as $valor_columna) {
			echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'> $valor_columna </td>\n";
		}
		echo "\t</tr>\n";
	}
	echo "</table>\n";
	echo "<br><b>Total registres:</b> " . $resultat->rowCount();
	
	$pdo = null; //Tancant connexió
} catch (PDOException $e) {
	print "Error!!! " . $e->getMessage() . "<br>";
	die();
}
