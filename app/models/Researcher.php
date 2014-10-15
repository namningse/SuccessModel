<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Faculty
 *
 * @author chaow.po
 */
class Researcher extends NeoEloquent{
    
    public function faculty(){
        return $this->belongsTo('Faculty','IN');
    }
    
}
