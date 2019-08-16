<?php

namespace api\modules\v1\controllers;

use yii;
use yii\rest\ActiveController;
//use api\modules\v1\models\Absence;
//use api\modules\v1\models\Inscription;
//use api\modules\v1\controllers\Common;
//use yii\filters\auth\QueryParamAuth;
//use yii\filters\Cors;

/**
 * user Controller API
 *
 * @author Abitor josué <abitorkomla@gmail.com>
 */
class AbscenceController extends ActiveController {

    public $modelClass = 'api\modules\v1\models\Absence';

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
// $command = $connection->createCommand("
//     SELECT SUM(bets.balance_return) AS total_win
//      , bets.user_id
//      , users.user_name
//      , users.user_status
//     FROM bets INNER JOIN users ON bets.user_id = users.id
//     WHERE users.user_status = 'verified'
//     AND bets.date_time > :start_date
//     GROUP BY bets.user_id
//     ORDER BY total_win DESC", [':start_date' => '1970-01-01']);
        $command = $connection->createCommand('SELECT absence.*, periode.HEUREPERIODE, user.nom, user.prenoms FROM absence JOIN user ON (absence.IDELEVE=user.ID) JOIN periode ON (absence.IDPERIODE=periode.ID)');
        $result = $command->queryAll();

        // if ($users) {
        //     $datas = [
        //         'id' => null,
        //         'status' => 'ok',
        //         'message' => 'liste des utilisateurs',
        //         'results' => $users,
        //     ];
        // } else {
        //     $datas = [
        //         'id' => null,
        //         'status' => 'ko',
        //         'message' => 'aucun utilisateur disponible',
        //         'results' => null,
        //     ];
        // }

        return $result;
    }

    public function actionAdd() {

        $postdata = file_get_contents("php://input");
        if ($postdata) {
            $model = new \api\modules\v1\models\Absence();
            $params = json_decode($postdata);


            if (sizeof($params) >= 1) {

                foreach ($model as $key => $value) {
                    if (isset($params->$key)) {
                        $model->$key = $params->$key;
                    }
                }
                if ($model->save()) {
                    $datas = [
                        'id' => $model->ID,
                        'status' => 'ok',
                        'results' => $model,
                        'message' => 'Absence ajouté!',
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
