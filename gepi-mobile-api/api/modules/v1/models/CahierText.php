<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "cahier_text".
 *
 * @property integer $IDCT
 * @property integer $IDEMPLOITEMPS
 * @property string $LIBELLECT
 */
class CahierText extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'cahier_text';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['IDCT'], 'required'],
            [['IDCT', 'IDEMPLOITEMPS'], 'integer'],
            [['LIBELLECT'], 'string'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'IDCT' => 'Idct',
            'IDEMPLOITEMPS' => 'Idemploitemps',
            'LIBELLECT' => 'Libellect',
        ];
    }
}
