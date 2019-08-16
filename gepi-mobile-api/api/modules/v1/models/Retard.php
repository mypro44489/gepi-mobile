<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "retard".
 *
 * @property integer $ID
 * @property integer $IDELEVE
 * @property integer $IDPERIODE
 * @property string $HEUREARRIVE
 * @property string $DATERETARD
 */
class Retard extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'retard';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['IDELEVE'], 'required'],
            [['IDELEVE', 'IDPERIODE'], 'integer'],
            [['HEUREARRIVE', 'DATERETARD'], 'safe'],
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
            'HEUREARRIVE' => 'Heurearrive',
            'DATERETARD' => 'Dateretard',
        ];
    }
}
