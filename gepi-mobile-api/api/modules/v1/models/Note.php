<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "note".
 *
 * @property integer $ID
 * @property integer $IDELEVE
 * @property integer $IDMATIERE
 * @property double $VALEURNOTESNOTES
 * @property string $DATENOTES
 */
class Note extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'note';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['IDELEVE', 'IDMATIERE'], 'integer'],
            [['VALEURNOTESNOTES'], 'number'],
            [['DATENOTES'], 'safe'],
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
            'IDMATIERE' => 'Idmatiere',
            'VALEURNOTESNOTES' => 'Valeurnotesnotes',
            'DATENOTES' => 'Datenotes',
        ];
    }
}
