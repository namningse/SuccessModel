<?php

class FacultyApiController extends \BaseController {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index() {
        $response = Response::json(Faculty::all());
        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store() {
        $faculty = new Faculty();
        $faculty->name = Input::get('name');
        $faculty->description = Input::get('description');
        $faculty->save();
        return Response::json($faculty);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id) {
        $faculty = Faculty::find($id);
        return Response::json($faculty);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id) {
        $faculty = Faculty::find($id);
        return Response::json($faculty);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id) {
        $faculty = Faculty::find($id);
        $faculty->name = Input::get('name');
        $faculty->description = Input::get('description');
        $faculty->save();
        return Response::json($faculty);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id) {

        Faculty::find($id)->delete();
        return [true];
    }

}
