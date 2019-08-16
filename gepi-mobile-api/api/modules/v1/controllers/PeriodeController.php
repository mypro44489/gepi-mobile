<?php

namespace api\modules\v1\controllers;

use yii;
use yii\rest\ActiveController;
//use api\modules\v1\models\Periode;
//use api\modules\v1\models\Inscription;
//use api\modules\v1\controllers\Common;
//use yii\filters\auth\QueryParamAuth;
//use yii\filters\Cors;

/**
 * user Controller API
 *
 * @author Karol Well <iwell@live.fr>
 */
class PeriodeController extends ActiveController {

    public $modelClass = 'api\modules\v1\models\Periode';

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
        $command = $connection->createCommand('SELECT * FROM periode');
        $result = $command->queryAll();
        return $result;
    }

    public function actionAdd() {


        $model = new User();

        if (yii::$app->request->Get()) {
            $params = yii::$app->request->Get();


            if (sizeof($params) >= 4) {

                foreach ($model as $key => $value) {

                    if (isset($params[$key])) {
                        $model->$key = $params[$key];
                    }
                }
                // print_r($model);exit;
                $user = User::find()->where(['username' => $model->username])->one();

                if ($user) {

                    $datas = [
                        'id' => null,
                        'status' => 'ko',
                        'message' => 'L\'utilisateur existe déjà',
                        'results' => null,
                    ];
                } else {
                    $model->auth_key = Yii::$app->security->generateRandomString(32);
                    $model->password_hash = (string) Yii::$app->security->generatePasswordHash($model->password_hash);
                    $model->created_at = time();
                    $model->id_user_profil = 2;
                    $model->idP = 1;
                    $model->updated_at = time();
                    if ($model->save()) {

//						$text = "Bienvenue sur WassaSMS!!! Veuillez activer votre compte avec le code d'activation suivant : ".$code;
//						$util->smsend("WassaSMS", $model->username,$text,$dlr="",Yii::$app->security->generateRandomKey(32),$token="O1Yk--5TCb-792TKyOTBG5RVJTlrNIML");

                        $datas = [
                            'id' => $model->id,
                            'status' => 'ok',
                            'results' => $model,
                            'message' => 'Inscription réussie!',
                        ];
                    } else {
                        $datas = [
                            'id' => null,
                            'status' => 'ko',
                            'message' => 'l\'operation n\'a pas aboutie',
                                //'results'=>print_r($model->getErrors()),
                        ];
                    }
                }
            } else {

                $datas = [
                    'id' => null,
                    'status' => 'ko',
                    'message' => 'tous les champs sont indispensables',
                    'results' => null,
                ];
            }
        } else {

            $datas = [
                'id' => null,
                'status' => 'ko',
                'message' => 'Au donnee renseignee',
                'results' => null,
            ];
        }

        return $datas;
    }

}
