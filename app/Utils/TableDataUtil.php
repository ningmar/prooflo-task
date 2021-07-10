<?php


namespace App\Utils;


class TableDataUtil
{
    /**
     * Simplify the query for the parameter
     * @param $model
     * @param array $search_columns
     * @param null $query
     * @param bool $start_with_or_where
     * @return mixed
     */
    public static function table($model, $search_columns = [], $query = null, $start_with_or_where = false)
    {
        if ($query) {
            $model = $model->where(function ($q) use ($query, $search_columns, $start_with_or_where) {
                if ($start_with_or_where) {
                    $model = $q->orWhere($search_columns[0], 'LIKE', '%' . $query . '%');
                } else {
                    $model = $q->where($search_columns[0], 'LIKE', '%' . $query . '%');
                }
                foreach ($search_columns as $column) {
                    $model = $model->orWhere($column, 'LIKE', '%' . $query . '%');
                }
                return $model;
            });
        }


        $rowsPerPage = request('rowsPerPage') ? request('rowsPerPage') : 20;

        if (request()->has('sortBy')) {
            $desc = request('descending') ? 'DESC' : 'ASC';
            $model = $model->orderBy(request('sortBy'), $desc);
        }

        if ($rowsPerPage == -1) {
            $rowsPerPage = $model->count();
        }
        $data = $model->paginate($rowsPerPage);
        return $data;
    }

}
