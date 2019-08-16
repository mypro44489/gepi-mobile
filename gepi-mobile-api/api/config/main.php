<?php

$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-api',
    'basePath' => dirname(__DIR__),    
    'bootstrap' => ['log'],
    'modules' => [
        'v1' => [
            'basePath' => '@app/modules/v1',
            'class' => 'api\modules\v1\Module'
        ]
    ],
    'components' => [        
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => false,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/country',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET add' => 'add',
                         'GET search' => 'search'
                    ],
                   
                ],
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/emploidutemps',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                         'GET search' => 'search'
                    ],
                   
                ],
                 [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/abscence',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                        'POST add' => 'add',
                         'GET search' => 'search'
                    ],
                   
                ],
                
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/matiere',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                        'POST add' => 'add',
                         'GET search' => 'search'
                    ],
                   
                ],
                
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/note',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                        'POST add' => 'add',
                         'GET search' => 'search'
                    ],
                   
                ],
                
                 [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/notification',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                        'POST add' => 'add',
                         'GET search' => 'search'
                    ],
                   
                ],
                
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/retard',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                        'POST add' => 'add',
                         'GET search' => 'search'
                    ],
                   
                ],
                
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/periode',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                         'GET search' => 'search'
                    ],
                   
                ],
                
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/classe',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                         'GET search' => 'search'
                    ],
                   
                ],
                
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/user',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                        'GET profil' => 'profil',
                        //'GET updates' => 'updates',
//                        'GET add' => 'add',
//                        'GET connexion' => 'connexion',
//                        'GET updatemdp' => 'updatemdp',
//                        'GET updateinfos' => 'updateinfos',
                        //'GET confirmation' => 'confirmation',
                        
                    ],
                   
                    
                ],
                
                 [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/post',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                        'GET suggessions' => 'suggessions',
                        'GET addsugg' => 'addsugg',
                        'GET search' => 'search',
                        'POST online' => 'online',
                        'POST upload' => 'upload',
                        'GET postreactions' => 'postreactions',
                    ]
                    
                ],
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/comment',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET all' => 'all',
                        'GET add' => 'add',
                        'GET getadressebycode' => 'getpostbycode',
                        'GET search' => 'search',
                        'POST online' => 'online',
                        'POST upload' => 'upload',
                        'GET getcontrybyip' => 'getcontrybyip',
                    ]
                    
                ],
                
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/consultation',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET add' => 'add'
                    ],
                    'extraPatterns' => [
                        'GET search' => 'search'
                    ],
                    
                ],
                
                [
                    'class' => 'yii\rest\UrlRule', 
                    'controller' => 'v1/partage',
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ],
                    'extraPatterns' => [
                        'GET add' => 'add'
                    ],
                    'extraPatterns' => [
                        'GET search' => 'search'
                    ],
                    
                ],
                
                
            ],        
        ]
    ],
    'params' => $params,
];



