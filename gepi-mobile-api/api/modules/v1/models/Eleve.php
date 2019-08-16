<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "eleve".
 *
 * @property integer $IDELEVE
 * @property integer $IDCLASSE
 * @property string $NOMELEVE
 * @property string $PRENOMELEVE
 * @property string $SEXEELEVE
 * @property string $DATENAISSELEVE
 */
class Eleve extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'eleve';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['IDELEVE'], 'required'],
            [['IDELEVE', 'IDCLASSE'], 'integer'],
            [['NOMELEVE', 'PRENOMELEVE', 'SEXEELEVE', 'DATENAISSELEVE'], 'string'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'IDELEVE' => 'Ideleve',
            'IDCLASSE' => 'Idclasse',
            'NOMELEVE' => 'Nomeleve',
            'PRENOMELEVE' => 'Prenomeleve',
            'SEXEELEVE' => 'Sexeeleve',
            'DATENAISSELEVE' => 'Datenaisseleve',
        ];
    }
}
