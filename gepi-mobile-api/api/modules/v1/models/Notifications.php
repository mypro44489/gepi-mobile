<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "notifications".
 *
 * @property integer $ID
 * @property string $contenu
 * @property string $date_notif
 */
class Notifications extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'notifications';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['contenu'], 'string'],
            [['date_notif'], 'required'],
            [['date_notif'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'ID' => 'ID',
            'contenu' => 'Contenu',
            'date_notif' => 'Date Notif',
        ];
    }
}
