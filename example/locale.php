<?php

$cs = [
	'statistics' => [
		'chart' => [
			'title' => 'Nějaký graf|Nějaké grafy|Nějakých grafů',
		],
	],
];

$en = [
	'statistics' => [
		'chart' => [
			'title' => 'Sample chart|SampleCharts',
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