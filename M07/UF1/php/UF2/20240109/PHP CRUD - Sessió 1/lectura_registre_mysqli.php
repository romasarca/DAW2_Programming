<?php
	#
	echo "<h2>Lectura de BD - MySQLi - Estil POO - Tractament d'errors amb els mètodes de la classe</h2>";
	#
	$dbhost="localhost";
	$dbusername="adcli";
	$dbuserpassword="FjeClot23@";
	$baseDades="bdcli";
	#
	$registre=4;
	#
	$mysqli = new mysqli($dbhost,$dbusername,$dbuserpassword,$baseDades);
	if ($mysqli->connect_errno){
		printf("Problema de connexió a la BD: %s\n", $mysqli->connect_error);
		exit();
	}
	else {
		echo "<b>Connexió a la BD  $baseDades realitzada amb èxit</b><br><br>";
	}
	$consulta = "SELECT * FROM tlcli WHERE codi=$registre";
	$resultat = $mysqli->query($consulta) or die("Consulta fallida - Codi: ".$mysqli->errno." -- Missatge d'error: ".$mysqli->error);
	echo "<b><u>Entrades de la base de dades: </u></b><br><br>";
	echo "<table style='border:1px solid black; border-collapse:collapse;'>\n";
	echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'><b>Codi</b></td>\n";
	echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'><b>Nom</b></td>\n";
	echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'><b>Cognom</b></td>\n";
	echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'><b>email</b></td>\n";
	echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'><b>Contrasenya</b></td>\n";
	while ($fila = $resultat->fetch_assoc()) {
		echo "\t<tr>\n";
		foreach ($fila as $valor_columna) {
			echo "\t\t<td style='border:1px solid black; border-collapse:collapse;'> $valor_columna </td>\n";
		}
		echo "\t</tr>\n";		
	}
	echo "</table>\n";
	echo "<br><b>Total registres:</b> " .$resultat->num_rows;
	$mysqli->close();
?>

