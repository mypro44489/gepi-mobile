<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "matiere".
 *
 * @property integer $ID
 * @property string $LIBELLEMATIERE
 *
 * @property Emploidutemps[] $emploidutemps
 */
class Matiere extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'matiere';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['LIBELLEMATIERE'], 'string'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'ID' => 'ID',
            'LIBELLEMATIERE' => 'Libellematiere',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEmploidutemps()
    {
        return $this->hasMany(Emploidutemps::className(), ['IDMATIERE' => 'ID']);
    }
}
