<?php
return [
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'components' => [
    'request' => [
            'enableCookieValidation' => true,
            'cookieValidationKey' => 'c7fd37c2150e1971d3265cf6a5ae206ba98ea66e',
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ]        
    ],
];
