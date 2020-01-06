<?php
/**
 * Ausgabe der erhobenen Mietdaten.
 */

// MySQL connection connfig
$con = mysqli_connect($_ENV['MYSQL_HOST'], $_ENV['MYSQL_USER'], $_ENV['MYSQL_PASSWORD'], $_ENV['MYSQL_DB']);

// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// output headers so that the file is downloaded rather than displayed
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=mietpreise.csv');

// create a file pointer connected to the output stream
$output = fopen('php://output', 'w');

// Neuvermietungen
if ($_GET["mode"] === "neuvermietungen")
{
	$result = mysqli_query($con, "SELECT X( koordinaten ) AS lon, Y( koordinaten ) AS lat, SUM(flaeche) AS flaeche, SUM(mietekalt) AS mietekalt, COUNT(koordinaten) AS anzahl
	FROM tbl_haus
	INNER JOIN tbl_mietpreis ON tbl_haus.ID = tbl_mietpreis.hausid
	WHERE X( tbl_haus.koordinaten ) <> 0  AND tbl_mietpreis.mietekalt <> 0
	AND tbl_mietpreis.flaeche > 5
	AND (tbl_mietpreis.mietart = 0 OR tbl_mietpreis.mietart = 1)
	GROUP BY tbl_haus.koordinaten" );

	echo "lon,lat,flaeche,kaltmiete,europrom2\n";

	for($i = 0; $row = mysqli_fetch_array($result); $i++) {

		if ( $row['anzahl'] > 2)
		{
			$miete = $row['mietekalt']/$row['flaeche'];
			echo $row['lon'] . "," . $row['lat'] . "," . $row['flaeche'] . "," . $row['mietekalt'] . "," . $miete;

			if ( $i != mysqli_num_rows($result) - 1 ) {
				echo "\n";
			}
		}
	}
}
elseif ($_GET["mode"] === "bestandsmieten")
{
	$result = mysqli_query($con, "SELECT X( koordinaten ) AS lon, Y( koordinaten ) AS lat, SUM(flaeche) AS flaeche, SUM(mietekalt) AS mietekalt
	FROM tbl_haus
	INNER JOIN tbl_mietpreis ON tbl_haus.ID = tbl_mietpreis.hausid
	WHERE X( tbl_haus.koordinaten ) <> 0  AND tbl_mietpreis.mietekalt <> 0
	AND tbl_mietpreis.flaeche > 5
	AND (tbl_mietpreis.mietart = 3 OR tbl_mietpreis.mietart = 4)
	GROUP BY tbl_haus.koordinaten" );

	for($i = 0; $row = mysqli_fetch_array($result); $i++) {

		$miete = $row['mietekalt']/$row['flaeche'];
		echo $row['lon'] . "," . $row['lat'] . "," . $row['flaeche'] . "," . $row['mietekalt'] . "," . $miete;

		if ( $i != mysqli_num_rows($result) - 1 ) {
			echo "\n";
		}

	}
}
echo mysqli_num_rows($result);

// Close connection
mysqli_close($con);
?>
