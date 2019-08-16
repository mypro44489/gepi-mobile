<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "periode".
 *
 * @property integer $IDPERIODE
 * @property string $HEUREPERIODE
 */
class Periode extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'periode';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['IDPERIODE'], 'required'],
            [['IDPERIODE'], 'integer'],
            [['HEUREPERIODE'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'IDPERIODE' => 'Idperiode',
            'HEUREPERIODE' => 'Heureperiode',
        ];
    }
}
