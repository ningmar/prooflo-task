<?php

namespace App\Models\Traits;

use Illuminate\Support\Facades\DB;

trait CommonEventListener
{
    public static function bootCommonEventListener()
    {
        static::deleting(function ($model) {
            $table = ($model->getTable());
//            $columns = Schema::getColumnListing($table);
            $columns = DB::select(DB::raw("SHOW INDEXES FROM $table WHERE NOT Non_unique and Key_Name <> 'PRIMARY'"));
            foreach ($columns as $column){
                $model->{$column->Column_name} = $model->{$column->Column_name} . '_' . time();
                $model->save();
            }
        });
    }
}
