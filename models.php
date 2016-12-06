<?php
//Me conecto a la base de datos
$host = "localhost";
$usuario = "root";
$contrasena = "kCs1m07*";
$base = "vw-cotizador";
$db=mysql_connect($host,$usuario,$contrasena);
mysql_query("SET NAMES 'utf8'");//configurar los acentos y la ñ en castellano
mysql_select_db($base,$db);
$sql = "SELECT * FROM models";
$res = mysql_query($sql);
$total = array();

while($r = mysql_fetch_assoc($res)) {
  $total[] = $r;
}



echo json_encode($total);

 ?>
