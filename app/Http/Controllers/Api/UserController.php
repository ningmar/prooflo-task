<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Utils\TableDataUtil;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     *
     */
    public function index()
    {
        $model = new User();

        $data = TableDataUtil::table($model,['name','email'], \request('query'));

        return UserResource::collection($data)
            ->response()
            ->setStatusCode(200);
    }


    public function create()
    {
    }

    public function store(UserRequest $userRequest)
    {
        User::create([
            'name' => $userRequest->get('name'),
            'email' => $userRequest->get('email'),
            'password' => bcrypt($userRequest->get('password')),
            'mobile_number' => $userRequest->get('mobile_number'),
            'gender' => $userRequest->get('gender'),
            'dob' => Carbon::parse($userRequest->get('dob'))->toDateString()
        ]);


        return response()->json([
            'message' => 'created Successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    public function update(UserRequest $userRequest, $id)
    {
        $user = User::findorfail($id);

        $user->update([
            'name' => $userRequest->get('name'),
            'email' => $userRequest->get('email'),
            'password' => bcrypt($userRequest->get('password')),
            'mobile_number' => $userRequest->get('mobile_number'),
            'gender' => $userRequest->get('gender'),
            'dob' => Carbon::parse($userRequest->get('dob'))->toDateString()
        ]);

        return response()->json([
            'message' => 'updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findorfail($id);

        $user->delete();

        return response()->json([
            'message' => 'Deleted Successfully'
        ],200);
    }
}
