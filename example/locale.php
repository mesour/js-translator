<?php

$cs = [
	'statistics' => [
		'chart' => [
			'title' => 'Nějaký jeden graf|Nějaké %count% grafy|Nějakých %count% grafů',
			'testReplacement' => 'Test replacement %key% and second %key% and another %another%.|Now %key%.|Now only %another%.',
		],
	],
];

$en = [
	'statistics' => [
		'chart' => [
			'title' => 'One sample chart|%count% sample charts',
			'testReplacement' => 'Test replacement %key% and second %key% and another %another%.|Now only %another% for en.',
		],
	],
];

if ($_GET['locale'] === 'cs') {
	echo json_encode($cs);
} elseif ($_GET['locale'] === 'en') {
	echo json_encode($en);
} else {
	echo '{}';
}