<?php

namespace api\modules\v1\controllers;

use yii;
use yii\rest\ActiveController;
use api\modules\v1\models\User;
use api\modules\v1\models\Inscription;
use api\modules\v1\controllers\Common;
//use yii\filters\auth\QueryParamAuth;
//use yii\filters\Cors;

/**
 * user Controller API
 *
 * @author Karol Well <iwell@live.fr>
 */
class UserController extends ActiveController {

    public $modelClass = 'api\modules\v1\models\User';

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

    public function actionConnexion() {

        $model = new User();

        if (yii::$app->request->Post()) {
            $params = yii::$app->request->Post();
            $datas = [
                'status' => 'ok',
                'message' => 'connexion établie',
                'results' => $params,
                    //   'type_adresse' => $type_adresses,
            ];

            return $datas;
            exit();

            if (sizeof($params) >= 2) {

                foreach ($model as $key => $value) {

                    if (isset($params[$key])) {
                        $model->$key = $params[$key];
                    }
                }

                //return $model; exit;


                $user = User::find()->where(['login' => $model->login])->one();
                //return $user; exit;

                if ($user) {
                    // $test_password = Yii::$app->security->validatePassword($model->password_hash, $user->password_hash);

                    if ($user->password == $model->password) {
                        // $type_adresses = \api\modules\v1\models\TypeAdresse::find()->where(['etat'=>1])->all();

                        $datas = [
                            'status' => 'ok',
                            'message' => 'connexion établie',
                            'results' => $user,
                                //   'type_adresse' => $type_adresses,
                        ];
                    } else {

                        $datas = [
                            'status' => 'ko',
                            'message' => 'mot de passe invalide',
                        ];
                    }
                } else {

                    $datas = [
                        'id' => null,
                        'status' => 'ko',
                        'message' => 'ce utilisateur n\'est pas disponible',
                        'results' => null,
                    ];
                }
            } else {

                $datas = [
                    'id' => null,
                    'status' => 'ko',
                    'message' => 'veuillez renseigner tous les champs',
                    'results' => null,
                ];
            }
        } else {


            $datas = [
                'id' => null,
                'status' => 'ko',
                'message' => 'aucune donnee renseignee ',
                'results' => null,
            ];
        }

        return $datas;
    }

    public function actionUpdatemdp() {

        if (yii::$app->request->Get()) {
            $params = yii::$app->request->Get();

            if (sizeof($params) >= 2) {

                $model = User::find()->where(['id' => $params["id"], 'username' => $params["username"]])->one();

                if ($model) {
                    $model->password_hash = (string) Yii::$app->security->generatePasswordHash($params["mdp"]);

                    if ($model->save()) {

                        $datas = [
                            'status' => 'ok',
                            'message' => 'Mot de passe mise à jour!',
                            'results' => $model,
                                //   'type_adresse' => $type_adresses,
                        ];
                    } else {

                        $datas = [
                            'status' => 'ko',
                            'message' => 'Echec du mis à jour!',
                        ];
                    }
                } else {

                    $datas = [
                        'id' => null,
                        'status' => 'ko',
                        'message' => 'Cet utilisateur n\'est plus disponible',
                        'results' => null,
                    ];
                }
            } else {

                $datas = [
                    'id' => null,
                    'status' => 'ko',
                    'message' => 'veuillez renseigner tous les champs',
                    'results' => null,
                ];
            }
        } else {


            $datas = [
                'id' => null,
                'status' => 'ko',
                'message' => 'aucune donnée renseignée ',
                'results' => null,
            ];
        }

        return $datas;
    }

    public function actionUpdateinfos() {

        if (yii::$app->request->Get()) {
            $params = yii::$app->request->Get();

            if (sizeof($params) >= 2) {

                $model = User::find()->where(['username' => $params["username"]])->one();

                if (!$model) {
                    $model = User::find()->where(['id' => $params["id"]])->one();
                    foreach ($model as $key => $value) {
                        if (isset($params[$key])) {
                            $model->$key = $params[$key];
                        }
                    }

                    if ($model->save()) {

                        $datas = [
                            'status' => 'ok',
                            'message' => 'Informations mise à jour!',
                            'results' => $model,
                                //   'type_adresse' => $type_adresses,
                        ];
                    } else {

                        $datas = [
                            'status' => 'ko',
                            'message' => 'Echec du mis à jour!',
                        ];
                    }
                } else {

                    $datas = [
                        'id' => null,
                        'status' => 'ko',
                        'message' => 'Ce nom d\'utilisateur existe déjà!',
                        'results' => null,
                    ];
                }
            } else {

                $datas = [
                    'id' => null,
                    'status' => 'ko',
                    'message' => 'veuillez renseigner tous les champs',
                    'results' => null,
                ];
            }
        } else {


            $datas = [
                'id' => null,
                'status' => 'ko',
                'message' => 'aucune donnée renseignée ',
                'results' => null,
            ];
        }

        return $datas;
    }

    public function actionProfil() {
        $datas = [];

        if (yii::$app->request->Get()) {
            $params = yii::$app->request->Get();
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
            $command = $connection->createCommand("SELECT user.*, classe.LIBELLECLASSE as classe FROM user JOIN classe ON (user.classeId=classe.ID)
WHERE user.profil=:profil and user.classeId=:classe", [':profil' => $params['profil'], ':classe' => $params['classe']]);
            $users = $command->queryAll();
            //$users = User::find()->where(['profil' => $params['profil']])->all();

            if ($users) {

                $datas = [
                    'id' => null,
                    'status' => 'ok',
                    'message' => 'liste des utilisateurs',
                    'results' => $users,
                ];
            } else {


                $datas = [
                    'id' => null,
                    'status' => 'ko',
                    'message' => 'aucun utilisateur disponible',
                    'results' => null,
                ];
            }
        }
        return $datas;
    }

    public function actionAll() {

        $users = User::find()->where(['status' => User::STATUS_ACTIVE])->all();

        if ($users) {

            $datas = [
                'id' => null,
                'status' => 'ok',
                'message' => 'liste des utilisateurs',
                'results' => $users,
            ];
        } else {


            $datas = [
                'id' => null,
                'status' => 'ko',
                'message' => 'aucun utilisateur disponible',
                'results' => null,
            ];
        }

        return $datas;
    }

    public function actionGet_user($id = null) {


        $user = User::findOne(['id' => $id]);


        if ($user) {

            $datas = [
                'id' => $id,
                'status' => 'ok',
                'message' => 'l\'utilisateur',
                'results' => $user,
            ];
        } else {


            $datas = [
                'id' => $id,
                'status' => 'ko',
                'message' => 'L\'utilisateur n\'est pas disponible',
                'results' => null,
            ];
        }



        return $datas;
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

    public function actionConfirmation() {

        $model = new User();
        $util = new Common();
        $inscrition = new Inscription();

        if (yii::$app->request->Get()) {
            $params = yii::$app->request->Get();

            if (isset($params['code'])) {

                $inscrit = $inscrition->find()->where(['code' => $params['code'], 'etat' => Inscription::INACTIVATE])->one();


                if ($inscrit) {
                    $user = User::find()->where(['username' => $inscrit->numero])->one();


                    if ($user) {

                        $user->status = User::STATUS_ACTIVE;
                        $inscrit->etat = Inscription::ACTIVATE;

                        if ($inscrit->save() && $user->save()) {

                            $datas = [
                                'id' => null,
                                'status' => 'ok',
                                'message' => 'inscrition confirmee',
                                'results' => $user,
                            ];
                        }
                    } else {


                        $datas = [
                            'id' => null,
                            'status' => 'ko',
                            'message' => 'inscrition non confirmee',
                            'results' => null,
                        ];
                    }
                } else {

                    $datas = [
                        'id' => null,
                        'status' => 'ko',
                        'message' => 'Code incorecte',
                            //'results'=>$model,
                    ];
                }
            } else {


                $datas = [
                    'id' => null,
                    'status' => 'ko',
                    'message' => 'parametre incorecte',
                        //'results'=>$model,
                ];
            }
        } else {

            $datas = [
                'id' => null,
                'status' => 'ko',
                'message' => 'Aucune donnee envoyee',
                    //'results'=>$model,
            ];
        }




        return $datas;
    }

    public function actionUpdates($id = null, $param) {


        $model = new User();

        $params = explode(';', $param);
        $data['id'] = $id;
        foreach ($params as $param) {

            $data[explode(':', $param)[0]] = explode(':', $param)[1];
        }


        $user = User::findOne(['id' => $id]);
        $model = $user;


        if ($user) {

            foreach ($data as $key => $value) {

                if (!$value) {

                    $model->$key = urldecode($user->$key);
                } else {
                    $model->$key = urldecode($value);
                }
            }


            if ($model->save()) {

                $datas = [
                    'id' => $id,
                    'status' => 'ok',
                    'message' => 'Mise à jour effectuee avec succes',
                    'results' => $model,
                ];
            } else {

                $datas = [
                    'id' => $id,
                    'status' => 'ko',
                    'message' => 'Mise à jour non effectuee',
                    'results' => $model,
                ];
            }
        } else {


            $datas = [
                'id' => $id,
                'status' => 'ko',
                'message' => 'L\'utilisateur n\'est pas disponible',
                'results' => null,
            ];
        }



        return $datas;
    }

}
