<?php
header('Access-Control-Allow-Origin: *'); 
$arrayName = array( 'id' => 1, 'playerName' => 'rahul Dravid','team name' => 'india','role' => 'batsman');

echo json_encode( $arrayName );

?>