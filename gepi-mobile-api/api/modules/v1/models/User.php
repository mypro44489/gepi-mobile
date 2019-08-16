<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "user".
 *
 * @property integer $id
 * @property string $login
 * @property string $prenoms
 * @property string $nom
 * @property string $sex
 * @property string $profil
 * @property string $status
 * @property string $password
 * @property integer $classeId
 */
class User extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'user';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['classeId'], 'integer'],
            [['login'], 'string', 'max' => 10],
            [['prenoms', 'nom', 'sex', 'status'], 'string', 'max' => 20],
            [['profil'], 'string', 'max' => 30],
            [['password'], 'string', 'max' => 32],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'login' => 'Login',
            'prenoms' => 'Prenoms',
            'nom' => 'Nom',
            'sex' => 'Sex',
            'profil' => 'Profil',
            'status' => 'Status',
            'password' => 'Password',
            'classeId' => 'Classe ID',
        ];
    }
}
