<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "emploidutemps".
 *
 * @property integer $IDEMPLOITEMPS
 * @property integer $IDPERIODE
 * @property integer $IDCLASSE
 * @property integer $IDMATIERE
 * @property string $DATEENREG
 * @property string $JOURS
 */
class Abscence extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'emploidutemps';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['IDEMPLOITEMPS'], 'required'],
            [['IDEMPLOITEMPS', 'IDPERIODE', 'IDCLASSE', 'IDMATIERE'], 'integer'],
            [['DATEENREG'], 'safe'],
            [['JOURS'], 'number'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'IDEMPLOITEMPS' => 'Idemploitemps',
            'IDPERIODE' => 'Idperiode',
            'IDCLASSE' => 'Idclasse',
            'IDMATIERE' => 'Idmatiere',
            'DATEENREG' => 'Dateenreg',
            'JOURS' => 'Jours',
        ];
    }
}
