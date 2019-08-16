<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "parent_eleve".
 *
 * @property integer $parentId
 * @property integer $eleveId
 */
class ParentEleve extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'parent_eleve';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['parentId', 'eleveId'], 'required'],
            [['parentId', 'eleveId'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'parentId' => 'Parent ID',
            'eleveId' => 'Eleve ID',
        ];
    }
}
