<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "absence".
 *
 * @property integer $ID
 * @property integer $IDELEVE
 * @property integer $IDPERIODE
 * @property string $DATEABSENCE
 */
class Absence extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'absence';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['IDELEVE'], 'required'],
            [['IDELEVE', 'IDPERIODE'], 'integer'],
            [['DATEABSENCE'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'ID' => 'ID',
            'IDELEVE' => 'Ideleve',
            'IDPERIODE' => 'Idperiode',
            'DATEABSENCE' => 'Dateabsence',
        ];
    }
}
