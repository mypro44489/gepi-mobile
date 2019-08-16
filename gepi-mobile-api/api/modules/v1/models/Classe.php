<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "classe".
 *
 * @property integer $IDCLASSE
 * @property string $LIBELLECLASSE
 */
class Classe extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'classe';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['IDCLASSE'], 'required'],
            [['IDCLASSE'], 'integer'],
            [['LIBELLECLASSE'], 'string'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'IDCLASSE' => 'Idclasse',
            'LIBELLECLASSE' => 'Libelleclasse',
        ];
    }
}
