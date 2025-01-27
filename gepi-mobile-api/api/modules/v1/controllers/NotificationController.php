<?php

namespace api\modules\v1\controllers;

use yii;
use yii\rest\ActiveController;
//use api\modules\v1\models\Classe;
//use api\modules\v1\models\Inscription;
//use api\modules\v1\controllers\Common;
//use yii\filters\auth\QueryParamAuth;
//use yii\filters\Cors;

/**
 * user Controller API
 *
 * @author Abitor josué <abitorkomla@gmail.com>
 */
class NotificationController extends ActiveController {

    public $modelClass = 'api\modules\v1\models\Notifications';

    // public function behaviors() {
    //     $behaviors = parent::behaviors();
    //     unset($behaviors['authenticator']);
    //     $behaviors['corsFilter'] = [
    //         'class' => Cors::className(),
    //     ];
    //     $behaviors['authenticator'] = [
    //         'class' => QueryParamAuth::className(),
    //     ];
    //     $behaviors['authenticator']['except'] = ['connexion', 'all', 'add'];
    //     return $behaviors;
    // }

    public static function allowedDomains() {
        return [
            '*', // star allows all domains
                // 'http://test1.example.com',
                // 'http://test2.example.com',
        ];
    }

    /**
     * @inheritdoc
     */
    public function behaviors() {
        return array_merge(parent::behaviors(), [
            // For cross-domain AJAX request
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
                'cors' => [
                    // restrict access to domains:
                    'Origin' => static::allowedDomains(),
                    'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                    'Access-Control-Allow-Credentials' => true,
                    'Access-Control-Max-Age' => 3600, // Cache (seconds)
                ],
            ],
        ]);
    }

    public function actionAll() {

        //$users = User::find()->where(['status' => User::STATUS_ACTIVE])->all();
        $connection = Yii::$app->getDb();
        $command = $connection->createCommand('SELECT * FROM notifications');
        $result = $command->queryAll();

//         if ($result) {
//             $datas = [
//                 'id' => null,
//                 'status' => 'ok',
//                 'message' => 'liste des classes',
//                 'results' => $result,
//             ];
//         } else {
//             $datas = [
//                 'id' => null,
//                 'status' => 'ko',
//                 'message' => 'aucune classe disponible',
//                 'results' => null,
//             ];
//         }

        return $result;
    }

    public function actionAdd() {

        $postdata = file_get_contents("php://input");
        if ($postdata) {
            $model = new \api\modules\v1\models\Notifications();
            $params = json_decode($postdata);


            if (sizeof($params) >= 1) {

                foreach ($model as $key => $value) {
                    if (isset($params->$key)) {
                        $model->$key = $params->$key;
                    }
                }
                 $model->date_notif = date('Y-m-d H:i:s');
                if ($model->save()) {
                    $datas = [
                        'id' => $model->ID,
                        'status' => 'ok',
                        'results' => $model,
                        'message' => 'Notification envoyé!',
                    ];
                } else {
                    $datas = [
                        'id' => null,
                        'status' => 'ko',
                        'message' => 'l\'operation n\'a pas aboutie',
                        'results' => print_r($model->getErrors()),
                    ];
                }
            } else {

                $datas = [
                    'id' => null,
                    'status' => 'ko',
                    'message' => 'Tous les champs n\'ont pas été rempli!' ,
                    'results' => print_r($params),
                ];
            }
        } else {

            $datas = [
                'id' => null,
                'status' => 'ko',
                'message' => 'Aucun donnee renseignee',
                'results' => print_r($postdata),
            ];
        }
        return $datas;
    }

}
