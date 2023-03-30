<?php

namespace App\Http\Controllers;

use App\Models\Power;
use App\Http\Requests\StorePowerRequest;
use App\Http\Requests\UpdatePowerRequest;
use Illuminate\Http\Request;
class PowerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Power::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePowerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePowerRequest $request)
    {
        $power = new Power;
        $power->day = $request->day;
        $power->production = $request->production;
        $power->powerunit = $request->powerunit;
        $power->save();
        return $power;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Power  $power
     * @return \Illuminate\Http\Response
     */
    public function show(string $id)
    {
        if (isset(Power::find($id)->id)) return response()->json(Power::find($id), 200);
        else return response()->json(array("message"=>"no consumption"), 404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Power  $power
     * @return \Illuminate\Http\Response
     */
    public function edit(Power $power)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePowerRequest  $request
     * @param  \App\Models\Power  $power
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $power = Power::find($request->id);
        if (isset($power->id)){
            $power->day=$request->day;
            $power->production=$request->production;
            $power->powerunit=$request->powerunit;
            $power->save();
            return $power;
        }
        else return response()->json(array("message"=>"no consumption!"), 404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Power  $power
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        if (isset(Power::find($id)->id)){
            Power::destroy($id);
            return array("success"=>true);
        } 
        else return array("success"=>false);
    }
}
