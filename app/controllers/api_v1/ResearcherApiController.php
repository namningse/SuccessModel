<?php

class ResearcherApiController extends \BaseController {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index() {
        $response = Response::json(Researcher::with('faculty')->get());
        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create() {
        $researcher = new Researcher();
        $researcher->title = "";
        $researcher->firstname = "";
        $researcher->lastname = "";
        $researcher->faculty = "";
        return $researcher;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store() {




        $researcher = new Researcher();
        $researcher->title = Input::get('title');
        $researcher->firstname = Input::get('firstname');
        $researcher->lastname = Input::get('lastname');
        $researcher->save();

        if (Input::has('faculty')) {
            $faculty = Faculty::find(Input::get('faculty'));
            $researcher->faculty()->associate($faculty)->save();
        }


        return $researcher;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id) {
        return Response::json(Researcher::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id) {
        $researcher = Researcher::with('faculty')->find($id);
        return Response::json($researcher);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id) {

        $faculty = Faculty::find(Input::get('faculty'));
        $researcher = Researcher::find($id);
        $researcher->title = Input::get('title');
        $researcher->firstname = Input::get('firstname');
        $researcher->lastname = Input::get('lastname');
        $researcher->save();
        
        if (Input::has('faculty')) {
            $faculty = Faculty::find(Input::get('faculty'));
            $researcher->faculty()->dissociate();
            $researcher->faculty()->associate($faculty)->save();
        }else {
            $researcher->faculty()->dissociate();
        }

        return $researcher;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id) {
        Researcher::destroy(intval($id));
        return [$id];
        
    }

}
